import { PageStructuredData } from "./StructuredData";
import Link from "next/link";
import { galleries } from "@/lib/content";
import PhotoGallery from "./PhotoGallery";
import { Eyebrow, PageIntro } from "./ui";
import Icon from "./Icon";

export default function GalleryPage({ slug }: { slug: string }) {
  const gallery = galleries.find((item) => item.slug === slug)!;
  return (
    <>
      <PageStructuredData path={`/gallery/${slug}`} />
      <PageIntro
        eyebrow="Gallery"
        title={gallery.title}
        description={gallery.description}
        image={gallery.cover}
        imageAlt={gallery.title}
      />
      <section className="section shell">
        <div className="section-heading">
          <div>
            <Eyebrow>{gallery.images.length} photographs</Eyebrow>
            <h2>
              Explore the
              <br />
              <em>{gallery.title.toLowerCase()}.</em>
            </h2>
          </div>
          <Link className="text-link" href="/gallery">
            All albums
            <Icon name="arrow" />
          </Link>
        </div>
        <PhotoGallery images={gallery.images} title={gallery.title} />
        <nav className="album-navigation" aria-label="More photo albums">
          {galleries
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link key={item.slug} href={`/gallery/${item.slug}`}>
                {item.title}
                <Icon name="diagonal" />
              </Link>
            ))}
        </nav>
      </section>
    </>
  );
}
