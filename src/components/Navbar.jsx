import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex flex-col" >
        <nav className='flex items-center justify-between px-4 md:px-8 py-4 bg-gray-50'>

          {/* Logo */}
          <a href=''>
            <span className='text-2xl font-extrabold text-blue-700 border-b-3 border-blue-800 pb-1'>Tech11 </span>
            <span className='text-2xl font-extrabold text-black border-b-3 border-blue-700 pb-1'>Devs</span>
         </a>

          {/* ✅ Desktop Links — className={linkClass} lagaya */}
          <ul className='hidden md:flex items-center gap-8 font-medium'>
            <li> <a href='#home' className="text-gray-500 hover:underline hover:decoration-blue-700 decoration-3 underline-offset-6">Home</a></li>
            <li> <a href='#project' className="text-gray-500 hover:underline hover:decoration-blue-700 decoration-3 underline-offset-6">Our Work</a></li>
            <li> <a href='#about' className="text-gray-500 hover:underline hover:decoration-blue-700 decoration-3 underline-offset-6">About Us</a></li>
            <li> <a href='#contact' className="text-gray-500 hover:underline hover:decoration-blue-700 decoration-3 underline-offset-6">Contact Us</a></li>
          </ul>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

        </nav>

        {/* ✅ Mobile Menu — className={linkClass} lagaya */}
        {isOpen && (
          <ul className='md:hidden flex flex-col gap-4 px-6 py-5 bg-gray-50 border-t border-gray-200 font-medium'>
            <li><a href='#home' end className={linkClass} onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href='#project' className={linkClass} onClick={() => setIsOpen(false)}>Our Work</a></li>
            <li><a href='#about'className={linkClass} onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href='#contact' className={linkClass} onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
        )}

      </header>
    </>
  );
}

export default Navbar;