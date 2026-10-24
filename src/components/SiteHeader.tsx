"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { hotel, navigation } from "@/lib/content";
import Icon from "./Icon";
import { useBooking } from "./BookingProvider";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const openBooking = useBooking();
  useEffect(() => {
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);
  return (
    <header className="site-header">
      <div className="header-top">
        <span>JAGATGANJ · VARANASI</span>
        <a href="tel:+917408423503">
          <Icon name="phone" width="13" height="13" />
          {hotel.phones[0]}
        </a>
        <a className="header-email" href={`mailto:${hotel.email}`}>
          {hotel.email}
        </a>
      </div>
      <div className="header-main shell">
        <Link href="/" className="brand" aria-label="Hotel Pradeep home">
          <Image
            src="/img/logo/logo_trans.png"
            width={76}
            height={84}
            alt=""
            priority
          />
          <span>
            <small>HOTEL</small>
            <strong>PRADEEP</strong>
            <span className="brand-location">VARANASI</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="header-actions">
          <button
            className="button header-book"
            onClick={() => {
              setMenu(false);
              openBooking();
            }}
          >
            Book your stay
            <Icon name="diagonal" />
          </button>
          <button
            className="icon-button menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            onClick={() => setMenu(!menu)}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {menu && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ? "page" : undefined}
            >
              {item.label}
              <Icon name="arrow" />
            </Link>
          ))}
          <Link href="/tariff">
            Room tariff
            <Icon name="arrow" />
          </Link>
          <button
            className="button"
            onClick={() => {
              setMenu(false);
              openBooking();
            }}
          >
            Book your stay
            <Icon name="diagonal" />
          </button>
          <a href="tel:+917408423503">Call {hotel.phones[0]}</a>
        </nav>
      )}
    </header>
  );
}
