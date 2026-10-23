"use client";
import ResponsiveImage from "./ResponsiveImage";
import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

export default function PhotoGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previous;
    };
  }, [isOpen]);
  function previous() {
    setSelected((index) =>
      index === null ? 0 : (index - 1 + images.length) % images.length,
    );
  }
  function next() {
    setSelected((index) => (index === null ? 0 : (index + 1) % images.length));
  }
  return (
    <>
      <div className="photo-grid">
        {images.map((src, index) => (
          <button
            className="gallery-photo"
            key={`${src}-${index}`}
            aria-label={`View ${title} photo ${index + 1}`}
            onClick={() => setSelected(index)}
          >
            <ResponsiveImage
              src={src.startsWith("/") ? src : `/${src}`}
              alt={`${title} at Hotel Pradeep, photograph ${index + 1}`}
              fill
              sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
            <span>
              <Icon name="diagonal" />
            </span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <dialog
          className="lightbox"
          ref={dialog}
          aria-label={`${title} photo viewer`}
          onCancel={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              previous();
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              next();
            }
          }}
        >
          <div className="lightbox-top">
            <span>
              {title}{" "}
              <small>
                {selected + 1} / {images.length}
              </small>
            </span>
            <button
              className="icon-button"
              aria-label="Close photo viewer"
              onClick={() => setSelected(null)}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="lightbox-stage">
            <button
              className="icon-button"
              aria-label="Previous photo"
              onClick={previous}
            >
              <Icon name="chevron" className="rotate-180" />
            </button>
            <div className="lightbox-image">
              <ResponsiveImage
                src={
                  images[selected].startsWith("/")
                    ? images[selected]
                    : `/${images[selected]}`
                }
                alt={`${title} at Hotel Pradeep, photograph ${selected + 1}`}
                fill
                sizes="90vw"
                cropOnMobile={false}
                className="object-contain"
              />
            </div>
            <button
              className="icon-button"
              aria-label="Next photo"
              onClick={next}
            >
              <Icon name="chevron" />
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
