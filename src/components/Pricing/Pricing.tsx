import React from 'react'

export default function Pricing() {
    return (
        <section className="pricing1 section-padding bg-lightbrown">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mb-20">
                        <div className="section-subtitle">EXPERIENCE VARANASI</div>
                        <div className="section-title">Discover the Spiritual Essence</div>
                    </div>
                </div>
                <div className="row justify-content-center g-2">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="img-container">
                            <img src="/img/gallery/kashi.jpg" alt="" />
                            <div className="img-content">
                                <div className="img-title">
                                    <h3>Kashi Vishwanath Temple</h3>
                                </div>
                                <div className="img-desc">A sacred shrine dedicated to Lord Shiva, drawing devotees from around the world.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="img-container">
                            <img src="/img/gallery/aarti.jpg" alt="" />
                            <div className="img-overlay"></div>
                            <div className="img-content">
                                <div className="img-title">
                                    <h3>Ganga Aarti</h3>
                                </div>
                                <div className="img-desc">A mesmerizing evening ritual on the banks of the Ganges, filled with divine chants and lights.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="img-container">
                            <img src="/img/gallery/ghat.jpg" alt="" />
                            <div className="img-overlay"></div>
                            <div className="img-content">
                                <div className="img-title">
                                    <h3>Ganga Ghats</h3>
                                </div>
                                <div className="img-desc">Historic riverfront steps where spirituality, culture, and traditions come alive.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-30">
                        <div className="section-info">
                            {/* <div className="tag">Questions</div> */}
                            <div className="desc">Varanasi, one of the oldest continuously inhabited cities in the world, is a spiritual and cultural hub nestled along the banks of the sacred Ganges River in Uttar Pradesh, India. Revered as the holiest city in Hinduism, it attracts millions of pilgrims and tourists who come to participate in rituals, bathe in the river, and witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat. The city’s narrow, winding lanes are filled with ancient temples like Kashi Vishwanath, bustling markets, and the hauntingly beautiful sounds of devotional music. Varanasi is also a center for silk weaving, traditional crafts, and philosophical discourse, offering a profound blend of history, spirituality, and vibrant daily life that leaves an indelible mark on every visitor.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
