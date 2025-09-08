'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div>
            {/* Slider Section */}
            <section className='bg-black'>
                <div className="max-w-full overflow-hidden">
                    <Slider {...settings}>
                        <div className="relative w-full h-150">
                            <img src="blownimage/hoti nsulation.jpg" alt="Slide 1" className="w-full h-full object-center rounded" />
                            <div className="absolute inset-0 bg-transparent rounded"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="text-5xl font-semibold text-[#00a0d7]">HOT INSULATION</h1>
                            </div>
                        </div>

                        <div className="relative w-full h-150">
                            <img src="blownimage/cold insulation.jpg" alt="Slide 1" className="w-full h-full object-center rounded" />
                            <div className="absolute inset-0 bg-transparent rounded"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="text-5xl font-semibold text-[#00a0d7]">COLD INSULATION</h1>
                            </div>
                        </div>

                        <div className="relative w-full h-150">
                            <img src="blownimage/cladding work.jpg" alt="Slide 1" className="w-full h-full object-center rounded" />
                            <div className="absolute inset-0 bg-transparent rounded"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="text-5xl font-semibold text-[#00a0d7]">CLADDING WORK</h1>
                            </div>
                        </div>

                        <div className="relative w-full h-150">
                            <img src="blownimage/scaffolding.jpg" alt="Slide 1" className="w-full h-full object-center rounded" />
                            <div className="absolute inset-0 bg-transparent rounded"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="text-5xl font-semibold text-[#00a0d7]">SCAFFOLDING</h1>
                            </div>
                        </div>

                        <div className="relative w-full h-150">
                            <img src="blownimage/mp.jpg" alt="Slide 1" className="w-full h-full object-center rounded" />
                            <div className="absolute inset-0 bg-transparent rounded"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="text-5xl font-semibold text-[#00a0d7]">MANPOWER SUPPLY</h1>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section >
        </div>
    )
}
