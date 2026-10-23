import React from 'react'

export default function About() {
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-15">
                        <div className="section-subtitle">ABOUT HOTEL PRADEEP </div>
                        <div className="section-title">A Place of Light & Comfort</div>
                        <p>Welcome to <strong> Hotel Pradeep </strong>, where warmth and elegance come together. The name <strong> Pradeep </strong> means "divine light"—guiding the way to wisdom, joy, and peace.</p>

                        <p>Under one roof, enjoy <strong>comfortable rooms</strong>, delicious meals at <strong>Poonam</strong>, our restaurant filled with rich flavors, and the stunning <strong>Eden</strong>, our rooftop dining space where you can dine under the stars.</p>

                        <p className="mb-40">At <strong>Hotel Pradeep </strong>, we offer more than just a stay—we offer an experience of comfort, taste, and beauty.</p>

                        <a href="#booking-form" className="button-3 mb-15">Book Now</a>
                        <div className="phone"><a href="tel:+917408423503"><i className="fa-light fa-phone"></i>+917408423503</a></div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 mb-20 mt-45"> <img className="rounded-2 animation-float1" src="/img/about/abt-01.jpg" alt="" /> </div>
                    <div className="col-lg-3 col-md-6 mb-20"> <img className="rounded-2 animation-float2" src="/img/about/abt-02.jpg" alt="" /> </div>
                </div>
            </div>
        </section>
    )
}
