import { photos } from "@/lib/photos";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import BookingProvider from "@/components/BookingProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Integrations from "@/components/Integrations";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelpradeep.com"),
  title: {
    default: "Hotel Pradeep | Luxury Stay & Rooftop Dining in Varanasi",
    template: "%s | Hotel Pradeep",
  },
  description:
    "Experience a perfect blend of comfort and elegance at Hotel Pradeep. Enjoy well-appointed rooms and delicious meals at Poonam Restaurant. Book your stay today!",
  openGraph: {
    type: "website",
    siteName: "Hotel Pradeep",
    locale: "en_IN",
    images: [
      {
        url: photos.facadeStreet,
        width: 1920,
        height: 1280,
        alt: "Hotel Pradeep, Varanasi",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/img/logo/logo_trans.png" },
  verification: { google: "KmmiItJSKEOVEh-A5wEL3o-8yvdHE-P-Gb-akR8UAy0" },
};
export const viewport: Viewport = { themeColor: "#25294a" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <BookingProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </BookingProvider>
        <Integrations />
      </body>
    </html>
  );
}
