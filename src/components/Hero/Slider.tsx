'use client'
export default function Slider() {
    const sliderData = [
        {
            id: 1,
            image: '/img/banner/aarti-banner.jpg',
            title: 'A 3-Star Hotel Approved by the Ministry of Tourism, Government of India',
            subtitle: 'HOTEL PRADEEP',
        },
        {
            id: 2,
            image: '/img/banner/home_banner-01.jpg',
            title: 'Where Luxury Meets Perfection',
            subtitle: 'HOTEL PRADEEP',
            url: '',
        },
        {
            id: 3,
            image: '/img/banner/home_banner-02.jpg',
            title: 'A Perfect Stay in the Heart of Varanasi',
            subtitle: 'HOTEL PRADEEP',
            url: '',
        },
        {
            id: 4,
            image: '/img/banner/home_banner-03.jpg',
            title: 'Experience Comfort & Elegance',
            subtitle: 'HOTEL PRADEEP',
            url: '',
        },
        {
            id: 5,
            image: '/img/banner/home_banner-04.jpg',
            title: 'A Perfect Blend of Comfort & Luxury',
            subtitle: 'HOTEL PRADEEP',
            url: '',
        },
    ]
    return (
        <header className="header slider-fade h-100">
            <div className="owl-carousel owl-theme">
                {
                    sliderData.map((slide) => (
                        <div key={slide.id} className="item bg-img" data-overlay-dark="4" data-background={slide.image}>
                            <div className="v-middle caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-12 text-center">
                                            <h5>{slide.subtitle}</h5>
                                            <h1>{slide.title}</h1>
                                            {slide.url === '' && (<a href={slide.url} className="button-2">Rooms & Suites</a>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </header>
    )
}
