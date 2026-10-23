import { facilities, serviceDetails } from "@/lib/content";
import { Eyebrow, PageIntro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

export const metadata = {
  title: "Hotel Facilities",
  description:
    "Hotel Pradeep offers comfortable rooms, great food, and excellent service. Explore our hotel amenities in Varanasi.",
  alternates: { canonical: "/facilities" },
};
const icons: IconName[] = [
  "clock",
  "coffee",
  "wifi",
  "coffee",
  "lift",
  "coffee",
  "sparkle",
  "phone",
  "mail",
  "wash",
  "shield",
  "car",
  "pin",
  "shield",
  "bed",
  "bed",
  "sparkle",
  "people",
  "shield",
  "pin",
  "diagonal",
];
export default function FacilitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Facilities"
        title="Every little comfort, taken care of."
        description="The Hotel Pradeep offers elegance and comfort, blending modern luxury with warm hospitality for a truly refined experience."
        image="/img/banner/home_banner-03.jpg"
        imageAlt="The reception and guest services at Hotel Pradeep"
      />
      <section className="section shell">
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
                  alt={service.title + " at Hotel Pradeep"}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.hours}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
