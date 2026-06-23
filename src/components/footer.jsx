import react from 'react';
import { NavLink  } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `transition-all duration-300 ${isActive
    ? 'text-white font-semibold underline decoration-white decoration-2 underline-offset-4'
    : 'text-gray-300 hover:text-white'
  }`;


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
                        <h1 className="text-white scale-105"> Quick NavLinks</h1>
                        <li> <NavLink to="/Projects" className={linkClass}>Our Work </NavLink></li>
                        <li> <NavLink to="/Aboutus" className={linkClass}>About Us </NavLink></li>
                        <li> <NavLink to="/Contactus" className={linkClass}>Contact </NavLink></li>
                    </ul>
                </div>
                <div >
                    <ul className="space-y-2 cursor-pointer">

                        <li className="hover:text-white scale-105"> Our Services</li>
                        <li className="hover:text-white scale-105"><NavLink to="/Service" className={linkClass}>End-to-End Development Services</NavLink></li>
                        <li className="hover:text-white scale-105"><NavLink to="/Labdevelopment" className={linkClass}>White Label Development</NavLink></li>
                        <li className="hover:text-white scale-105"><NavLink to="/StaffAugmentation" className={linkClass}>Staff Augmentation</NavLink></li>
                        <li className="hover:text-white scale-105"><NavLink to="/SearchMarketing" className={linkClass}>Search Marketing Services</NavLink></li>
                        <li className="hover:text-white scale-105"><NavLink to="/ErpImplementation" className={linkClass}>ERP Implementation</NavLink></li>
                        <li className="hover:text-white scale-105"><NavLink to="/AiAutomation" className={linkClass}>AI Automation & Training</NavLink></li>
                    </ul>
                </div>


            </div>
        </section>

    )

}

export default Footer