import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <div className="logo-with-name-container">
                                    <a className="logo" href="/"> <img src="/img/logo/logo_trans.png" className="logo-img" alt="" /></a>
                                    <div className='hotel-name'>
                                        <span className='fir'>HOTEL</span>
                                        <span>PRADEEP</span>
                                    </div>
                                </div>
                                <p>Hotel Pradeep is a paragon of luxury, situated in the vibrant heart of Varanasi. Its prime location ensures easy access to major attractions and essential services, making it an ideal choice for both leisure and business travelers.</p>
                                <div className="social-icons">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1 mb-30">
                            <div className="item">
                                <h3>Contact us</h3>
                                <p>Jagatganj, Varanasi-221002
                                    <br />(U.P.) India
                                </p>
                                               <div className="phone">
									<a href="tel:+917408423503"> (+91) 7408423503 </a> <br />
									<a href="tel:+917408423504">(+91) 7408423504 </a> <br /> 
									
									(+91) 0542-2204963 <br />(+91) 0542-2207231 
									</div>
                             <div className="mail"><a href="mailto:info@hotelpradeep.com">info@hotelpradeep.com</a></div>
                                <div className="mail"><a href="mailto:reservation@hotelpradeep.com">reservation@hotelpradeep.com</a></div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.37303530738!2d82.9996762!3d25.325260499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0c18ec0b31%3A0xe4e06b76bb8651fc!2sHotel%20Pradeep!5e0!3m2!1sen!2sin!4v1740131130582!5m2!1sen!2sin"
                                    width="100%" height="300"
                                    style={{
                                        border: "0",
                                        borderRadius: "5px",
                                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                                    }}
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="links">
                                <ul>
                                    {/*                                     <li><a href="/">Home</a></li> */}
                                    <li><a href="about">About</a></li>
                                    <li><a href="rooms">Rooms</a></li>
                                    <li><a href="facilities">Facilities</a></li>
                                    <li><a href="restaurant">Restaurant</a></li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <p>Copyright {new Date().getFullYear()} Hotel Pradeep. Developed by <a href="https://wizards.co.in/">Wizards.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
