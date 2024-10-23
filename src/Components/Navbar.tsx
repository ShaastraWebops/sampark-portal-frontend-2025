import logo from '../assets/ShaastraLogoWhite.jpg';
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  // State to control navbar visibility
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Smooth scrolling to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Control navbar visibility on scroll
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 100); // Show navbar if scrolling up or near the top
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`flex justify-between w-full h-24 lg:h-28 font-bold bg-[#0a1128] sticky top-0 opacity-80 z-10 transition-transform duration-300 ${showNavbar ? '' : 'transform -translate-y-full'}`}>
      <div className="h-full pt-2 w-full justify-center lg:w-2/12 flex">
        <img src={logo} className="mt-1 h-full w-2/6 lg:w-5/6" alt="Shaastra Logo" />
      </div>
      <div className="-mt-2 text-3xl w-3/5 justify-between items-center h-full hidden lg:flex mr-12 text-slate-200">
        <a onClick={() => scrollToSection('c1')} className='nav-link'>Home</a>
        <a onClick={() => scrollToSection('c2')} className='nav-link'>About</a>
        <a onClick={() => scrollToSection('c3')} className='nav-link'>Sampark</a>
        <a onClick={() => scrollToSection('c4')} className='nav-link'>Shaastra</a>
        <a onClick={() => scrollToSection('c5')} className='nav-link'>Campus Ambassador</a>
      </div>
    </nav>
  );
};

export default Navbar;