import react from 'react';

function Footer() {
    return (
        <section className="bg-blue-700 py-10 px-6  text-gray-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                    <span className='text-2xl font-extrabold text-white border-b-3 border-white pb-1'>Tech11 </span>
                    <span className='text-2xl font-extrabold text-black border-b-3 border-white pb-1'>Devs</span>
                    <p className=' mt-4'>© 2026  All rights reserved.</p>
                </div>
                <div>
                    <ul className="space-y-2 cursor-pointer ">
                        <li className="hover:text-white scale-105">Home</li>
                        <li className="hover:text-white scale-105">Our Work</li>
                        <li className="hover:text-white scale-105">About Us</li>
                        <li className="hover:text-white scale-105">Contact</li>
                    </ul>
                </div>
                <div >
                    <ul className="space-y-2 cursor-pointer">

                        <li className="hover:text-white scale-105"> Our Services</li>
                        <li className="hover:text-white scale-105">End-to-End Development Services</li>
                        <li className="hover:text-white scale-105">White Label Development</li>
                        <li className="hover:text-white scale-105">Staff Augmentation</li>
                        <li className="hover:text-white scale-105">Search Marketing Services</li>
                        <li className="hover:text-white scale-105">ERP Implementation</li>
                        <li className="hover:text-white scale-105">AI Automation & Training</li>
                    </ul>
                </div>


            </div>
        </section>

    )

}

export default Footer