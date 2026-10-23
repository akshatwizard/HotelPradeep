import React from 'react'
import Rooms from './rooms'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Rooms & Suites</div>
                        </div>
                    </div>
                </div>
            </section>
           <Rooms/>
        </>
    )
}

export const metadata = {
    title: 'Rooms at Hotel Pradeep | Luxury & Comfort in Varanasi',
    description: 'Hotel Pradeep offers comfortable rooms in Varanasi. Enjoy a relaxing stay with good service and modern facilities. Perfect for all travelers!'
}