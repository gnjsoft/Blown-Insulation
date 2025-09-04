'use client'
import React from 'react'

export default function About() {
    return (
        <>
            <section className='lg:max-w-[1320px] md:max-w-full mx-auto my-25 px-3'>

                <div className='border-b-3 border-[#00a0d7] pt-10 w-40 mx-auto mb-10'>
                    <h1 className='text-4xl font-[tenor-sans] text-center'>ABOUT</h1>
                </div>

                <div className='text-justify text-slate-600'>
                    <p>Company was started in the year 2005 as a insulation work labour supplier contractor with the name of <b>M/S Rajesh Singh in IOCL Panipat Refinery </b>where we work with more than 50 no's of manpower.</p><br />
                    <p>Then in 2014 we started taking over full insulation application
                        job in the field of oil & gas. First job we started as a installation
                        contractor was OMPAL-MRPL site at Mangalore with L&T
                        Hydrocarbon Engineering Limited. Where we achieve the tight
                        target with in 5 month. The value of work done was approx. 25Lakhs
                    </p><br />
                    <p>Now company convert as private limited firm with the name of
                        Blown Insulation Services Pvt. Ltd. Which registered asaprivate
                        Limited firm on 24 November 2017. <b>We provide a wide service range of in the field of Hot & Cold Insulation work for Mechanical, Electrical & Instrumention
                            Projects and Maintenance. We are capable to achieve any
                            target with the help of our proud able professional, self
                            motivated, confident team members. We gave our
                            satisfactory services for India's biggest PSU's, MNC i.e.
                            BPCL, IOCL, HPCL, EIL, NTPC, L&T,TechnipFMC, OIL,
                            MMTCL, ONSHORE, ISGEC etc.
                        </b></p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 py-10 p-3 mt-10'>
                    <div>
                        <img src="blownimage/slide-3-scaled.jpg" alt="" />
                    </div>
                    <div>
                        <div>
                            <h1 className=' w-33 border-b-3 border-[#FF8F35] text-3xl font-semibold font-[tenor-sans]'>MISSION</h1>
                            <p className=' text-slate-600 py-5'>To provide innovative, reliable, and highquality insulation solutions that enhance energy efficiency and ensure safety across all industries.
                            </p>
                        </div>

                        <div>
                            <h1 className=' w-30 border-b-3 border-[#FF8F35] text-3xl font-semibold font-[tenor-sans'>VISION</h1>
                            <p className=' text-slate-600 py-5'>To be the leader in the insulation industry,
                                recognized for delivering sustainable and customer-focused solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 py-10 p-3 mt-10'>
                    <div>
                        <div className='text-center font-bold text-2xl'>
                            <img src='blownimage/Passport-Size.webp' className='w-30 mx-auto' />
                            <h1 className='py-2'>Rajesh Singh</h1>
                            <h2>Director</h2>
                        </div>
                        <div className='border border-gray-300 rounded-2xl p-4 my-5 text-gray-700 hover:bg-[#FF8F35] hover:text-white leading-7 transition duration-300 text-justify shadow-lg'>
                            <p>With over 15 years of experience in thermal insulation,
                                fireproofing, and scaffolding, Rajesh Singh is key to
                                ensuring high-quality service and client satisfaction.
                                His expertise in project execution and strategic vision
                                drives the company’s operational excellence and
                                market growth.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='text-center font-bold text-2xl'>
                            <img src='blownimage/Passport-Size.webp' className='w-30 mx-auto' />
                            <h1 className='py-2'>Ram Vinay Singh</h1>
                            <h2>Director</h2>
                        </div>
                        <div className='border border-gray-300 rounded-2xl p-4 my-5 text-gray-700 hover:bg-[#FF8F35] hover:text-white leading-7 transition duration-300 text-justify shadow-lg'>
                            <p>With 25 years of experience in insulation and construction,
                                Ram Vinay Singh excels in managing large-scale projects,
                                business operations, and team development. His expertise
                                and industry knowledge are key to the company’s success
                                and growth, enabling strong client relationships and
                                market expansion.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
