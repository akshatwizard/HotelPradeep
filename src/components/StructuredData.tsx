import { getPageSchema, getSiteSchema } from "@/lib/structured-data";
import { serializeJsonLd } from "@/lib/json-ld.mjs";

export function SiteStructuredData() {
  return <script id="hotel-site-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(getSiteSchema()) }} />;
}
export function PageStructuredData({ path }: { path: string }) {
  return <script id="hotel-page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(getPageSchema(path)) }} />;
}
