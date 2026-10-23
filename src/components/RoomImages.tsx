"use client";
import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function RoomImages({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const source = (image: string) =>
    image.startsWith("/") ? image : `/${image}`;
  return (
    <div className="room-images">
      <div className="room-feature-photo">
        <Image
          src={source(images[index])}
          alt={`${title} at Hotel Pradeep, view ${index + 1}`}
          fill
          sizes="(max-width: 800px) 100vw, 55vw"
        />
        <div className="room-image-controls">
          <span aria-live="polite">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
          <button
            className="icon-button"
            aria-label={`Previous ${title} photo`}
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          >
            <Icon name="chevron" className="rotate-180" />
          </button>
          <button
            className="icon-button"
            aria-label={`Next ${title} photo`}
            onClick={() => setIndex((index + 1) % images.length)}
          >
            <Icon name="chevron" />
          </button>
        </div>
      </div>
      <div className="room-thumbnails">
        {images.map((image, item) => (
          <button
            key={image}
            className={item === index ? "selected" : ""}
            aria-label={`${title} photo ${item + 1}`}
            aria-pressed={item === index}
            onClick={() => setIndex(item)}
          >
            <Image src={source(image)} alt="" fill sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}
