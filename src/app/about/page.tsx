import About from '@/components/About/About'
import Booking from '@/components/Booking/Booking'
import Sponsors from '@/components/Sponsors/Sponsors'
import React from 'react'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">About Hotel</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-20 "> <img className="rounded-2 animation-float1" src="/img/about/about-banner-03.jpg" alt="" /> </div>
                        <div className="col-lg-7 col-md-12 mb-15 offset-lg-1">
                            <div className="section-subtitle">ABOUT HOTEL PRADEEP </div>
                            <div className="section-title">Hotel Pradeep - A Comfortable Stay in the Heart of Varanasi.</div>
                            <p>
                                Hotel Pradeep is a 3-star luxury hotel approved by the Ministry of Tourism, Government of India. Located in the heart of Varanasi, the hotel offers a blend of comfort and elegance, making it a great choice for both tourists and business travelers.
                            </p>

                            <p>The hotel’s in-house restaurant, "Poonam", serves delicious food with rich oriental flavors, offering a delightful dining experience. The rooftop restaurant "Eden" is the perfect spot for those who enjoy dining under the stars. With its open-air setting, guests can enjoy a breathtaking view of the city while savoring their meals.</p>

                            <p>With its prime location, excellent dining, and warm hospitality, Hotel Pradeep ensures a pleasant and memorable stay in the holy city of Varanasi.</p>

                            <p className="mb-40">At <strong>Hotel Pradeep </strong>, we offer more than just a stay—we offer an experience of comfort, taste, and beauty.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-15">
                            <div className="section-subtitle">ABOUT HOTEL PRADEEP</div>
                            <div className="section-title">What we offer</div>
                            <p><strong> The Hotel Pradeep offers the best in the hospitality and tourism facilities. The facilities include :</strong></p>

                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i> A range of elegant rooms with oriental decorations.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>  Cosy dinning facilities with a wide range of Continental, Indian and Chinese cuisine.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>  A roof-top lush green open air restaurant "Eden" with Mexican cuisine.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>   Exclusive banquet facilities and Board Room for select gathering, a Travel Desk and everything a traveler requires to feel comfortable, at home and at ease.
                                </strong>
                            </p>

                            <a href="#booking-form" className="button-3 mb-15">Book Now</a>
                            <div className="phone"><a href="tel:+917408423503"><i className="fa-light fa-phone"></i>+917408423503</a></div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 mb-20 mt-45"> <img className="rounded-2 animation-float1" src="/img/about/abt-01.jpg" alt="" /> </div>
                        <div className="col-lg-3 col-md-6 mb-20"> <img className="rounded-2 animation-float2" src="/img/about/abt-02.jpg" alt="" /> </div>
                    </div>
                </div>
            </section>

            <Booking />
        </>
    )
}

export const metadata = {
    title: 'About Hotel Pradeep | 3-Star Luxury Stay in Varanasi',
    description: 'Hotel Pradeep, a 3-star luxury hotel in Varanasi, offers comfort, fine dining at Poonam Restaurant, and warm hospitality for tourists & business travelers.'
}