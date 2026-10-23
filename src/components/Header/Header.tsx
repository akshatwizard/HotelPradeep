'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/app/context/Context';


export default function Header() {
    const { isFormOpen, setIsFormOpen } = useAppContext();
    const pathname = usePathname();
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Rooms', href: '/rooms' },
        { label: 'Dining', href: '/dining' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Gallery', href: '/gallery' },
        // { label: 'Tariff', href: '/tariff' },
        { label: 'Contact', href: '/contact' }
    ];

    const isActive = (href: String) => {
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <>
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget mr-30">
                                <a href="tel:+9105422204963">
                                    <i className="fa-solid fa-phone"></i>(+91) 7408423503, 0542-2204963,
                                </a>
                            </div>
                            <div className="widget">
                                <a href="mailto:info@hotelpradeep.com">
                                    <i className="fa-solid fa-envelope"></i>info@hotelpradeep.com
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    {/* <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li> */}
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    {/* <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li> */}
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo-wrapper">
                        <a className="logo" href="/">
                            <img src="/img/logo/logo_trans.png" className="logo-img" alt="Hotel Pradeep Logo" />
                        </a>
                        <div className="hotel-name">
                            <a href="/">
                                <span className="fir">HOTEL</span>
                                <span>PRADEEP</span>
                            </a>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fa-light fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="navbar-right">
                            <a className="button" href="#" onClick={() => setIsFormOpen(!isFormOpen)}>
                                <i className="fa-solid fa-calendar-check"></i> Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}