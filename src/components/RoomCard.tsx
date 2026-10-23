import Link from "next/link";
import { rooms } from "@/lib/content";
import { Photo } from "./ui";
import Icon from "./Icon";

export default function RoomCard({
  room,
}: {
  room: (typeof rooms)[number];
}) {
  return (
    <article className="room-card">
      <Link href={`/rooms#${room.id}`} className="room-card-image">
        <Photo
          src={room.image[0]}
          alt={room.title}
          sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span className="image-link-icon">
          <Icon name="diagonal" />
        </span>
      </Link>
      <div className="room-card-meta">
        <span>
          <Icon name="people" width="15" height="15" />
          {room.features[0].text}
        </span>
        <span>
          ₹{room.price.toLocaleString("en-IN")} <small>/ night</small>
        </span>
      </div>
      <h3>
        <Link href={`/rooms#${room.id}`}>{room.title}</Link>
      </h3>
      <Link className="text-link" href={`/rooms#${room.id}`}>
        Discover the room
        <Icon name="arrow" />
      </Link>
    </article>
  );
}
