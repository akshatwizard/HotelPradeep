import React from 'react'

export default function Video() {
    return (
        <section className="video-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-20">
                        <div className="section-title">Experience comfort and luxury in the heart of Varanasi!</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-info">
                            <p className="vdoTxt text-center">Hotel Pradeep, a 3-star hotel approved by the Ministry of Tourism, India, offers comfort and warm hospitality in the vibrant city of Varanasi. Ideal for a peaceful and pleasant stay!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12 text-center rotatex">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/dBhmDgovBBM?autoplay=1&mute=1&loop=1&controls=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="section-info">
                            <p className="vdoTxt text-center">With its prime location, Hotel Pradeep allows easy access to the city’s famous ghats, temples, and cultural sites. The well-furnished rooms and modern amenities ensure a relaxing experience. Guests can enjoy the vibrant charm of Varanasi while staying in a place that offers both convenience and comfort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
