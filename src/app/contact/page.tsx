import Booking from '@/components/Booking/Booking'
import Cont from './cont'


export default function page() {

    return (
        <>
            <section className="banner-header valign bg-img bg-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center">Contact Us</div>
                        </div>
                    </div>
                </div>
            </section>
            <Cont />
            <Booking />
        </>
    )
}
export const metadata = {
    title: 'Hotel Pradeep Varanasi | Contact Us for Bookings & Info',
    description: 'Looking for the best hotel in Varanasi? Contact Hotel Pradeep today for bookings, rates, and more information.'
}