"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { photos } from "@/lib/photos";
import { Photo } from "./ui";
import Icon from "./Icon";

const slides = [
  { image: photos.facadeDusk, alt: "The illuminated facade of Hotel Pradeep at dusk", label: "Hotel Pradeep", caption: "Your address in the heart of Varanasi", position: "center" },
  { image: photos.gangesPanorama, alt: "An aerial panorama of the Varanasi ghats along the Ganges", label: "Varanasi ghats", caption: "A city of timeless riverfront stories", position: "center 65%" },
  { image: photos.facadeAerial, alt: "Drone view of Hotel Pradeep and the surrounding streets of Varanasi", label: "A view from above", caption: "Discover Hotel Pradeep from a new perspective", position: "76% center" },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPlaying(!preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || !visible) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, visible]);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
    setPlaying(false);
  }

  return (
    <div
      className="hero-visual hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hotel Pradeep and Varanasi photographs"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          select(active + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === active ? "is-active" : ""}`}
          key={slide.image}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
          aria-hidden={index !== active}
          style={{ "--slide-position": slide.position } as CSSProperties}
        >
          <Photo src={slide.image} alt={slide.alt} priority={index === 0} sizes="(max-width: 650px) 100vw, (max-width: 800px) 50vw, 55vw" />
        </div>
      ))}
      <div className="hero-carousel-caption" aria-live={playing ? "off" : "polite"} aria-atomic="true">
        <span>{String(active + 1).padStart(2, "0")} / {slides[active].label}</span>
        <p>{slides[active].caption}</p>
      </div>
      <div className="hero-carousel-controls" aria-label="Slideshow controls">
        <div className="hero-carousel-dots">
          {slides.map((slide, index) => (
            <button type="button" key={slide.image} onClick={() => select(index)} aria-label={`Show ${slide.label} slide`} aria-pressed={active === index} />
          ))}
        </div>
        <button type="button" className="icon-button" onClick={() => select(active - 1)} aria-label="Previous hero image"><Icon name="chevron" className="rotate-180" /></button>
        <button type="button" className="icon-button" onClick={() => select(active + 1)} aria-label="Next hero image"><Icon name="chevron" /></button>
        <button type="button" className="icon-button" onClick={() => { setPlaying(!playing); setFocused(false); }} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>
          {playing ? <span className="pause-symbol" aria-hidden="true" /> : <Icon name="play" width="17" height="17" />}
        </button>
      </div>
    </div>
  );
}
