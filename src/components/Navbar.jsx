import { useState, useEffect } from 'react';
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
} from "react-icons/ai";
import {Link} from 'react-router-dom';

const navItems = [
  { id: "home", label: "Home", Link:"/", icon: <AiFillHome size={22} /> },
  { id: "about", label: "About", Link:"/Navabout", icon: <AiOutlineInfoCircle size={22} /> },
  { id: "project", label: "Work", Link:"Navwork", icon: <AiOutlineFundProjectionScreen size={22} /> },
  { id: "contact", label: "Contact", Link:"/Navcontact", icon: <AiOutlinePhone size={22} /> },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + 120; //  navbar height + buffer

      let current = navItems[0].id;

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          current = item.id; 
        }
      });

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (scrolledToBottom) {
        current = navItems[navItems.length - 1].id;
      }

      setActiveSection(current);
      window.history.replaceState(null, '', `#${current}`); //  URL update
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); //  page load pe bhi check karo

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function linkClass(id) {
    return activeSection === id
      ? 'text-blue-700 underline decoration-blue-700 decoration-3 underline-offset-6'
      : 'text-gray-500 hover:underline hover:decoration-blue-700 decoration-3 underline-offset-6 transition-all duration-300';
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex flex-col">
        <nav className='flex items-center justify-center md:justify-between px-4 md:px-8 py-4 bg-gray-50'>

          <div className='text-2xl font-extrabold text-blue-700 transition-transform duration-300 hover:rotate-5 cursor-pointer'>
            <span className='text-2xl font-extrabold text-blue-700 border-b-3 border-blue-800 pb-1'>Tech11 </span>
            <span className='text-2xl font-extrabold text-black border-b-3 border-blue-700 pb-1'>Devs</span>
          </div>

          <ul className='hidden md:flex items-center gap-8 font-medium'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.Link} className={linkClass(item.id)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          

        </nav>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50 md:hidden">
          <ul className="flex justify-around items-center py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.Link} 
                  className={`flex flex-col items-center text-xs transition-all duration-300 ${activeSection === item.id
                      ? "text-blue-700"
                      : "text-gray-500"
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </header>
    </>
  );
}

export default Navbar;