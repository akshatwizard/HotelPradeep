import { PageStructuredData } from "@/components/StructuredData";
import { photos } from "@/lib/photos";
import Link from "next/link";
import { galleries } from "@/lib/content";
import { PageIntro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Explore Hotel Pradeep’s gallery and see our rooms, dining, and facilities. Get a glimpse of the hotel experience in Varanasi.",
  alternates: { canonical: "/gallery" },
};
export default function GalleryPage() {
  return (
    <>
      <PageStructuredData path="/gallery" />
      <PageIntro
        eyebrow="Gallery"
        title="A little closer to your next stay."
        description="Explore Hotel Pradeep, one photograph at a time."
        image={photos.lobbyWide}
        imageAlt="Inside Hotel Pradeep"
      />
      <section className="section shell gallery-albums">
        {galleries.map((gallery, index) => (
          <Link
            className={`album album-${index}`}
            href={`/gallery/${gallery.slug}`}
            key={gallery.slug}
          >
            <Photo
              src={gallery.cover}
              alt={gallery.title}
              sizes="(max-width: 650px) 100vw, 50vw"
            />
            <div className="album-description">
              <span className="album-number">
                0{index + 1} / {gallery.images.length} PHOTOGRAPHS
              </span>
              <h2>{gallery.title}</h2>
              <p>{gallery.description}</p>
              <span className="round-arrow">
                <Icon name="diagonal" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
