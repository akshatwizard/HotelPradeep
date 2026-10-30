import GalleryPage from "@/components/GalleryPage";
export const metadata = {
  title: "Parking Gallery",
  description: "See the free secured parking at Hotel Pradeep, Varanasi. A free driver dormitory with a toilet is available near the parking area.",
  alternates: { canonical: "/gallery/parking-gallery" },
};
export default function Page() {
  return <GalleryPage slug="parking-gallery" />;
}
