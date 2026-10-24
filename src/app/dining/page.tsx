import { PageStructuredData } from "@/components/StructuredData";
import { photos, photoAlbums } from "@/lib/photos";
import { diningParagraphs } from "@/lib/content";
import { Eyebrow, PageIntro, Photo } from "@/components/ui";
import PhotoGallery from "@/components/PhotoGallery";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Poonam & Eden Dining",
  description:
    "Enjoy delicious Indian food at Poonam Restaurant, Hotel Pradeep. Experience the best dining in Varanasi with rich flavors and great service.",
  alternates: { canonical: "/dining" },
};
export default function DiningPage() {
  return (
    <>
      <PageStructuredData path="/dining" />
      <PageIntro
        eyebrow="Dining"
        title="A taste of Banaras. A table to remember."
        description="Discover Poonam Restaurant and Eden Rooftop Restaurant at Hotel Pradeep."
        image={photos.diningRoom}
        imageAlt="Dining at Poonam Restaurant"
      />
      <section className="section shell restaurant-detail" id="poonam">
        <div>
          <Eyebrow>01 / Poonam Restaurant</Eyebrow>
          <h2>
            Rich flavours.
            <br />
            <em>Warm hospitality.</em>
          </h2>
          {diningParagraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="dining-hours">
            <h3>
              <Icon name="clock" />
              At your table
            </h3>
            {diningParagraphs.slice(2, 5).map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
        <Photo
          src={photos.diningTables}
          alt="The interiors of Poonam Restaurant"
        />
      </section>
      <section className="section section-navy" id="eden">
        <div className="shell eden-detail">
          <Photo
            src={photos.terraceGarden}
            alt="The open-air garden setting at Hotel Pradeep"
          />
          <div>
            <Eyebrow light>02 / Eden Rooftop Restaurant</Eyebrow>
            <h2>
              Under the stars.
              <br />
              <em>Above the everyday.</em>
            </h2>
            {diningParagraphs.slice(5).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <Eyebrow>Flavours & spaces</Eyebrow>
            <h2>
              A gallery of
              <br />
              <em>good taste.</em>
            </h2>
          </div>
        </div>
        <PhotoGallery
          title="Restaurant"
          images={photoAlbums.dining}
        />
      </section>
    </>
  );
}
