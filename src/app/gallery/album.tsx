'use client'
import React from 'react'

export default function Album() {
    const album = [
        {
            id: 1,
            title: "Front View",
            img: "/img/gallery/front-view/5.jpg",
            uri: "/front-view-gallery",
            description: "Experience the grand entrance and stunning architecture that welcomes you to our hotel."
        },
        {
            id: 2,
            title: "Restaurant",
            img: "/img/gallery/resturant/1.jpg",
            uri: "/resturant-gallery",
            description: "Indulge in a delightful dining experience with exquisite cuisine and a cozy ambiance."
        },
        {
            id: 3,
            title: "Reception & Common Area",
            img: "/img/gallery/reception/1.jpg",
            uri: "/reception-gallery",
            description: " A warm and inviting reception area designed to provide a seamless check-in experience."
        },
        {
            id: 4,
            title: "Rooms",
            img: "/img/gallery/rooms/1.jpg",
            uri: "/rooms-gallery",
            description: "Enjoy luxurious and comfortable rooms with modern amenities for a relaxing stay."
        },
        {
            id: 5,
            title: "Parking",
            img: "/img/gallery/parking/1.jpg",
            uri: "/parking-gallery",
            description: "Secure and spacious parking available for the convenience of our guests."
        },
    ]
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    {
                        album.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-12 mb-20 " key={data.id}>
                                <a href={`gallery${data.uri}`} className='card-lnk'>
                                    <div className="album-cards">
                                        <img src={data.img} alt={data.title} />
                                        <div className="img-content">
                                            <div className="img-title">
                                                <h1>{data.title}</h1>
                                            </div>
                                            <div className="img-desc">
                                                {data.description}
                                            </div>
                                        </div>
                                        <div className="btn">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
