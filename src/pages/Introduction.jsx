import React from 'react'

export default function Introduction() {
    return (
        <>
            <div className='bg-[#f0f4f8] p-3'>
                <section className='lg:max-w-[1320px] md:max-w-full mx-auto py-15'>
                    <div className='border-b-2  border-[#00a0d7] w-[370px] pb-4 text-center mx-auto'>
                        <h1 className='text-4xl font-semibold font-[tenor-sans] '>WHAT WE OFFER</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'>Thermal Insulation Services</h2>
                            <p className='mt-2'> We provide high-quality thermal insulation for industrial and commercial projects, designed to
                                improve energy efficiency, reduce operational costs, and enhance temperature control
                            </p>
                        </div>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'> Fireproofing Solutions</h2>
                            <p className='mt-2'> Our comprehensive fireproofing services ensure that your infrastructure is protected against fire
                                hazards, meeting all safety and regulatory standards to safeguard both people and property
                            </p>
                        </div>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'> Scaffolding Services</h2>
                            <p className='mt-2'> We offer reliable and safe scaffolding solutions for industrial projects, ensuring secure access for
                                construction, maintenance, and repair works
                            </p>
                        </div>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'> Cold Insulation Solutions</h2>
                            <p className='mt-2'> Specializing in cold insulation materials like polyurethane and polystyrene, we help maintain
                                temperature control in sensitive environments, ensuring operational stability and efficiency
                            </p>
                        </div>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'>  Cladding & Metal Jacketing</h2>
                            <p className='mt-2'>  Our cladding services provide protective coverings for pipes, tanks, and ducts, helping to reduce
                                energy loss and protect assets from external damage
                            </p>
                        </div>
                        <div className='bg-white p-4 border border-gray-300 rounded shadow-md hover:shadow-[#00a0d7] transition-shadow'>
                            <h2 className='text-2xl font-semibold'> MenPower Supply</h2>
                            <p className='mt-2'> Manpower supply refers to the provision of workers, typically through an agency, to another company for a temporary or long-term period, helping businesses find skilled or unskilled labor to meet fluctuating workloads or specialized needs.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}