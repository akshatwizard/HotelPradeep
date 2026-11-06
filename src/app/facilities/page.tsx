import ShortsSection from "@/components/ShortsSection";
import StayHighlights from "@/components/StayHighlights";
import { PageStructuredData } from "@/components/StructuredData";
import { facilities, serviceDetails } from "@/lib/content";
import { Eyebrow, PageIntro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

export const metadata = {
  title: "Hotel Facilities",
  description:
    "Free secured parking, a free driver dormitory with a toilet near parking, Mehfil Bar and Blessings Rooftop Banquet at Hotel Pradeep, Varanasi.",
  alternates: { canonical: "/facilities" },
};
const icons: IconName[] = [
  "clock",
  "refrigerator",
  "wifi",
  "cocktail",
  "lift",
  "utensils",
  "airConditioner",
  "phone",
  "mail",
  "wash",
  "stethoscope",
  "car",
  "pin",
  "safe",
  "bed",
  "bath",
  "tap",
  "people",
  "soundproof",
  "pin",
  "diagonal",
  "bed",
  "people",
];
export default function FacilitiesPage() {
  return (
    <>
      <PageStructuredData path="/facilities" />
      <PageIntro
        eyebrow="Facilities"
        title="Every little comfort, taken care of."
        description="The Hotel Pradeep offers elegance and comfort, blending modern luxury with warm hospitality for a truly refined experience."
        image="/images/hotel/facilities-banner.webp"
        mobileImage="/images/hotel/facilities-banner-mobile.webp"
        imageAlt="The illuminated exterior of Hotel Pradeep in Varanasi at dusk"
      />
      <StayHighlights />
      <section className="section shell room-service-highlight" aria-labelledby="room-service-title">
        <div className="room-service-symbol"><Icon name="clock" width="42" height="42" /></div>
        <div>
          <Eyebrow>At your service</Eyebrow>
          <h2 id="room-service-title">24-Hour Room Service</h2>
          <p>{facilities[0].description}</p>
        </div>
        <a className="text-link" href="#hotel-facilities">Explore all facilities <Icon name="arrow" /></a>
      </section>
      <section className="section shell" id="hotel-facilities">
        <div className="section-heading">
          <div>
            <Eyebrow>Experience comfort</Eyebrow>
            <h2>
              For a stay
              <br />
              <em>at ease.</em>
            </h2>
          </div>
          <p className="heading-aside">
            From 24-hour room service to travel assistance, explore the
            facilities available at Hotel Pradeep.
          </p>
        </div>
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <article key={facility.title}>
              <span className="facility-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon name={icons[index]} width="32" height="32" />
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>At your service</Eyebrow>
              <h2>
                Make the most
                <br />
                <em>of your time here.</em>
              </h2>
            </div>
          </div>
          <div className="service-details-grid">
            {serviceDetails.map((service) => (
              <article key={service.title}>
                <Photo
                  src={service.image}
                  alt={service.imageAlt}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.hours}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ShortsSection path="/facilities" title="A little space to unwind." description="Take a short tour of the courtyard and lounge spaces." />
    </>
  );
}
