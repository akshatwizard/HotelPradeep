import type { Metadata } from "next";
import Link from "next/link";
import { destinations, cityExperiences } from "@/lib/varanasi";
import { photos } from "@/lib/photos";
import photoCredits from "@/lib/varanasi-photo-credits.json";
import { Eyebrow, PageIntro, Photo, TextLink } from "@/components/ui";
import { BookButton } from "@/components/BookingProvider";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Explore Varanasi | Ghats, Temples & Places to Visit",
  description: "Discover Varanasi with Hotel Pradeep: Kashi Vishwanath Temple, the Ganga ghats, Sarnath, Ramnagar Fort, BHU and more, with photographs and practical visit tips.",
  alternates: { canonical: "/varanasi" },
};

export default function VaranasiPage() {
  return (
    <>
      <PageIntro eyebrow="Varanasi" title="An ancient city. A thousand living stories." description="Discover the ghats, sacred spaces, and everyday magic of Kashi, with Hotel Pradeep as your address in the city." image={photos.gangesPanorama} imageAlt="A panorama of Varanasi's ghats and the Ganges" />
      <section className="section shell city-introduction">
        <div>
          <Eyebrow>Kashi · Banaras · Varanasi</Eyebrow>
          <h2>A city to feel.<br /><em>And remember.</em></h2>
        </div>
        <div>
          <p>On the banks of the Ganges, Varanasi brings together sacred traditions, historic architecture, and a remarkable rhythm of daily life. Morning light on the ghats, temple bells in the lanes, and evening prayers by the river each reveal a different side of the city.</p>
          <p>Explore a few of its most memorable places below, then leave time for discoveries of your own. Our travel desk can help with local guidance and transport arrangements during your stay.</p>
          <a className="text-link" href="#destinations">Find your next stop <Icon name="arrow" /></a>
        </div>
      </section>
      <section className="section section-tinted" id="destinations">
        <div className="shell">
          <div className="section-heading">
            <div><Eyebrow>Places to discover</Eyebrow><h2>Many ways to<br /><em>meet Varanasi.</em></h2></div>
            <p className="heading-aside">From riverfront rituals to Buddhist heritage, these places offer a starting point for your time in the city.</p>
          </div>
          <nav className="destination-jump" aria-label="Varanasi destinations">
            {destinations.map((place) => <a key={place.id} href={`#${place.id}`}>{place.name}<Icon name="diagonal" width="14" height="14" /></a>)}
          </nav>
          <div className="destination-grid">
            {destinations.map((place, index) => (
              <article className="destination-card" key={place.id} id={place.id}>
                <Photo src={`/images/varanasi/${place.id}.webp`} alt={place.imageAlt} sizes="(max-width: 800px) 100vw, 50vw" />
                <div className="destination-copy">
                  <div className="destination-kicker"><span>{String(index + 1).padStart(2, "0")}</span><span>{place.category}</span></div>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <div className="destination-tip"><Icon name="pin" width="18" height="18" /><p>{place.tip}</p></div>
                  <div className="destination-links">
                    <a className="text-link" aria-label={`View ${place.name} on Google Maps`} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`} target="_blank" rel="noreferrer">View on map <Icon name="diagonal" /></a>
                    <a href={place.source} target="_blank" rel="noreferrer">Visitor information <span className="sr-only">for {place.name}</span><Icon name="diagonal" width="14" height="14" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading"><div><Eyebrow>Make time for the moments</Eyebrow><h2>Beyond the<br /><em>places on a map.</em></h2></div></div>
        <div className="city-experiences">
          {cityExperiences.map((experience, index) => <article key={experience.title}><span>0{index + 1}</span><h3>{experience.title}</h3><p>{experience.text}</p></article>)}
        </div>
      </section>
      <section className="section section-navy">
        <div className="shell city-stay">
          <Photo src={photos.roomArchedWide} alt="A welcoming guest room at Hotel Pradeep" />
          <div><Eyebrow light>Your Varanasi address</Eyebrow><h2>A day of discovery.<br /><em>A warm return.</em></h2><p>Return to comfortable rooms, thoughtful dining, and the warmth of Banarasi hospitality at Hotel Pradeep in Jagatganj.</p><div className="city-stay-actions"><BookButton>Enquire about your stay</BookButton><TextLink href="/contact" className="light-link">Speak to our team</TextLink></div></div>
        </div>
      </section>
      <section className="shell city-resources">
        <p>For the latest opening hours, entry arrangements, and local conditions, check the linked visitor information or speak with our team before setting out.</p>
        <details><summary>Photo credits &amp; visitor resources</summary>
          <p>Hotel and panoramic city photographs are supplied by Hotel Pradeep. Destination photographs are credited below; WebP resizing and mobile crops have been applied.</p>
          <ul>{photoCredits.map((credit) => <li key={credit.id}><a href={credit.sourceUrl} target="_blank" rel="noreferrer">{destinations.find((place) => place.id === credit.id)?.name}</a> — {credit.author}. <a href={credit.licenseUrl || credit.sourceUrl} target="_blank" rel="noreferrer">{credit.license}</a>.</li>)}</ul>
          <p>Destination information is based on <a href="https://varanasi.nic.in/tourist-places/" target="_blank" rel="noreferrer">District Varanasi</a>, <a href="https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi" target="_blank" rel="noreferrer">Incredible India</a>, and the <a href="https://kashi.gov.in/" target="_blank" rel="noreferrer">Kashi official portal</a>.</p>
        </details>
        <Link className="text-link" href="/">Back to Hotel Pradeep <Icon name="arrow" /></Link>
      </section>
    </>
  );
}
