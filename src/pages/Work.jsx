import React, { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";
import projects from '../data/Array.js';

export default function Work() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div>
                <img src="blownimage/Home-Sldie-1-scaled.jpg" alt="" className='w-full h-150 relative' />
                <div className='absolute top-70 left-160'>
                    <h1 className='text-white text-5xl font-semibold'>PROJECTS</h1>
                </div>
            </div>
            <section className='lg:max-w-[1320px] md:max-w-full mx-auto my-25 px-3'>
                {projects.map((project, index) => (
                    <div className='border-1 border-gray-300 mb-3' key={index}>
                        <div key={index} className='border-b-1 border-gray-300'>
                            <div className='flex items-center gap-2 p-2 cursor-pointer' onClick={() => handleToggle(index)}>
                                {openIndex === index ?
                                    (
                                        <FiMinus className='text-xl text-amber-500 transition' />
                                    )
                                    :
                                    (
                                        <FiPlus className='text-xl' />
                                    )
                                }
                                <h1 className='text-xl text-[#00a0d7] font-[tenor-sans] font-bold'>{project.company}</h1>
                            </div>
                            {openIndex === index &&
                                (
                                    <ul className='p-4 leading-10 border-t border-gray-300'>
                                        <li className=''>

                                            <div className=''>
                                                <p className='text-gray-500 font-semibold font-[tenor-sans]'>DESCRIPTION OF WORK</p>
                                                {(Array.isArray(project.po) ? project.po : [project.po]).map((_, i) => {
                                                    const poLine = Array.isArray(project.po) ? project.po[i] : project.po;
                                                    const descLine = Array.isArray(project.description) ? project.description[i] : project.description;

                                                    return (
                                                        <div key={i}>
                                                            {poLine && (
                                                                <p className='text-yellow-400 font-[tenor-sans] text-[18px]'>
                                                                    {poLine}
                                                                </p>
                                                            )}
                                                            {descLine && (
                                                                <p className='text-gray-400 font-[tenor-sans] text-[18px]'>
                                                                    {descLine}
                                                                </p>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className=''>
                                                <p className='text-gray-500 font-semibold font-[tenor-sans]'>CLIENT NAME</p>
                                                <p className='text-gray-400 font-[tenor-sans] text-[18px]'>
                                                    {(Array.isArray(project.client) ? project.client : [project.client]).map((line, index, arr) => (
                                                        <span key={index}>
                                                            {line}
                                                            {arr.length > 1 && <br />}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                ))}

            </section>
        </>
    )
}