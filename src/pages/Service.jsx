'use client'
import React from 'react'

export default function Service() {
    return (
        <>
            <div className='border-b-2 border-gray-300 shadow-lg'>
                <figure>
                    <img src="blownimage/service-png.webp" alt="" className='w-full h-150' />
                </figure>
            </div>
            <section className='lg:max-w-[1320px] md:max-w-full mx-auto py-10 px-3'>
                <div className='max-w-[1320px] mx-auto py-10'>
                    {/* <h1 className='text-5xl font-[tenor-sans] font-semibold text-center py-5'>SERVICES</h1> */}
                    <p className='text-gray-500 font-[tenor-sans] text-[20px] text-justify'>BLOWN Insulation is dedicated to providing high-quality industrial services that are innovative and effective for many industrial applications. Our current areas of focus include industrial thermal insulation services, industrial siding services, Insulation material, as a service, encompasses the supply and application of these materials, often including surface preparation, vapor barriers, and protective cladding , industrial scaffolding services, and industrial refractory services. Providing the best workmanship while working within time and budget constraints is our goal for every project undertaken.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10'>

                    <div className='mb-10'>
                        <img src='blownimage/hot1.png' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>HOT Insulation</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Hot insulation materials are designed to minimize heat transfer from high-temperature surfaces, preventing heat loss and maintaining desired temperatures in various applications. They are used in industries like petrochemical, energy, and manufacturing to protect equipment, enhance energy efficiency, and stabilize industrial processes.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/cold1.png' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>COLD Insulation</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Cold insulation materials are designed to minimize heat gain from external sources, maintaining low temperatures in various applications. They are used in industries like refrigeration, cryogenics, and food processing to protect equipment, enhance energy efficiency, and stabilize industrial processes.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/thermal.png' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>Insulation Material</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Insulation materials are used to reduce heat transfer between objects at different temperatures. They are essential in various industries, including construction, manufacturing, and energy, to improve energy efficiency, enhance comfort, and protect equipment.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/scaffolding.jpg' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>Scaffolding</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Scaffolding is a temporary structure used to support workers and materials during construction, maintenance, or repair activities. It provides a safe and stable platform for workers to access elevated areas, ensuring efficiency and safety in various industrial applications.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/cladding.png' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>Jacketing</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Jacketing is a protective covering applied to insulation materials to enhance durability, weather resistance, and aesthetics. It is commonly used in industrial applications to safeguard insulation from mechanical damage, moisture, and environmental factors, ensuring long-lasting performance.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/fire.webp' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>Fireproofing</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Fireproofing is the process of making a material or structure resistant to fire, preventing the spread of flames and reducing heat transfer. It is essential in construction and manufacturing to protect lives and property, ensuring safety and compliance with fire codes and regulations.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/structure.png' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>Structure Proofing</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Structure proofing is the process of making a material or structure resistant to fire, preventing the spread of flames and reducing heat transfer. It is essential in construction and manufacturing to protect lives and property, ensuring safety and compliance with fire codes and regulations.</p>
                    </div>

                    <div className='mb-10'>
                        <img src='blownimage/mp.jpg' className='w-100 h-70 bg-cover' />
                        <h2 className='text-center text-[#00a0d7] text-xl py-5 font-[tenor-sans]'>ManPower Supply</h2>
                        <p className='text-gray-500 font-[tenor-sans] text-[18px]'>Manpower supply involves providing skilled and unskilled labor for various construction and industrial projects. It ensures that businesses have the necessary workforce to complete tasks efficiently and safely, meeting project deadlines and quality standards.</p>
                    </div>

                </div>

            </section>
        </>
    )
}
