'use client'
import React, { useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FormLoader from '@/components/FormLoader/FormLoader';

export default function Cont() {
    const [feedback, setFeedback] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        })
    const [loading, setLoading] = useState(false)
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFeedback(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true)
        toast.promise(
            axios
                .post("/api/feedback", feedback, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFeedback({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                        });
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.log("Error sending message", error.message);
                    throw error;
                }), {
            loading: "Sending your enquiry...",
            success: "Enquiry sent, we will reply within 24-48 hours",
            error: "Error sending enquery. Please try again.",
        },
            {
                style: {
                    minWidth: '250px',
                },
                success: {
                    duration: 3000,
                },
            }

        );
    }
    return (
        <>
            <section className="contact section-padding bg-lightbrown">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="row mb-30">
                                <div className="col-lg-6 col-md-12 mb-25">
                                    <div className="item" style={{ backgroundColor: "#ffffff" }}>
                                        <div className="contents"> <span className="fa-thin fa-location-dot"></span>
                                            <h2 className="title">Hotel Pradeep, Varanasi</h2>
                                            <p className="text">Jagatganj, Varanasi-221002 (U.P.) India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-25">
                                    <div className="item" style={{ backgroundColor: "#ffffff" }}>
                                        <div className="contents"> <span className="fa-thin fa-phone"></span>
                                            <h2 className="title">Let's talk with us</h2>
                                            <p className="text">Phone: (+91) 0542-2204963,
                                                <br /> (+91) 0542-2207231, <br />
                                                (+91) 7408423503, <br /> (+91) 7408423504 <br /> info@hotelpradeep.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.37303530738!2d82.9996762!3d25.325260499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0c18ec0b31%3A0xe4e06b76bb8651fc!2sHotel%20Pradeep!5e0!3m2!1sen!2sin!4v1740131130582!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, borderRadius: "15px" }} loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-12">
                            <div className="form2-sidebar">
                                <form action="#" className="form2">
                                    <div className="head">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5>Get in touch!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="text" placeholder="Name" name='name' onChange={handleChange}
                                                    value={feedback.name} required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="email" placeholder="Email" name='email' onChange={handleChange}
                                                    value={feedback.email} required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="text" placeholder="Phone" name='phone' onChange={handleChange}
                                                    value={feedback.phone} required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea name="message" id="message" onChange={handleChange}
                                                    value={feedback.message} cols={30} rows={4} placeholder="Message"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button onClick={handleSubmit} className="button-3"><i className="fa-light fa-paper-plane"></i> {loading ? <FormLoader /> : "Submit"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Toaster position="top-right" />
        </>

    )
}
