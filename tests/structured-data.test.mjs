import test from "node:test";
import assert from "node:assert/strict";
import { serializeJsonLd } from "../src/lib/json-ld.mjs";

test("JSON-LD content cannot close its script element or introduce HTML", () => {
  const input = { name: '</script><script>alert("x")</script>&<tag>', description: "Kashi · Banaras" };
  const serialized = serializeJsonLd(input);
  assert(!serialized.includes("<"));
  assert(!serialized.includes(">"));
  assert(!serialized.includes("&"));
  assert.deepEqual(JSON.parse(serialized), input);
});
