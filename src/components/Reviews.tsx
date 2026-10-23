"use client";
import { useState } from "react";
import { testimonials, reviewUrl } from "@/lib/content";
import Icon from "./Icon";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const review = testimonials[index];
  return (
    <div className="review">
      <div className="review-stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Icon
            key={i}
            name="star"
            fill="currentColor"
            width="16"
            height="16"
          />
        ))}
      </div>
      <blockquote key={index}>{review.quote}</blockquote>
      <div className="review-bottom">
        <div>
          <strong>{review.name}</strong>
          <a href={reviewUrl} target="_blank" rel="noreferrer">
            View on Google
            <Icon name="diagonal" width="13" height="13" />
          </a>
        </div>
        <div className="review-controls">
          <button
            className="icon-button"
            aria-label="Previous guest review"
            onClick={() =>
              setIndex((index - 1 + testimonials.length) % testimonials.length)
            }
          >
            <Icon name="chevron" className="rotate-180" />
          </button>
          <span aria-live="polite">
            0{index + 1} / 0{testimonials.length}
          </span>
          <button
            className="icon-button"
            aria-label="Next guest review"
            onClick={() => setIndex((index + 1) % testimonials.length)}
          >
            <Icon name="chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}
