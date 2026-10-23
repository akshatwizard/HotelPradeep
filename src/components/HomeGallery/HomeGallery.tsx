import React from 'react'
import Gallery from '../Gallery/Gallery'

export default function HomeGallery() {
const imageData = [
    "/img/rooms/room-01.jpg",
    "/img/rooms/room-03.jpg",
    "/img/rooms/room-02.jpg",
]

  return (
    <Gallery title='Hotel Galley' imageData={imageData}  />
  )
}
