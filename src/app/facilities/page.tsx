import React from 'react'
import OurFacilities from './OurFacilities'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="subtitle text-light">Our Services</div>
                            <div className="title">Hotel Facilities</div>
                        </div>
                    </div>
                </div>
            </section>

            <OurFacilities />
        </>
    )
}


export const metadata = {
    title: 'Best Hotel Facilities in Varanasi | Hotel Pradeep',
    description: 'Looking for the best hotel amenities in Varanasi? Hotel Pradeep offers comfortable rooms, great food, and excellent service.'
}