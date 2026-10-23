import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/reception/1.jpg",
        "/img/gallery/reception/2.jpg",
        "/img/gallery/reception/5.jpg",
        // "/img/gallery/reception/6.jpg",
        // "/img/gallery/reception/7.jpg",
        "/img/gallery/reception/8.jpg",
        "/img/gallery/reception/9.jpg",
        "/img/gallery/reception/10.jpg",
        "/img/gallery/reception/12.jpg",
        "/img/gallery/reception/14.jpg",
        "/img/gallery/reception/15.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Reception & Common Area</div>
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
