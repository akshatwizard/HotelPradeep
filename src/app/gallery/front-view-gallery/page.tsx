import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/front-view/1.jpg",
        "/img/gallery/front-view/3.jpg",
        "/img/gallery/front-view/5.jpg",
        "/img/gallery/front-view/6.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Front View Gallery</div>
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
