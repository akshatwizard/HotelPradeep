import { hotel } from "@/lib/content";
import { hotelFaqs } from "@/lib/faqs";
import { Eyebrow } from "./ui";
import Icon from "./Icon";

export default function HomeGuestInformation() {
  return (
    <>
      <section className="section shell home-location" id="hotel-location" aria-labelledby="hotel-location-title">
        <div className="home-location-copy">
          <Eyebrow>Find us in Varanasi</Eyebrow>
          <h2 id="hotel-location-title">Your way to<br /><em>Hotel Pradeep.</em></h2>
          <p>{hotel.address}</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Pradeep+Jagatganj+Varanasi" target="_blank" rel="noopener noreferrer">
            Get directions <Icon name="diagonal" />
          </a>
          <a className="home-location-phone" href="tel:+917408423503"><Icon name="phone" width="18" height="18" />{hotel.phones[0]}</a>
        </div>
        <div className="home-location-map">
          <iframe src={hotel.map} title="Hotel Pradeep location on Google Maps" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
      <section className="section section-tinted" id="faqs" aria-labelledby="hotel-faq-title">
        <div className="shell home-faq-layout">
          <div>
            <Eyebrow>Before your visit</Eyebrow>
            <h2 id="hotel-faq-title">Frequently asked<br /><em>questions.</em></h2>
            <p>Planning your stay? Find answers to frequently asked questions about Hotel Pradeep.</p>
          </div>
          <div className="home-faq-list">
            {hotelFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<Icon name="chevron" width="18" height="18" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
