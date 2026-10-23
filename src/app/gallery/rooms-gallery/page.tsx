import GalleryPage from "@/components/GalleryPage";
export const metadata = {
  title: "Rooms Gallery",
  description: "Explore Rooms Gallery at Hotel Pradeep in Varanasi.",
  alternates: { canonical: "/gallery/rooms-gallery" },
};
export default function Page() {
  return <GalleryPage slug="rooms-gallery" />;
}
