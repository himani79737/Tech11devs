import react from 'react';
import { Link } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `hover:text-white transition-all duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`;

function Footer() {
    return (
        <section className="bg-blue-500 py-10 px-6  text-gray-300">
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
                        <li className="hover:text-white scale-105"><Link to="/Service">End-to-End Development Services</Link></li>
                        <li className="hover:text-white scale-105"><Link to="/Labdevelopment">White Label Development</Link></li>
                        <li className="hover:text-white scale-105"><Link to="/StaffAugmentation">Staff Augmentation</Link></li>
                        <li className="hover:text-white scale-105"><Link to="/SearchMarketing">Search Marketing Services</Link></li>
                        <li className="hover:text-white scale-105"><Link to="/ErpImplementation">ERP Implementation</Link></li>
                        <li className="hover:text-white scale-105"><Link to="/AiAutomation">AI Automation & Training</Link></li>
                    </ul>
                </div>


            </div>
        </section>

    )

}

export default Footer