import logo from '../assets/ShaastraLogoWhite.jpg';
import React from 'react';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      
    return(
        <>
        <div className="flex justify-between w-full h-20 font-bold bg-[#0a1128] sticky top-0 opacity-80 z-10">
            <div className="h-full p-2 w-2/12"><img src={logo} className="h-full w-5/6"/></div>
            <div className="-mt-2 text-2xl w-3/5 flex justify-between items-center h-full mr-12 text-slate-200">
            <a onClick={() => scrollToSection('c1')} className='hover:cursor-pointer hover:underline'>Home</a>
            <a onClick={() => scrollToSection('c2')} className='hover:cursor-pointer hover:underline'>About</a>
            <a onClick={() => scrollToSection('c3')} className='hover:cursor-pointer hover:underline'>Sampark</a>
            <a onClick={() => scrollToSection('c4')} className='hover:cursor-pointer hover:underline'>Shaastra</a>
            <a onClick={() => scrollToSection('c5')} className='hover:cursor-pointer hover:underline'>Campus Ambassador</a>
            </div>
        </div>
        </>
    )
}
export default Navbar;