"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { type HotelShort, shortEmbedUrl, shortThumbnail, shortUrl } from "@/lib/shorts";
import Icon from "./Icon";

export default function ShortsGrid({ videos }: { videos: readonly HotelShort[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const posterButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  function closeVideo(id: string) {
    setActiveId(null);
    requestAnimationFrame(() => posterButtons.current[id]?.focus());
  }

  return (
    <div className="shorts-grid" data-count={videos.length}>
      {videos.map((video) => (
        <article className="short-card" key={video.id}>
          <div className="short-media">
            {activeId === video.id ? (
              <iframe
                src={`${shortEmbedUrl(video.id)}?autoplay=1&controls=1&playsinline=1&rel=0`}
                title={`${video.label} | Hotel Pradeep, Varanasi`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                className="short-poster"
                type="button"
                aria-label={`Play ${video.label} at Hotel Pradeep`}
                onClick={() => setActiveId(video.id)}
                ref={(element) => { posterButtons.current[video.id] = element; }}
              >
                <Image src={shortThumbnail(video.id)} alt="" fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw" />
                <span className="short-shade" />
                <span className="short-format">YouTube Short</span>
                <span className="short-play"><Icon name="play" width="26" height="26" /></span>
                <span className="short-poster-label">{video.label}</span>
              </button>
            )}
          </div>
          <div className="short-copy">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <div className="short-actions">
              <a href={shortUrl(video.id)} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.label} on YouTube (opens in a new tab)`}>Watch on YouTube <Icon name="diagonal" width="15" height="15" /></a>
              {activeId === video.id && <button type="button" onClick={() => closeVideo(video.id)} aria-label={`Close ${video.label} video`}>Close video <Icon name="close" width="14" height="14" /></button>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
