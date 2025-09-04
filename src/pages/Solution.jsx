import React from 'react'

export default function Solution() {
    return (
        <>
            <div className='border-b-2 border-gray-300 shadow-lg'>
                <figure>
                    <img src="blownimage/solution.jpg" alt="" className='w-full h-150' />
                </figure>
            </div>

            <section className='lg:max-w-[1320px] md:max-w-full mx-auto my-25 px-3'>
                <div className='grid grid-cols-1 lg:grid-cols-[40%_40%] md:grid-cols-1 justify-around'>
                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/energy-efficient.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Energy Efficiency</h1>
                            <p className=' text-slate-500 pt-3'>We provide high-quality thermal insulation that
                                reduces energy consumption, leading to cost
                                savings and improved operational efficiency.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/settings.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Safety & Compliance</h1>
                            <p className=' text-slate-500 pt-3'>We adhere to strict safety standards, ensuring all
                                projects meet regulatory requirements and
                                minimize risks to personnel and equipment .
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/requirements.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Premium Materials</h1>
                            <p className=' text-slate-500 pt-3'> We use durable, top-tier insulation materials
                                that ensure long-lasting performance and reduce maintenance costs.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/fireproof.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Fireproofing Solutions</h1>
                            <p className=' text-slate-500 pt-3'>Our advanced fireproofing services protect
                                businesses from fire hazards and ensure full
                                regulatory compliance.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/graduation.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Skilled Workforce</h1>
                            <p className=' text-slate-500 pt-3'>Our experienced, trained team guarantees
                                precise, timely insulation installations,
                                enhancing service quality.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-[#FF8F35] rounded-2xl grid grid-cols-[15%_70%] justify-around items-center mb-10 p-2'>
                        <div>
                            <img src="blownimage/sustainable.png" alt="" />
                        </div>
                        <div className='font-[tenor-sans]'>
                            <h1 className='text-xl font-semibold'>Sustainability</h1>
                            <p className=' text-slate-500 pt-3'>We offer eco-friendly insulation materials that
                                help businesses reduce their carbon footprint
                                and achieve sustainability goals.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
