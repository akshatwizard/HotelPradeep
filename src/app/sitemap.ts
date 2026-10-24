import type { MetadataRoute } from "next";
import { galleries, navigation } from "@/lib/content";
import { destinations } from "@/lib/varanasi";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((page) => page.href),
    "/tariff",
    ...destinations.map((place) => `/varanasi/${place.id}`),
    ...galleries.map((gallery) => `/gallery/${gallery.slug}`),
  ].map((path) => ({
    url: `https://hotelpradeep.com${path === "/" ? "" : path}`,
  }));
}
