import React from 'react'

export default function Sponsors() {
    return (
        <section className="clients bg-lightbrown" style={{ marginBottom: "30px", marginTop:"30px" }}>
            <div className="container">
                <div className="row wrap">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <a href="#"><img src="/img/clients/1.jpg" alt="" /></a>
                            </div>
                            <div className="item">
                                <a href="https://palashkothi.com/"><img src="/img/clients/2.jpg" alt="" /></a>
                            </div>
                            <div className="item">
                                <a href="#"><img src="/img/clients/3.jpg" alt="" /></a>
                            </div>
                            <div className="item">
                                <a href="#"><img src="/img/clients/4.jpg" alt="" /></a>
                            </div>
                            <div className="item">
                                <a href="#"><img src="/img/clients/5.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
