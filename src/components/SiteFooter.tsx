import Image from "next/image";
import Link from "next/link";
import GroupVentures from "./GroupVentures";
import { hotel, navigation } from "@/lib/content";
import { BookButton } from "./BookingProvider";
import Icon from "./Icon";
import { Eyebrow } from "./ui";

export default function SiteFooter() {
  return (
    <>
      <section className="stay-invitation">
        <div className="shell invitation-inner">
          <div>
            <Eyebrow>Warm hospitality. A memorable stay.</Eyebrow>
            <h2>
              Varanasi is calling.
              <br />
              <em>Make yourself at home.</em>
            </h2>
          </div>
          <div className="invitation-action">
            <BookButton>Book your stay</BookButton>
            <a href="tel:+917408423503">Or call {hotel.phones[0]}</a>
          </div>
        </div>
      </section>
      <GroupVentures />
      <footer className="site-footer">
        <div className="shell footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="brand footer-brand">
              <Image
                src="/img/logo/logo_trans.png"
                width={64}
                height={64}
                alt="Hotel Pradeep logo"
              />
              <span>
                <small>HOTEL</small>
                <strong>PRADEEP</strong>
                <span className="brand-location">VARANASI</span>
              </span>
            </Link>
            <p>
              Hotel Pradeep is a paragon of luxury, situated in the vibrant
              heart of Varanasi. Its prime location ensures easy access to major
              attractions and essential services, making it an ideal choice for
              both leisure and business travelers.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/tariff">Room tariff</Link>
            </nav>
          </div>
          <div className="footer-contact">
            <h3>Find us in Varanasi</h3>
            <p>
              <Icon name="pin" />
              {hotel.address}
            </p>
            <div className="footer-phone-list">
              {hotel.phones.map((phone, index) => (
                <a
                  href={`tel:${index < 2 ? phone.replace(/\s/g, "") : `+91${phone.replace(/\D/g, "").replace(/^0/, "")}`}`}
                  key={phone}
                >
                  {phone}
                </a>
              ))}
            </div>
            <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
            <a href={`mailto:${hotel.reservationEmail}`}>
              {hotel.reservationEmail}
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>
            © {new Date().getFullYear()} Hotel Pradeep. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a href="https://wizards.co.in/">
              Wizards
              <Icon name="diagonal" width="13" height="13" />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
