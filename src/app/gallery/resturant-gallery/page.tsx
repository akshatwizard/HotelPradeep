import GalleryPage from "@/components/GalleryPage";
export const metadata = {
  title: "Restaurant Gallery",
  description: "Explore Restaurant Gallery at Hotel Pradeep in Varanasi.",
  alternates: { canonical: "/gallery/resturant-gallery" },
};
export default function Page() {
  return <GalleryPage slug="resturant-gallery" />;
}
