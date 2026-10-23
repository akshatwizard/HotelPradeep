import About from '@/components/About/About'
import Booking from '@/components/Booking/Booking'
import Facilities from '@/components/Facilities/Facilities'
import Slider from '@/components/Hero/Slider'
import HomeGallery from '@/components/HomeGallery/HomeGallery'
import Offers from '@/components/Offers/Offers'
import Pricing from '@/components/Pricing/Pricing'
import Rooms from '@/components/Rooms/Rooms'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials'
import Video from '@/components/Video/Video'
import React from 'react'

export default function page() {
  return (
    <>
    <Slider/>
    <About/>
    <Video/>
    <Rooms/>
    <Facilities/>
    <Testimonials/>
    <Services/>
    <Pricing/>
    {/* <HomeGallery/> */}
    <Offers/>
    <Booking/>
    </>
  )
}
