import react from 'react'
import ContactForm from './contactform'
import contactus from '../assets/contactus.png'
function Contactus() {
    return (

        <section className='bg-gray-100 py-12 px-6 ' id='contact'>
            <div className='max-w-7xl mx-auto  gap-8 items-center mt-12'>
                <div>
                    <h1 className='text-1xl md:text-2xl text-gray-800 leading-relaxed font-semibold'>Reach Out Anytime</h1>
                    <p className='text-base md:text-lg text-gray-600 leading-relaxed'>We’re always here to help! Whether you have inquiries, want to explore a collaboration, or just want to say hello—feel free to reach out. Our team is ready to assist with any questions you may have. Give us a call or drop us an email, and we’ll make sure you get the information you need.</p>
                </div>
                <div className='max-w-7xl mx-auto  gap-8 items-center mt-8'>
                    <h1 className=' md:text-2xl text-gray-800 font-semibold leading-relaxed'>Visit our office</h1>
                    <p> Haryana 122001, India</p>
                </div>
                <div className=' mt-8 my-4'>
                    <p className='md:text-lg font-semibold text-gray-800 leading-relaxed'>Connect with us</p>
                    <p>abcd@texhdev.com</p>
                    <p>+91-748599XXXX</p>
                </div>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center    '>
                    <img src={contactus} alt="contactus" className="w-full h-100 object-cover" />

                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contactus