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
      <PageIntro
        eyebrow="Dining"
        title="A taste of Banaras. A table to remember."
        description="Discover Poonam Restaurant and Eden Rooftop Restaurant at Hotel Pradeep."
        image="/img/gallery/restaurant.jpg"
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
          src="/img/about/abt-02.jpg"
          alt="The interiors of Poonam Restaurant"
        />
      </section>
      <section className="section section-navy" id="eden">
        <div className="shell eden-detail">
          <Photo
            src="/img/banner/home_banner-old-04.jpg"
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
          images={[
            "/img/restaurant/1.jpg",
            "/img/restaurant/2.jpg",
            "/img/restaurant/3.jpg",
            "/img/restaurant/4.jpg",
            "/img/restaurant/5.jpg",
          ]}
        />
      </section>
    </>
  );
}
