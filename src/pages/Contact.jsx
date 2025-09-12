import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const Service_id = "service_3f3n3r2"
        const Template_id = "template_6dqrtgn"
        const User_id = "aaitTijFrZZ-M-_Ln"

        emailjs
            .sendForm(Service_id, Template_id, form.current, {
                publicKey: User_id,

            })
            .then(
                () => {
                    toast.success('Form Submit Successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <ToastContainer />
            <div>
                <img src="blownimage/contact.jpg" alt="" className='w-full h-150 relative' />
                <div className='absolute top-70 left-150'>
                    <h1 className='text-5xl font-semibold text-[#00a0d7]'>CONTACT US</h1>
                </div>
            </div>
            <section className='lg:max-w-[1320px] md:max-w-full mx-auto my-25 px-3'>
                <div className='grid grid-cols-1 lg:grid-cols-[40%_40%] md:grid-cols-1 mx-auto justify-around'>

                    <div>
                        <div>
                            <h1 className='text-3xl font-[tenor-sans] pb-4'>Address Info - Vadodara Gujarat:</h1>
                        </div>
                        <div>
                            <p className='text-xl font-[tenor-sans] pb-3'>Blown Insulation Services Pvt. Ltd.</p>
                            <p className='text-gray-500 font-[tenor-sans] text-[17px] text-justify'>
                                Address: 14, Madhuvan Avenue, I.P.C.L (Reliance) Road,<br />
                                Koyali Village, Vadodara, Gujarat, India-391330 <br />
                                Phone:02652233501 / 2233502 <br />
                                Mobile: +91 9741531501, +91 8789046144 <br /><br />
                                E-mail: <a href='mailto:Blowninsulationservices@gmail.com' className='text-blue-400'>Blowninsulationservices@gmail.com</a><br />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1 className='text-3xl font-[tenor-sans] pb-4'>Address Info - Sitamarhi, Bihar:</h1>
                        </div>
                        <div>
                            <p className='text-xl font-[tenor-sans] pb-3'>Blown Insulation Services Pvt. Ltd.</p>
                            <p className='text-gray-500 font-[tenor-sans] text-[17px] text-justify'>
                                Address: Naya Tola, Ward No.2 Riga Road (Nr.Tower),<br />
                                Sitamarhi, Bihar, India-843302 <br />
                                Phone:02652233501 / 2233502 <br />
                                Mobile: +91 9741531501, +91 8789046144 <br /><br />
                                E-mail: <a href='mailto:info@blowninsulationservices.com' className='text-blue-400'>info@blowninsulationservices.com</a>
                            </p>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <div>
                            <h1 className='text-3xl pb-5 font-[tenor-sans]'>Find the Address</h1>
                        </div>
                        <div className='border-2 border-gray-300 p-5 w-135 h-125 '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.5091596529974!2d73.11531327503441!3d22.359706540739996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9bc3d1a55db%3A0x74315bc6c26b7ffa!2sBlown%20Insulation%20Services%20Private%20Limited!5e1!3m2!1sen!2sin!4v1754044485200!5m2!1sen!2sin" width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className='mt-20 '>
                        <div>
                            <h1 className='text-3xl pb-5 font-[tenor-sans]'>Find the Address</h1>
                        </div>
                        <div className='border-2 border-gray-300 p-5 w-135 h-125 '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8887874823245!2d85.47169087515813!3d26.597113173582652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1a66c747ae9%3A0x68cce7ac03254c8b!2sBlown%20Insulation%20Services%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1754044752932!5m2!1sen!2sin" width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>

                {/* form */}
                <div className='mt-20 text-center'>
                    <form ref={form} onSubmit={sendEmail} className='w-full'>
                        <h1 className='text-3xl pb-5 font-[tenor-sans]'>Keep in Touch</h1>
                        <div className=''>
                            <input type="text" name="user_name" placeholder='Your Name' className='border-1 w-full border-gray-300 p-3 md:w-1/2 mb-4' required /><br />
                            <input type="email" name="user_email" placeholder='Your Email' className='border-1 w-full border-gray-300 p-3 md:w-1/2 mb-4' required /><br />
                            <input type="tel" name="user_phone" placeholder='Your Phone' className='border-1 w-full border-gray-300 p-3 md:w-1/2 mb-4' maxLength={10} /><br />
                            <textarea name="message" placeholder='Your Message' className='border-1 w-full border-gray-300 p-3 md:w-1/2' rows="5" required> </textarea>
                        </div>
                        <button type="submit" className='bg-[#00a0d7] text-white px-5 py-2 mt-5'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}
