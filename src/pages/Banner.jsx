'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            {/* Slider Section */}
            <section className='bg-black'>
                <div className="lg:max-w-[full] md:max-w-full overflow-hidden">
                    <Slider {...settings}>
                        <div>
                            <img src="blownimage/s1.jpeg" alt="Slide 1" className="w-full h-150 object-cover rounded" />
                        </div>
                        <div>
                            <img src="blownimage/s2.jpeg" alt="Slide 2" className="w-full h-150 object-cover rounded" />
                        </div>
                        <div>
                            <img src="blownimage/s3.jpeg" alt="Slide 3" className="w-full h-150 object-cover rounded" />
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}
