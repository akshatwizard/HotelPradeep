import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import AppProvider from "./context/Context";
import { GoogleAnalytics } from '@next/third-parties/google'
import TawkMessenger from "@/components/ai/Ai";
import Sponsors from "@/components/Sponsors/Sponsors";

export const metadata: Metadata = {
  title: "Hotel Pradeep | Luxury Stay & Rooftop Dining in Varanasi",
  description: "Experience a perfect blend of comfort and elegance at Hotel Pradeep. Enjoy well-appointed rooms and delicious meals at Poonam Restaurant. Book your stay today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="shortcut icon" href="/img/logo/logo_trans.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gilda+Display&amp;family=Urbanist:wght@300;400;500;600&amp;display=swap" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <meta name="google-site-verification" content="KmmiItJSKEOVEh-A5wEL3o-8yvdHE-P-Gb-akR8UAy0" />
      </head>
      <body>
        {/* <div className="preloader">
          <div className="centered">
            <div className="cont">
              <div className="loader-circle"></div>
              <div className="loader-line-mask">
                <div className="loader-line"></div>
              </div>
              <img src="img/preloader.png" alt="" />
            </div>
          </div>
        </div> */}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <AppProvider >
          <Header />
          {children}
          <Sponsors/>
          <Footer />
          <TawkMessenger />
        </AppProvider>


        <Script strategy="afterInteractive" src="/js/jquery-3.7.1.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery-migrate-3.4.1.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/modernizr-2.6.2.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/imagesloaded.pkgd.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.isotope.v3.0.2.js"></Script>
        <Script strategy="afterInteractive" src="/js/popper.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/bootstrap.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/scrollIt.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.waypoints.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/owl.carousel.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.stellar.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.magnific-popup.js"></Script>
        <Script strategy="afterInteractive" src="/js/YouTubePopUp.js"></Script>
        <Script strategy="afterInteractive" src="/js/select2.js"></Script>
        <Script strategy="afterInteractive" src="/js/datepicker.js"></Script>
        <Script strategy="afterInteractive" src="/js/vegas.slider.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/custom.js"></Script>
        <GoogleAnalytics gaId="G-9FXDWDJ45Z" />
      </body>
    </html>
  );
}
