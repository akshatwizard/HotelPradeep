import React from 'react'
import Album from './album'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Hotel Gallery Album</div>
                        </div>
                    </div>
                </div>
            </section>
            <Album/>
        </>
    )
}
export const metadata = {
    title: 'Hotel Pradeep Photo Gallery | Best Hotel in Varanasi',
    description: 'Explore Hotel Pradeep’s gallery and see our rooms, dining, and facilities. Get a glimpse of the best hotel experience in Varanasi.'
}