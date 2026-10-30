import { PageStructuredData } from "@/components/StructuredData";
import { photos, photoAlbums } from "@/lib/photos";
import { diningParagraphs, gatheringVenues } from "@/lib/content";
import { Eyebrow, PageIntro, Photo, TextLink } from "@/components/ui";
import PhotoGallery from "@/components/PhotoGallery";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Dining, Mehfil Bar & Blessings Rooftop Banquet",
  description:
    "Discover Poonam Restaurant, Eden Rooftop Restaurant, Mehfil Bar and Blessings Rooftop Banquet at Hotel Pradeep, Varanasi.",
  alternates: { canonical: "/dining" },
};
export default function DiningPage() {
  return (
    <>
      <PageStructuredData path="/dining" />
      <PageIntro
        eyebrow="Dining"
        title="A taste of Banaras. A table to remember."
        description="Discover Poonam Restaurant, Eden Rooftop Restaurant, Mehfil Bar and Blessings Rooftop Banquet at Hotel Pradeep."
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
      <section className="section shell" aria-label="Bar and rooftop banquet">
        <div className="section-heading">
          <div><Eyebrow>Gather at Pradeep</Eyebrow><h2>Good company.<br /><em>Special occasions.</em></h2></div>
        </div>
        <div className="venue-details-grid">
          {gatheringVenues.map((venue) => (
            <article key={venue.id} id={venue.id}>
              <Photo src={venue.image} alt={venue.imageAlt} />
              <h3>{venue.title}</h3>
              <p>{venue.description}</p>
              <TextLink href="/contact">Enquire with our team</TextLink>
            </article>
          ))}
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
