"use client";
import { photos } from "@/lib/photos";
import { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import Icon from "./Icon";

export default function HotelVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="hotel-video">
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/dBhmDgovBBM?autoplay=1&controls=1"
          title="Experience Hotel Pradeep"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          aria-label="Play the Hotel Pradeep film"
          onClick={() => setPlaying(true)}
        >
          <ResponsiveImage
            src={photos.lobbyArrival}
            alt="Hotel Pradeep reception"
            fill
            sizes="(max-width: 800px) 100vw, 80vw"
          />
          <span className="video-shade" />
          <span className="play-button">
            <Icon name="play" width="24" height="24" />
          </span>
          <span className="video-label">A glimpse of Hotel Pradeep</span>
        </button>
      )}
    </div>
  );
}
