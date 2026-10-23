import Link from "next/link";
import { facilities, galleries, introParagraphs, rooms } from "@/lib/content";
import { BookButton } from "@/components/BookingProvider";
import BookingBar from "@/components/BookingBar";
import RoomCard from "@/components/RoomCard";
import Reviews from "@/components/Reviews";
import HotelVideo from "@/components/HotelVideo";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { Eyebrow, Photo, TextLink } from "@/components/ui";

export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  const amenities: { index: number; icon: IconName }[] = [
    { index: 0, icon: "clock" },
    { index: 2, icon: "wifi" },
    { index: 5, icon: "coffee" },
    { index: 11, icon: "car" },
  ];
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <Eyebrow>A warm welcome to Varanasi</Eyebrow>
          <h1>
            A place of light
            <br />
            &amp; <em>comfort.</em>
          </h1>
          <p>
            Comfortable rooms, delicious dining, and the warmth of Banarasi
            hospitality. Welcome to Hotel Pradeep.
          </p>
          <div className="hero-actions">
            <BookButton>Book your stay</BookButton>
            <TextLink href="/rooms">Explore our rooms</TextLink>
          </div>
          <div className="hero-accreditation">
            <span className="three-stars" aria-label="3-star hotel">
              ✦ ✦ ✦
            </span>
            <span>
              A 3-Star Hotel Approved by the Ministry
              <br className="desktop-break" /> of Tourism, Government of India
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            src="/img/banner/home_banner-02.jpg"
            alt="Sunlight through the arched windows of a room at Hotel Pradeep"
            priority
            sizes="(max-width: 800px) 100vw, 60vw"
          />
          <span className="hero-photo-caption">
            YOUR ADDRESS IN THE HEART OF VARANASI
          </span>
          <span className="hero-photo-index">01 — HOTEL PRADEEP</span>
        </div>
        <div className="hero-side-label" aria-hidden="true">
          STAY · DINE · DISCOVER
        </div>
      </section>
      <BookingBar />
      <section className="section shell intro-section">
        <div className="intro-photos">
          <Photo
            src="/img/about/about-banner-03.jpg"
            alt="The exterior of Hotel Pradeep in Jagatganj"
            className="intro-photo-main"
          />
          <Photo
            src="/img/about/abt-02.jpg"
            alt="Dining at Hotel Pradeep"
            className="intro-photo-small"
          />
          <div className="intro-seal">
            <span>HOTEL PRADEEP</span>
            <strong>Varanasi</strong>
            <span>WARM HOSPITALITY</span>
          </div>
        </div>
        <div className="section-copy">
          <Eyebrow>More than just a stay</Eyebrow>
          <h2>
            Comfort, taste,
            <br />
            and a little
            <br />
            <em>Banarasi charm.</em>
          </h2>
          {introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <TextLink href="/about">Our story</TextLink>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>Rest beautifully</Eyebrow>
              <h2>
                A room for
                <br />
                <em>your kind of stay.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Elegant rooms, modern amenities, and a warm touch of Banarasi
                hospitality.
              </p>
              <TextLink href="/rooms">Explore all rooms</TextLink>
            </div>
          </div>
          <div className="room-card-grid">
            {rooms.map((room, index) => (
              <RoomCard room={room} index={index} key={room.id} />
            ))}
          </div>
          <p className="tariff-note">
            View{" "}
            <Link href="/tariff">room tariffs and additional information</Link>{" "}
            before making your enquiry.
          </p>
        </div>
      </section>
      <section className="section shell dining-section">
        <div className="section-heading">
          <div>
            <Eyebrow>Flavours of Pradeep</Eyebrow>
            <h2>
              Good food.
              <br />
              <em>Beautiful company.</em>
            </h2>
          </div>
          <TextLink href="/dining">Discover our dining</TextLink>
        </div>
        <div className="dining-editorial">
          <Link href="/dining#poonam" className="dining-feature">
            <Photo
              src="/img/gallery/restaurant.jpg"
              alt="Poonam Restaurant at Hotel Pradeep"
            />
            <div className="dining-feature-caption">
              <span>01 / POONAM</span>
              <h3>A taste of Banaras.</h3>
              <span className="round-arrow">
                <Icon name="diagonal" />
              </span>
            </div>
          </Link>
          <div className="dining-secondary">
            <Photo
              src="/img/banner/home_banner-old-04.jpg"
              alt="The open-air garden dining setting at Hotel Pradeep"
            />
            <div>
              <Eyebrow>Under the stars</Eyebrow>
              <h3>
                Eden Rooftop
                <br />
                <em>Restaurant.</em>
              </h3>
              <p>
                A peaceful open-air setting, a beautiful garden view, and a
                memorable dining experience.
              </p>
              <TextLink href="/dining#eden">Meet Eden</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="amenity-band">
        <div className="shell amenity-band-inner">
          <div>
            <Eyebrow light>Thoughtfully taken care of</Eyebrow>
            <h2>
              Every little
              <br />
              <em>comfort.</em>
            </h2>
            <TextLink href="/facilities" className="light-link">
              All hotel facilities
            </TextLink>
          </div>
          <div className="amenity-preview">
            {amenities.map((item) => (
              <div key={item.index}>
                <Icon name={item.icon} width="30" height="30" />
                <h3>{facilities[item.index].title}</h3>
                <p>{facilities[item.index].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <Eyebrow>Experience Varanasi</Eyebrow>
            <h2>
              A city that stays
              <br />
              <em>with you.</em>
            </h2>
          </div>
          <p className="heading-aside">
            With its prime location, Hotel Pradeep allows easy access to the
            city’s famous ghats, temples, and cultural sites.
          </p>
        </div>
        <div className="experience-grid">
          {[
            {
              image: "/img/gallery/kashi.jpg",
              title: "Kashi Vishwanath Temple",
              description:
                "A sacred shrine dedicated to Lord Shiva, drawing devotees from around the world.",
            },
            {
              image: "/img/gallery/aarti.jpg",
              title: "Ganga Aarti",
              description:
                "A mesmerizing evening ritual on the banks of the Ganges, filled with divine chants and lights.",
            },
            {
              image: "/img/gallery/ghat.jpg",
              title: "Ganga Ghats",
              description:
                "Historic riverfront steps where spirituality, culture, and traditions come alive.",
            },
          ].map((place, index) => (
            <article key={place.title}>
              <Photo src={place.image} alt={place.title} />
              <span className="experience-number">0{index + 1}</span>
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </article>
          ))}
        </div>
        <p className="city-description">
          Varanasi, one of the oldest continuously inhabited cities in the
          world, is a spiritual and cultural hub nestled along the banks of the
          sacred Ganges River in Uttar Pradesh, India. Revered as the holiest
          city in Hinduism, it attracts millions of pilgrims and tourists who
          come to participate in rituals, bathe in the river, and witness the
          mesmerizing Ganga Aarti at Dashashwamedh Ghat. The city’s narrow,
          winding lanes are filled with ancient temples like Kashi Vishwanath,
          bustling markets, and the hauntingly beautiful sounds of devotional
          music. Varanasi is also a center for silk weaving, traditional crafts,
          and philosophical discourse, offering a profound blend of history,
          spirituality, and vibrant daily life that leaves an indelible mark on
          every visitor.
        </p>
      </section>
      <section className="section section-tinted">
        <div className="shell review-layout">
          <div>
            <Eyebrow>Words from our guests</Eyebrow>
            <h2>
              Stays remembered.
              <br />
              <em>Stories shared.</em>
            </h2>
            <span className="large-quote" aria-hidden="true">
              “
            </span>
          </div>
          <Reviews />
        </div>
      </section>
      <section className="section shell film-section">
        <div className="section-heading">
          <div>
            <Eyebrow>Step inside</Eyebrow>
            <h2>
              A glimpse of
              <br />
              <em>Hotel Pradeep.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Hotel Pradeep, a 3-star hotel approved by the Ministry of Tourism,
            India, offers comfort and warm hospitality in the vibrant city of
            Varanasi. Ideal for a peaceful and pleasant stay!
          </p>
        </div>
        <HotelVideo />
        <p className="film-note">
          The well-furnished rooms and modern amenities ensure a relaxing
          experience. Guests can enjoy the vibrant charm of Varanasi while
          staying in a place that offers both convenience and comfort.
        </p>
      </section>
      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>Through our lens</Eyebrow>
              <h2>
                Picture your
                <br />
                <em>time here.</em>
              </h2>
            </div>
            <TextLink href="/gallery">Explore the gallery</TextLink>
          </div>
          <div className="home-gallery">
            {galleries.slice(0, 4).map((gallery) => (
              <Link href={`/gallery/${gallery.slug}`} key={gallery.slug}>
                <Photo
                  src={gallery.cover}
                  alt={gallery.title}
                  sizes="(max-width: 650px) 50vw, 25vw"
                />
                <span>
                  {gallery.title}
                  <Icon name="diagonal" />
                </span>
              </Link>
            ))}
          </div>
          <div className="home-experiences" aria-label="Hotel experiences">
            <span>Spiritual</span>
            <span>Taste</span>
            <span>Sip</span>
            <span>Luxury</span>
          </div>
        </div>
      </section>
    </>
  );
}
