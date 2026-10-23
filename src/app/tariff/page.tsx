import { roomPhotoAssignments } from "@/lib/photos";
import { rooms } from "@/lib/content";
import { BookButton } from "@/components/BookingProvider";
import { Eyebrow, PageIntro } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Room Tariff",
  description:
    "Check Hotel Pradeep’s room tariff in Varanasi, additional information, and booking details.",
  alternates: { canonical: "/tariff" },
};
export default function TariffPage() {
  return (
    <>
      <PageIntro
        eyebrow="Room tariff"
        title="Your stay, thoughtfully priced."
        description="Affordable luxury in Varanasi with Hotel Pradeep."
        image={roomPhotoAssignments.executive[1]}
        imageAlt="A guest room at Hotel Pradeep"
      />
      <section className="section shell">
        <div className="section-heading">
          <div>
            <Eyebrow>Room rates</Eyebrow>
            <h2>
              Find your
              <br />
              <em>perfect stay.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Hotel Pradeep in Varanasi offers modern, comfortable rooms with
            flexible occupancy options under the FIT Tariff – European Plan
            (Executive). Located in the spiritual heart of the city, it’s the
            perfect base for exploring Varanasi’s rich heritage and vibrant
            culture.
          </p>
        </div>
        <div className="tariff-table-wrap">
          <table className="tariff-table">
            <caption className="sr-only">
              Hotel Pradeep room rates per night
            </caption>
            <thead>
              <tr>
                <th scope="col">Room category</th>
                <th scope="col">Guests</th>
                <th scope="col">Per night</th>
                <th scope="col">
                  <span className="sr-only">Enquire</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={room.id}>
                  <th scope="row">
                    <span>0{index + 1}</span>
                    {room.title}
                  </th>
                  <td>{room.features[0].text}</td>
                  <td>₹{room.price.toLocaleString("en-IN")}</td>
                  <td>
                    <BookButton
                      className="text-link"
                      roomType={["Delux", "Super Delux", "Executives"][index]}
                    >
                      Enquire
                    </BookButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tariff-info">
          <div>
            <Icon name="people" />
            <h3>Children</h3>
            <p>Kids below 12 years can share the room free!</p>
          </div>
          <div>
            <Icon name="check" />
            <h3>GST</h3>
            <p>12% applies.</p>
          </div>
          <div>
            <Icon name="clock" />
            <h3>Check-out</h3>
            <p>12 noon. Enjoy your stay!</p>
          </div>
        </div>
        <div className="tariff-policies">
          <article>
            <Eyebrow>01 / Simple booking</Eyebrow>
            <h3>A simple start to your stay.</h3>
            <p>
              Booking your room at Hotel Pradeep is easy and straightforward. We
              ask for a small deposit to secure your reservation, ensuring that
              your room is ready when you arrive. This simple process helps you
              confirm your stay without any hassle.
            </p>
          </article>
          <article>
            <Eyebrow>02 / Our commitment</Eyebrow>
            <h3>Your satisfaction matters.</h3>
            <p>
              We are dedicated to ensuring your experience is smooth and fair.
              If any issue occurs with your booking or if we are unable to
              provide the reserved room, we will refund your deposit along with
              additional compensation as a gesture of goodwill. Your
              satisfaction is our priority.
            </p>
          </article>
          <article>
            <Eyebrow>03 / Discover Varanasi</Eyebrow>
            <h3>A city full of stories.</h3>
            <p>
              Stay with us and explore the magic of Varanasi, a city full of
              ancient temples, lively markets, and the sacred Ganges River.
              Hotel Pradeep is perfectly located to offer you easy access to
              these landmarks, letting you fully enjoy the rich culture and
              history of this iconic city.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
