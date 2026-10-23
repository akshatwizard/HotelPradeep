import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/parking/1.jpg",
        "/img/gallery/parking/2.jpg",
        "/img/gallery/parking/3.jpg",
        "/img/gallery/parking/4.jpg",
        "/img/gallery/parking/5.jpg",
        "/img/gallery/parking/6.jpg",
        "/img/gallery/parking/7.jpg",
        "/img/gallery/parking/8.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Parking Gallery</div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="gallery"
                data-scroll-index="4"
                className="section-padding bg-lightbrown">
                <div className="container">
                    <div
                        className="row galleryscroll">

                        {
                            galleryData.map((url, index) => (
                                <div className="col-lg-4 col-md-6 mb-25" key={index}>
                                    <div className="item">
                                        <a href={url}
                                            title=""
                                            className="gallery-masonry-item-img-link img-zoom">
                                            <div className="img">
                                                <img
                                                    src={url}
                                                    className="img-fluid mx-auto d-block"
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
