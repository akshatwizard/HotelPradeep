import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src.startsWith("/") ? src : `/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`text-link ${className}`}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-copy">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {description && <p className="intro-description">{description}</p>}
      </div>
      <Photo src={image} alt={imageAlt} priority className="page-intro-image" />
      <span className="intro-watermark" aria-hidden="true">
        P
      </span>
    </section>
  );
}
