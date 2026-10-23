import React from 'react'

export default function Offers() {
    return (
        <section className="offers2" style={{marginBottom:"150px"}}>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-1">
                            <h5>Spiritual</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-2">
                            <h5>Taste</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-3">
                            <h5>Sip</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-4">
                            <h5>Luxury</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="glry-img">
                <img id="tab-1" src="/img/bg-image/deep.jpg" alt="" className="tab-img current" />
                <img id="tab-2" src="/img/bg-image/taste.jpg" alt="" className="tab-img" />
                <img id="tab-3" src="/img/bg-image/bar.jpg" alt="" className="tab-img" />
                <img id="tab-4" src="/img/bg-image/room.jpg" alt="" className="tab-img" />
            </div>
        </section>
    )
}
