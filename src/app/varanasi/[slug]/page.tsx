import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/varanasi";
import { destinationGuides, guideReviewed, hotelDirections } from "@/lib/destination-guides";
import photoCredits from "@/lib/varanasi-photo-credits.json";
import { Eyebrow, Photo, TextLink } from "@/components/ui";
import Icon from "@/components/Icon";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return destinations.map((place) => ({ slug: place.id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = destinations.find((item) => item.id === slug);
  if (!place) return {};
  return {
    title: `${place.name}: Timings & Travel from Hotel Pradeep`,
    description: `Plan your visit to ${place.name}: opening hours, best time to visit, what to carry, practical advice and estimated journeys from Hotel Pradeep, Varanasi.`,
    alternates: { canonical: `/varanasi/${slug}` },
    openGraph: { images: [{ url: `/images/varanasi/${slug}.webp`, alt: place.imageAlt }] },
  };
}
export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const place = destinations.find((item) => item.id === slug);
  const guide = destinationGuides[slug];
  if (!place || !guide) notFound();
  const credit = photoCredits.find((item) => item.id === slug);
  const nearby = destinations.filter((item) => guide.nearby.includes(item.id));
  return <>
    <section className="destination-hero">
      <div className="destination-hero-copy">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/varanasi">Varanasi</Link><span>/</span><span aria-current="page">{place.name}</span></nav>
        <Eyebrow>{place.category}</Eyebrow>
        <h1>{place.name}</h1>
        <p className="destination-tagline">{guide.tagline}</p>
        <a className="button" href="#getting-there">Plan your journey <Icon name="arrow" /></a>
      </div>
      <Photo src={`/images/varanasi/${slug}.webp`} alt={place.imageAlt} priority sizes="(max-width: 800px) 100vw, 55vw" />
    </section>
    <nav className="guide-navigation shell" aria-label="On this page"><a href="#the-place">The experience</a><a href="#visit-planner">Timings &amp; best time</a><a href="#getting-there">From the hotel</a><a href="#visit-advice">Carry &amp; avoid</a></nav>
    <section className="section shell guide-overview" id="the-place">
      <div><Eyebrow>A closer look</Eyebrow><h2>Make time<br /><em>to be here.</em></h2></div>
      <div><p className="guide-description">{place.description}</p><ul className="guide-highlights">{guide.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
    <section className="section section-tinted" id="visit-planner">
      <div className="shell">
        <div className="section-heading"><div><Eyebrow>Your visit, thoughtfully planned</Eyebrow><h2>When to go.<br /><em>What to expect.</em></h2></div><p className="heading-aside">All times are local to Varanasi (IST). Check the linked visitor resources before leaving, particularly on festival days.</p></div>
        <div className="guide-planner">
          <article className="guide-hours"><span className="guide-label">Opening &amp; programme times</span>{guide.hours.map((item) => <div key={item.label}><h3>{item.label}</h3><p>{item.detail}</p></div>)}</article>
          <div className="guide-planner-side"><article><span className="guide-label">Best time to visit</span><p>{guide.bestTime}</p><p>{guide.season}</p></article><article className="guide-duration"><Icon name="clock" /><div><span className="guide-label">Time to set aside</span><p>{guide.duration}</p></div></article></div>
        </div>
      </div>
    </section>
    <section className="section shell" id="getting-there">
      <div className="section-heading"><div><Eyebrow>Start at Hotel Pradeep</Eyebrow><h2>Your route<br /><em>to {slug === "kashi-vishwanath" ? "the temple" : slug === "dashashwamedh" || slug === "assi" || slug === "namo" ? "the river" : "discovery"}.</em></h2></div><div className="heading-aside"><p>From our hotel in Jagatganj, near Lahurabir, Varanasi.</p><a className="text-link" href={hotelDirections(place.mapQuery)} target="_blank" rel="noreferrer">Check current directions <Icon name="diagonal" /></a></div></div>
      <div className="guide-estimate-note"><Icon name="clock" width="21" height="21" /><p><strong>Planning estimates, not live journey times.</strong> These broad ranges are editorial estimates for an ordinary day, not measured routes or confirmed transport services. Road time and the additional walk are shown separately. Queues, parking searches, transfers and aarti / festival congestion are extra; check a live route before leaving.</p></div>
      <div className="journey-list">{guide.journeys.map((journey) => <article className="journey-row" key={journey.mode}>
        <div className="journey-mode"><h3>{journey.mode}</h3><p>{journey.time}</p>{journey.walk && <span>{journey.walk}</span>}</div>
        <p className="journey-directions">{journey.directions}</p>
        {journey.mapMode ? <a href={hotelDirections(place.mapQuery, journey.mapMode)} target="_blank" rel="noreferrer" className="journey-map">{journey.mode === "Auto / e-rickshaw" ? "Road route reference" : "Open route"}<Icon name="diagonal" width="17" height="17" /><span className="sr-only"> for {journey.mode} to {place.name}</span></a> : <span className="journey-unavailable">Arrange transport</span>}
      </article>)}</div>
      <div className="guide-transport-note"><h3>Shared transport &amp; other options</h3><p>{guide.transportNote}</p><p>Auto and e-rickshaw links show a standard driving route as a reference, not a verified route for that vehicle. Fares, permissions and service availability must be agreed locally.</p></div>
      <div className="guide-access"><Icon name="pin" /><div><h3>The final approach</h3><p>{guide.access}</p></div></div>
    </section>
    <section className="section section-navy" id="visit-advice"><div className="shell guide-advice">
      <div><Eyebrow light>A little preparation</Eyebrow><h2>Travel lightly.<br /><em>Visit thoughtfully.</em></h2><p>Practical suggestions for a more comfortable visit to {place.name}.</p></div>
      <article><h3>What to carry</h3><ul>{guide.carry.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><h3>What to avoid</h3><ul>{guide.avoid.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </div></section>
    <section className="section shell">
      <div className="section-heading"><div><Eyebrow>Keep exploring</Eyebrow><h2>Another side<br /><em>of Varanasi.</em></h2></div><TextLink href="/varanasi">All eight destinations</TextLink></div>
      <div className="guide-related">{nearby.map((item) => <article key={item.id}><Link href={`/varanasi/${item.id}`} aria-label={`Explore ${item.name}`}><Photo src={`/images/varanasi/${item.id}.webp`} alt={item.imageAlt} sizes="(max-width: 650px) 100vw, 33vw" /></Link><span className="guide-label">{item.category}</span><h3><Link href={`/varanasi/${item.id}`}>{item.name}</Link></h3><TextLink href={`/varanasi/${item.id}`}>Plan your visit</TextLink></article>)}</div>
    </section>
    <section className="guide-hotel-help section-tinted"><div className="shell"><div><Eyebrow>Your Varanasi address</Eyebrow><h2>Let us help you<br /><em>plan the day.</em></h2><p>Speak to the Hotel Pradeep team about local conditions, a practical departure time and transport arrangements for your group.</p></div><TextLink href="/contact">Contact our team</TextLink></div></section>
    <section className="shell city-resources guide-resources"><p>Visitor information reviewed {guideReviewed}. Published hours and access may change; travel ranges and packing advice are planning suggestions from this guide. Admission prices are not quoted because categories and charges can change.</p>
      <details><summary>Visitor resources &amp; photograph credit</summary><ul><li><a href={place.source} target="_blank" rel="noreferrer">{place.name}: visitor information</a></li>{guide.resources?.map((resource) => <li key={resource.href}><a href={resource.href} target="_blank" rel="noreferrer">{resource.label}</a></li>)}</ul>{credit && <p>Photograph: <a href={credit.sourceUrl} target="_blank" rel="noreferrer">{credit.author}</a> — <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}</a>. WebP resizing and dedicated mobile crops applied. Cropped adaptations of CC BY-SA photographs retain that licence.</p>}</details>
      <TextLink href="/varanasi">Back to the Varanasi guide</TextLink>
    </section>
  </>;
}
