import React from 'react'
type GalleryProps = {
    imageData: string[];
    title: string;
};

export default function Gallery({ imageData, title }: GalleryProps) {
    return (
        <section className="galleryscroll section-padding bg-lightbrown">
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mb-20">
                        <div className="section-subtitle">Gallery</div>
                        <div className="section-title">{title}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            {
                                imageData.map((uri, index) => (
                                    <div className="item" key={index}>
                                        <a href={uri} title="" className="gallery-masonry-item-img-link img-zoom">
                                            <div className="img"> <img src={uri} className="img-fluid mx-auto d-block" alt="" /> </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
