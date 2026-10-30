import ShortsSection from "@/components/ShortsSection";
import { PageStructuredData } from "@/components/StructuredData";
import { photos } from "@/lib/photos";
import { aboutOffers, aboutParagraphs, hotel } from "@/lib/content";
import { BookButton } from "@/components/BookingProvider";
import { Eyebrow, PageIntro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata = {
  title: "About Our Hotel",
  description:
    "Hotel Pradeep, a 3-star luxury hotel in Varanasi, offers comfort, fine dining at Poonam Restaurant, and warm hospitality for tourists & business travelers.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <>
      <PageStructuredData path="/about" />
      <PageIntro
        eyebrow="About us"
        title="A place of light. A warm welcome."
        description="Hotel Pradeep — a comfortable stay in the heart of Varanasi."
        image={photos.facadeNight}
        imageAlt="The historic-style facade of Hotel Pradeep"
      />
      <section className="section shell about-story">
        <div>
          <Eyebrow>Hotel Pradeep, Varanasi</Eyebrow>
          <h2>
            Comfort, elegance,
            <br />
            <em>and hospitality.</em>
          </h2>
          <div className="about-stat">
            <strong>36</strong>
            <span>Elegantly appointed rooms</span>
          </div>
          <Photo
            src={photos.roomArchedWindows}
            alt="Arched windows of Hotel Pradeep"
            className="about-story-photo"
          />
        </div>
        <div className="prose">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <BookButton>Enquire about your stay</BookButton>
          <a className="story-phone" href="tel:+917408423503">
            <Icon name="phone" />
            {hotel.phones[0]}
          </a>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="shell about-offers">
          <Photo
            src={photos.diningDaylight}
            alt="The hotel's restaurant and gathering space"
          />
          <div>
            <Eyebrow>What we offer</Eyebrow>
            <h2>
              Everything for
              <br />
              <em>a comfortable stay.</em>
            </h2>
            <ul className="editorial-list">
              {aboutOffers.map((offer, index) => (
                <li key={offer}>
                  <span>0{index + 1}</span>
                  <p>{offer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ShortsSection path="/about" title="A closer look around." description="Discover the courtyard, distinctive architecture and welcoming lounge spaces." />
    </>
  );
}
