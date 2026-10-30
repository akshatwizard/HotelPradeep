import StayHighlights from "@/components/StayHighlights";
import { PageStructuredData } from "@/components/StructuredData";
import { photos } from "@/lib/photos";
import Link from "next/link";
import { rooms } from "@/lib/content";
import { BookButton } from "@/components/BookingProvider";
import RoomImages from "@/components/RoomImages";
import Icon from "@/components/Icon";
import { Eyebrow, PageIntro } from "@/components/ui";

export const metadata = {
  title: "Rooms & Suites",
  description:
    "Hotel Pradeep offers comfortable rooms in Varanasi. Enjoy a relaxing stay with good service and modern facilities. Perfect for all travelers!",
  alternates: { canonical: "/rooms" },
};
export default function RoomsPage() {
  return (
    <>
      <PageStructuredData path="/rooms" />
      <PageIntro
        eyebrow="Rooms & suites"
        title="Rest well. Wake up in Varanasi."
        description="Well-appointed rooms with modern amenities and the warmth of Banarasi hospitality."
        image={photos.roomCarpetWindows}
        imageAlt="A guest room at Hotel Pradeep"
      />
      <StayHighlights />
      <nav className="room-jump shell" aria-label="Room categories">
        {rooms.map((room) => (
          <a key={room.id} href={`#${room.id}`}>
            {room.title}
            <Icon name="diagonal" />
          </a>
        ))}
        <Link href="/tariff">
          View room tariff
          <Icon name="arrow" />
        </Link>
      </nav>
      <div className="shell room-detail-list">
        {rooms.map((room, index) => (
          <section
            id={room.id}
            className={`room-detail ${index % 2 ? "reverse" : ""}`}
            key={room.id}
          >
            <RoomImages title={room.title} images={room.image} />
            <div className="room-detail-copy">
              <Eyebrow>0{index + 1} / Rooms &amp; suites</Eyebrow>
              <h2>{room.title}</h2>
              <p>{room.description}</p>
              <ul className="room-amenities">
                {room.features.map((feature, i) => (
                  <li key={feature.text}>
                    <Icon
                      name={
                        i === 0
                          ? "people"
                          : i === 1
                            ? "clock"
                            : feature.text.includes("WiFi")
                              ? "wifi"
                              : "bed"
                      }
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <div className="room-rate">
                <span>
                  ₹{room.price.toLocaleString("en-IN")}
                  <small> / night</small>
                </span>
                <Link href="/tariff">
                  Tariff details
                  <Icon name="diagonal" width="14" height="14" />
                </Link>
              </div>
              <BookButton
                roomType={["Delux", "Super Delux", "Executives"][index]}
              >
                Enquire about this room
              </BookButton>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
