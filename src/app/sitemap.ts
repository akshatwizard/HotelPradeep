import type { MetadataRoute } from "next";
import { galleries, navigation } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((page) => page.href),
    "/tariff",
    ...galleries.map((gallery) => `/gallery/${gallery.slug}`),
  ].map((path) => ({
    url: `https://hotelpradeep.com${path === "/" ? "" : path}`,
  }));
}
