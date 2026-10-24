import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const origin = "https://hotelpradeep.com";
const build = ".next/server/app";
const output = "docs/structured-data";
const sitemap = await readFile(join(build, "sitemap.xml.body"), "utf8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
assert.equal(paths.length, 22, "Review schema coverage when the route inventory changes");
await mkdir(join(output, "pages"), { recursive: true });
const complete = new Map();
const report = [];
for (const path of paths) {
  const html = await readFile(join(build, path === "/" ? "index.html" : `${path.slice(1)}.html`), "utf8");
  const schemas = [];
  for (const id of ["hotel-site-schema", "hotel-page-schema"]) {
    const matches = [...html.matchAll(new RegExp(`<script\\b[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)<\\/script>`, "g"))];
    assert.equal(matches.length, 1, `${path}: exactly one ${id} block must be server-rendered`);
    const data = JSON.parse(matches[0][1]);
    assert.equal(data["@context"], "https://schema.org");
    schemas.push(data);
  }
  const nodes = schemas.flatMap((data) => data["@graph"]);
  const ids = nodes.map((node) => node["@id"]);
  assert.equal(new Set(ids).size, ids.length, `${path}: duplicate node IDs`);
  assert(nodes.some((node) => node.url === origin + (path === "/" ? "/" : path) && node["@id"].endsWith("#webpage")), `${path}: missing canonical page entity`);
  assert(html.includes("G-9FXDWDJ45Z"), `${path}: GA4 tag missing from global integration payload`);
  for (const node of nodes) {
    if (complete.has(node["@id"])) assert.deepEqual(node, complete.get(node["@id"]), `Conflicting identity: ${node["@id"]}`);
    complete.set(node["@id"], node);
  }
  const filename = `${path === "/" ? "home" : path.slice(1).replaceAll("/", "--")}.json`;
  await writeFile(join(output, "pages", filename), JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 2) + "\n");
  report.push({ path, file: `pages/${filename}`, nodes: nodes.length, types: [...new Set(nodes.flatMap((node) => node["@type"]))] });
}
const all = [...complete.values()];
function validate(value, key = "") {
  if (typeof value === "string" && ["@id", "url", "contentUrl", "item", "sameAs", "license", "hasMap"].includes(key)) assert(URL.canParse(value), `Non-absolute URL: ${value}`);
  if (Array.isArray(value)) return value.forEach((item) => validate(item, key));
  if (!value || typeof value !== "object") return;
  if (Object.keys(value).length === 1 && value["@id"]) assert(complete.has(value["@id"]), `Unresolved internal reference: ${value["@id"]}`);
  assert(!("aggregateRating" in value) && !("review" in value), "Do not add unverified review markup");
  for (const [property, child] of Object.entries(value)) validate(child, property);
}
all.forEach((node) => validate(node));
const offers = all.filter((node) => node["@type"] === "Offer");
assert.deepEqual(offers.map((item) => item.price), [4000, 5000, 6000]);
for (const offer of offers) {
  assert.equal(offer.priceCurrency, "INR");
  assert.equal(offer.businessFunction, "http://purl.org/goodrelations/v1#LeaseOut");
  assert(!("availability" in offer) && !("priceValidUntil" in offer), "No invented availability or validity dates");
}
const attractions = all.filter((node) => node["@type"] === "TouristAttraction");
assert.equal(attractions.length, 8);
assert(attractions.every((node) => !("openingHoursSpecification" in node)), "Uncertain attraction hours must not be asserted in schema");
await writeFile(join(output, "complete-website.json"), JSON.stringify({ "@context": "https://schema.org", "@graph": all }, null, 2) + "\n");
await writeFile(join(output, "coverage.json"), JSON.stringify({ pages: paths.length, entities: all.length, coverage: report }, null, 2) + "\n");
console.log(`Validated and exported ${paths.length} pages, ${all.length} linked entities, ${offers.length} room tariffs and ${attractions.length} attractions.`);
