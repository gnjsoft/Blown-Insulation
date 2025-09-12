'use client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [button, setButton] = useState(1);

    return (
        <>
            {/* Header Section */}
            <section className='bg-white shadow-xl py-4 fixed top-0 left-0 w-full z-50'>
                <div className='lg:max-w-[1320px] md:max-w-full mx-auto grid grid-cols-2 justify-between items-center'>
                    <div>
                        <figure className='flex items-center gap-2'>
                            <img src="blownimage/blown.png" alt="" className='w-16 px-1' />
                        </figure>
                    </div>
                    <div>
                        <nav>
                            {/* Desktop menu */}
                            <ul className=' hidden lg:flex justify-around relative'>
                                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(1)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 1 ? 'bg-[#00a0d7] text-white' : ''}`}>HOME</button>
                                </Link>
                                <Link to="about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(2)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 2 ? 'bg-[#00a0d7] text-white' : ''}`}>ABOUT</button>
                                </Link>
                                <Link to="service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(3)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 3 ? 'bg-[#00a0d7] text-white' : ''}`}>SERVICE</button>
                                </Link>
                                <Link to="solution" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(4)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 4 ? 'bg-[#00a0d7] text-white' : ''}`}>SOLUTION</button>
                                </Link>
                                <Link to="work" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(5)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 5 ? 'bg-[#00a0d7] text-white' : ''}`}>PROJECTS</button>
                                </Link>
                                <Link to="contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button onClick={() => setButton(6)} className={`py-1 px-2  font-[Tenor-Sans] cursor-pointer transition-colors ${button === 6 ? 'bg-[#00a0d7] text-white' : ''}`}>CONTACT US</button>
                                </Link>
                            </ul>
                            {/* Mobile menu */}
                            {mobileMenuOpen && (
                                <ul className='flex flex-col gap-2 absolute left-0 top-23 rounded z-50 w-full text-ce lg:hidden text-center bg-white' onClick={() => setMobileMenuOpen(false)} transition-ease-in-out duration-100>
                                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] p-2 text-white font-[Tenor-Sans] cursor-pointer'>HOME</li></Link>
                                    <Link to="about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] text-white p-2 font-[Tenor-Sans] cursor-pointer'>ABOUT</li></Link>
                                    <Link to="service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] text-white p-2 font-[Tenor-Sans] cursor-pointer'>SERVICE</li></Link>
                                    <Link to="solution" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] text-white p-2 font-[Tenor-Sans] cursor-pointer'>SOLUTION</li></Link>
                                    <Link to="work" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] text-white p-2 font-[Tenor-Sans] cursor-pointer'>PROJECTS</li></Link>
                                    <Link to="contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className='bg-[#00a0d7] text-white p-2 font-[Tenor-Sans] cursor-pointer'>CONTACT US</li></Link>
                                </ul>
                            )}
                        </nav>
                        <button
                            className='lg:hidden absolute right-2 top-5 bg-white p-2 rounded-md shadow-md'
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
