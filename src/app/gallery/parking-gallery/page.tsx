import GalleryPage from "@/components/GalleryPage";
export const metadata = {
  title: "Parking Gallery",
  description: "Explore Parking Gallery at Hotel Pradeep in Varanasi.",
  alternates: { canonical: "/gallery/parking-gallery" },
};
export default function Page() {
  return <GalleryPage slug="parking-gallery" />;
}
