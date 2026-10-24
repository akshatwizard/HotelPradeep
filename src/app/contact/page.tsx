import { PageStructuredData } from "@/components/StructuredData";
import { photos } from "@/lib/photos";
import { hotel } from "@/lib/content";
import { PageIntro } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Hotel Pradeep in Jagatganj, Varanasi for bookings, room rates, dining, and more information.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <PageStructuredData path="/contact" />
      <PageIntro
        eyebrow="Contact"
        title="A warm welcome starts with hello."
        description="Get in touch with Hotel Pradeep for your stay, dining, and enquiries."
        image={photos.entranceEvening}
        imageAlt="Hotel Pradeep in Jagatganj, Varanasi"
      />
      <section className="section shell contact-layout">
        <div className="contact-details">
          <p className="eyebrow">Let’s talk</p>
          <h2>
            We’re here
            <br />
            <em>to help.</em>
          </h2>
          <div className="contact-detail">
            <Icon name="pin" />
            <div>
              <h3>Find us</h3>
              <p>
                {hotel.name}
                <br />
                {hotel.address}
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <Icon name="phone" />
            <div>
              <h3>Call us</h3>
              {hotel.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={`tel:${index < 2 ? phone.replace(/\s/g, "") : `+91${phone.replace(/\D/g, "").replace(/^0/, "")}`}`}
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-detail">
            <Icon name="mail" />
            <div>
              <h3>Write to us</h3>
              <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              <a href={`mailto:${hotel.reservationEmail}`}>
                {hotel.reservationEmail}
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-panel">
          <p className="eyebrow">Get in touch</p>
          <h2>How can we help?</h2>
          <EnquiryForm kind="feedback" />
        </div>
      </section>
      <section className="contact-map" aria-label="Hotel location">
        <iframe
          src={hotel.map}
          title="Hotel Pradeep location on Google Maps"
          width="100%"
          height="480"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
