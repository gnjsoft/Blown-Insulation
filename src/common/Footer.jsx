import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <>
            <footer className='bg-black w-full h-auto'>
                <div className='lg:max-w-[1320px] md:max-w-full mx-auto py-10 text-white p-3'>
                    <ul className='grid grid-cols-1 lg:grid-cols-3 justify-items-center md:grid-cols-2 gap-16 text-2xl'>
                        <div className='mb-3'>
                            <li className='font-[tenor-sans] pb-4'>Contact</li>
                            <div className='text-sm text-gray-400 leading-7'>
                                <p>Phone: 0265 2233501 / 2233502<br />
                                    Moblie: +91 974153 1501 , +91 8789046144</p>
                                <p><a href='mailto:Blowninsulationservices@gmail.com'>Blowninsulationservices@gmail.com</a></p>
                                <p><a href='mailto:info@blowninsulationservices.com'>info@blowninsulationservices.com</a></p>
                                <p><b>Office</b>: 14, Madhuvan Avenue, I.P.C.L (Reliance) Road,
                                    Koyali Village, Vadodara, Gujarat, India-391330
                                </p>
                                <p><b>Register Office</b>: Naya Tola, Ward No.2 Riga Road (Nr.Tower),
                                    Sitamarhi, Bihar, India-843302</p>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <li className='font-[tenor-sans] pb-4'>Quick Links</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >HOME</Link></li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='about' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ABOUT</Link></li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='service' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SERVICE</Link></li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='solution' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SOLUTION</Link></li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='work' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>WORK</Link></li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'><Link to='contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CONTACT US</Link></li>
                        </div>

                        <div className='mb-3'>
                            <li className='font-[tenor-sans] pb-4'>Our Products</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Hot Insulation</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Cold Insulation</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Insulation Material</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Scaffolding</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Jacketing</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Fireproofing</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>Structure Proofing</li>
                            <li className='p-2 cursor-pointer text-sm text-gray-400'>ManPower Supply</li>
                        </div>
                    </ul>
                    <div className='lg:flex justify-between text-center border-t border-gray-700 pt-5 mt-5'>
                        <p className='text-sm text-gray-400'>© 2025 Blown Insulation Services. All rights reserved.</p>
                        <p className='text-sm text-gray-400'>Designed and Developed By : <a href='https://gnjworldwide.com/' className='text-blue-500 hover:text-blue-700'>Gnj Worldwide India</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
