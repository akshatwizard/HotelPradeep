import Image, { getImageProps, type ImageProps } from "next/image";
import { mobilePhotoSources } from "@/lib/photo-sources";
import { varanasiMobileSources } from "@/lib/varanasi-photo-sources";

type ResponsiveImageProps = ImageProps & { cropOnMobile?: boolean };

/** A picture source selects the mobile crop before the browser downloads a photo. */
export default function ResponsiveImage({
  src,
  alt,
  priority = false,
  cropOnMobile = true,
  ...props
}: ResponsiveImageProps) {
  const source = typeof src === "string" && !src.startsWith("/") ? `/${src}` : src;
  const mobile = typeof source === "string" && cropOnMobile
    ? mobilePhotoSources[source] || varanasiMobileSources[source]
    : undefined;
  const mobileProps = mobile
    ? getImageProps({ ...props, src: mobile, alt }).props
    : undefined;

  return (
    <picture
      className="responsive-picture"
      style={props.fill ? { position: "absolute", inset: 0 } : undefined}
    >
      {mobileProps && (
        <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} sizes={mobileProps.sizes} />
      )}
      <Image
        {...props}
        src={source}
        alt={alt}
        loading={priority ? "eager" : props.loading}
        fetchPriority={priority ? "high" : props.fetchPriority}
      />
    </picture>
  );
}
