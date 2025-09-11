'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Client() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <section className='lg:max-w-[1320px] md:max-w-full mx-auto py-10'>
                <div className='py-10 p-3'>
                    {/* INTRODUCTION */}
                    <div>
                        <h1 className='font-[tenor-sans] text-3xl pb-7 text-center'>BLOWN INSULATION SERVICES</h1>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px] text-justify'> Blown Insulation Services Pvt. Ltd. specializes in high-quality thermal insulation, fireproofing, and
                            scaffolding solutions for industrial and commercial projects. We offer a comprehensive range of services
                            tailored to meet the unique needs of each client. Our mission is to deliver exceptional value through
                            innovation, quality, and safety, while our vision is to lead the industry in providing sustainable insulation
                            solutions globally. The company specializes in hot & cold insulation for mechanical, electrical, and
                            instrumentation projects. They offer a range of services including fireproofing, scaffolding, maintenance
                            services, and manpower supply.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className='my-15'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5 py-5'>
                            <img src="blownimage/model1.png" alt="m1" />
                             <img src="blownimage/model2.png" alt="m2" />
                        </div>
                    </div>

                    {/* CLIENT */}
                    <div>
                        <div className='border-b-2 border-[#00a0d7] w-[170px] pb-2 my-8 mx-auto'>
                            <h1 className='font-[tenor-sans] text-4xl text-center'>Our Client</h1>
                        </div>
                        <div className="w-[350px] mx-auto">
                            <Slider {...settings}>
                                <div>
                                    <img src="blownimage/adani.jpg" alt="Slide 1" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/blue-star.jpg" alt="Slide 2" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/elmatics-engineers.jpg" alt="Slide 3" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/l&t.jpg" alt="Slide 4" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/offshore-infra.jpg" alt="Slide 5" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/onshore.jpg" alt="Slide 6" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/dcm.jpeg" alt="" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/isgec.png" alt="" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/kss.jpeg" alt="Slide 9" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/miraj.png" alt="Slide 10" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/murugappa.jpeg" alt="Slide 11" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/sandip.jpeg" alt="Slide 12" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/tech.jpeg" alt="Slide 13" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/thermax.png" alt="Slide 14" className="w-50 h-25" />
                                </div>
                                <div>
                                    <img src="blownimage/thyssen.jpeg" alt="Slide 15" className="w-50 h-25" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
