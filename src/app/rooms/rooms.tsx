'use client'
import React from 'react'
import { useAppContext } from '@/app/context/Context';
import Form from '@/components/Form/Form';

export default function Rooms() {
    const { setIsFormOpen, isFormOpen } = useAppContext();
    const roomsData = [
        {
            title: 'Deluxe Rooms',
            description: 'Relax in our Deluxe Room, designed for comfort with stylish décor and a cozy atmosphere. Enjoy a peaceful stay with all modern amenities and a warm touch of Banarasi hospitality.',
            features: [
                { icon: 'fa-thin fa-user', text: '1-2 guests' },
                { icon: 'fa-thin fa-bell-concierge', text: '24-Hour Room Service' },
                { icon: 'fa-thin fa-bed-front', text: 'King Size Bed' },
                { icon: 'fa-thin fa-wifi', text: 'Free WiFi' },
            ],
            price: 4000,
            image: [
                '/img/rooms/delux/delux-01.jpg',
                '/img/rooms/delux/delux-02.jpg',
                '/img/rooms/delux/delux-03.jpg',
                '/img/rooms/delux/delux-04.jpg',
            ],
            left: true,
            id: "delux"
        },
        {
            title: 'Super Deluxe Room',
            description: 'Stay in style and comfort with our Super Deluxe Room, designed for a luxurious and relaxing experience. With spacious interiors, elegant furnishings, and modern amenities, enjoy the perfect blend of convenience and Banarasi charm.',
            features: [
                { icon: 'fa-thin fa-user', text: '1-2 guests' },
                { icon: 'fa-thin fa-bell-concierge', text: '24-Hour Room Service' },
                { icon: 'fa-thin fa-wifi', text: 'Free WiFi' },
                { icon: 'fa-thin fa-bed-front', text: 'Spacious & Stylish Interiors' },
            ],
            price: 5000,
            image: [
                '/img/rooms/super/super-01.jpg',
                '/img/rooms/super/super-02.jpg',
                '/img/rooms/super/super-03.jpg',
                '/img/rooms/super/super-04.jpg',
            ],
            left: false,
            id: "super-delux"
        },
        {
            title: 'Executive Rooms',
            description: 'Experience a perfect mix of luxury and comfort in our Executive Room, designed for a relaxing and premium stay. With spacious and stylish interiors, modern amenities, and a touch of Banarasi hospitality, this room offers everything you need for a memorable stay.',
            features: [
                { icon: 'fa-thin fa-user', text: '2-3 guests' },
                { icon: 'fa-thin fa-bell-concierge', text: '24-Hour Room Service' },
                { icon: 'fa-thin fa-wifi', text: 'Free WiFi' },
                { icon: 'fa-thin fa-bed-front', text: 'Spacious & Stylish Interiors' },
            ],
            price: 6000,
            image: [
                'img/rooms/executive/1.jpg',
                'img/rooms/executive/2.jpg',
                'img/rooms/executive/3.jpg',
                'img/rooms/executive/4.jpg',
            ],
            left: true,
            id: "executive"
        },
    ]
    return (
        <section className="rooms2 section-padding">
            <div className="container">
                {
                    roomsData.map((room, index) => (
                        <div key={room.title} id={room.id} className="row g-0 justify-content-center align-items-center bg-lightbrown br-0550 mb-90">
                            {room.left && (
                                <div className="col-lg-7 col-md-12">
                                    <div className="owl-carousel owl-theme">
                                        {
                                            room.image.map((img, index) => (
                                                <div key={index} className="img"> <img src={img} className="img-fluid br-5005" alt="" /> </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                            }

                            <div className="col-lg-5 col-md-12">
                                <div className="item">
                                    <h3 className="title">{room.title}</h3>
                                    <p>{room.description}</p>
                                    <div className="row room-features">
                                        <div className="col-lg-6 col-md-12">
                                            <ul>
                                                {room.features.slice(0, 2).map((feature, index) => (
                                                    <li key={index}>
                                                        <i className={feature.icon}></i> {feature.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <ul>
                                                {room.features.slice(2).map((feature, index) => (
                                                    <li key={index}>
                                                        <i className={feature.icon}></i> {feature.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="line-dec"></div>
                                    <div className="book">
                                        <div>
                                            <div className="price"><i className="fa-regular fa-indian-rupee-sign"></i> {room.price}<span>/ night</span></div>
                                        </div>
                                        <div><a href="#" onClick={() => setIsFormOpen(true)} className="button-3">Book now</a></div>
                                    </div>
                                </div>
                            </div>

                            {!room.left && (
                                <div className="col-lg-7 col-md-12">
                                    <div className="owl-carousel owl-theme">
                                        {
                                            room.image.map((img, index) => (
                                                <div key={index} className="img"> <img src={img} className="img-fluid br-5005" alt="" /> </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    ))
                }
            </div>
            {isFormOpen && <Form />}
        </section>
    )
}
