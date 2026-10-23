import React from 'react'

export default function page() {
  return (
    <>
      <section className="banner-header valign bg-img bg-fixed">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {/* <div className="subtitle">Hotel Pradeep</div> */}
              <div className="title">Tariff</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="section-subtitle">ABOUT HOTEL PRADEEP </div> */}
              <div className="section-title" style={{ textAlign: "center" }}>Affordable Luxury in Varanasi with Hotel Pradeep</div>
              <p>
                Hotel Pradeep in Varanasi offers modern, comfortable rooms with flexible occupancy options under the FIT Tariff – European Plan (Executive). Located in the spiritual heart of the city, it's the perfect base for exploring Varanasi's rich heritage and vibrant culture.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="tariff-card">
                <div className="tariff-card-image">
                  <img src="/img/tariff/single.jpg" alt="" />
                  {/* <span>Executive</span> */}
                </div>
                <div className="tariff-title">
                  <p>Deluxe :</p>
                  <span><i className="fa-regular fa-indian-rupee-sign"></i> 4000</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="tariff-card">
                <div className="tariff-card-image">
                  <img src="/img/tariff/double.jpg" alt="" />
                  {/* <span>Executive</span> */}
                </div>
                <div className="tariff-title">
                  <p>Super Deluxe :</p>
                  <span><i className="fa-regular fa-indian-rupee-sign"></i> 5000</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="tariff-card">
                <div className="tariff-card-image">
                  <img src="/img/tariff/extra.jpg" alt="" />
                  {/* <span>Executive</span> */}
                </div>
                <div className="tariff-title">
                  <p>Executive :</p>
                  <span><i className="fa-regular fa-indian-rupee-sign"></i> 6000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h1>Additional Info</h1>
              <p>Kids below 12 years can share the room free!</p>
              <p>GST : 12% applies.</p>
              <p>Check-out Time: 12 Noon. <span style={{ fontWeight: "700", color: "#2d3091" }}>Enjoy your stay!</span></p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2>Simple Booking:</h2>
              <p>Booking your room at Hotel Pradeep is easy and straightforward. We ask for a small deposit to secure your reservation, ensuring that your room is ready when you arrive. This simple process helps you confirm your stay without any hassle.</p>
            </div>
            <div className="col-12">
              <h2>Our Commitment:</h2>
              <p>We are dedicated to ensuring your experience is smooth and fair. If any issue occurs with your booking or if we are unable to provide the reserved room, we will refund your deposit along with additional compensation as a gesture of goodwill. Your satisfaction is our priority.</p>
            </div>
            <div className="col-12">
              <h2>Discover Varanasi:</h2>
              <p>Stay with us and explore the magic of Varanasi, a city full of ancient temples, lively markets, and the sacred Ganges River. Hotel Pradeep is perfectly located to offer you easy access to these landmarks, letting you fully enjoy the rich culture and history of this iconic city.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Affordable Hotel Tariff in Varanasi | Hotel Pradeep',
  description: 'Check Hotel Pradeep’s latest room tariff in Varanasi. Enjoy budget-friendly rates with top facilities and great service.'
}