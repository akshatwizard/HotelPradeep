import GalleryPage from "@/components/GalleryPage";
export const metadata = {
  title: "Front View Gallery",
  description: "Explore Front View Gallery at Hotel Pradeep in Varanasi.",
  alternates: { canonical: "/gallery/front-view-gallery" },
};
export default function Page() {
  return <GalleryPage slug="front-view-gallery" />;
}
