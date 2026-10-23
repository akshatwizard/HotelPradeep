import React from 'react'

export default function Facilities() {
    return (
        <section className="facilities2 bg-lightbrown">
            <div className="border-bottom">
                <div className="container">
                    <ul className="tab-buttons">
                        <li data-tab="#restaurant" className="tab-btn active-btn"><span>Restaurant</span></li>
                        <li data-tab="#bar" className="tab-btn"><span> Bar</span></li>
                        <li data-tab="#parking" className="tab-btn"><span>Parking</span></li>
                        <li data-tab="#laundry" className="tab-btn"><span>In House Laundry</span></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="tabs-content">

                    <div className="tab active-tab" id="restaurant">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="/img/gallery/restaurant.jpg" className="img-fluid" alt="" style={{ height: "25rem", objectFit: "cover" }} />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-subtitle">FLAVORS OF PRADEEP</div>
                                <div className="section-title">Poonam Restaurant</div>
                                <p className="mb-25">Enjoy a variety of tasty dishes in a cozy and friendly setting. Perfect for family meals or casual dining.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Breakfast: 7.30 am – 10.30 am (daily)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Lunch: 12.00 pm – 3.00 pm (daily)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Dinner: 6.30 pm – 10.30 pm (daily)</p>
                                        </div>
                                    </li>
                                </ul>
                                {/* <a href="#" className="button-3"><i className="fa-solid fa-user-chef"></i> Book Now</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="bar">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="/img/gallery/bar.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-title"> Bar</div>
                                <p className="mb-25">Relax and enjoy a refreshing drink at our Bar. We offer a selection of soft drinks, fine spirits, and tasty snacks in a cozy and comfortable setting. Whether you want to unwind after a long day or have a quick bite, our Bar is the perfect place to sit back and enjoy.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p> Opening Hours: 5.00 pm – 11.00 pm (daily)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="parking">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="/img/gallery/parking.jpg" className="img-fluid" alt="" style={{ height: "25rem", objectFit: "cover" }} />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                {/* <div className="section-subtitle">Indoor & Outdoor</div> */}
                                <div className="section-title">Parking Facility</div>
                                <p className="mb-25">Spacious and secure parking is available for guests. Park your vehicle with ease and enjoy a stress-free stay.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Availability: 24/7</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="laundry">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="/img/gallery/laundry.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-title">Laundry</div>
                                <p className="mb-25">Quick and convenient laundry service for fresh and clean clothes. Enjoy a comfortable stay without any worries.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Service Hours: 7.00 am – 8.00 pm (daily)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
