import React, { useState } from 'react';
import arrow from '../assets/arrow.svg'; // Adjust the import path as necessary
import './home.scss';

const MyComponent: React.FC = () => {
  const [heading, setHeading] = useState('Get Ahead Of The Competition');

  const handleInput = (event: React.FormEvent<HTMLSpanElement>) => {
    const text = event.currentTarget.innerText;
    setHeading(text);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="c1" className="flex justify-center items-center h-screen w-full relative">
      <div className="flex flex-col w-full items-center">       
        <h1
          data-heading={heading}
          className="relative text-8xl uppercase font-normal text-center m-0"
        >
          <span
            data-heading={heading}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            className="relative block outline-none"
          >
            Get Ahead Of<br /> The Competition
          </span>
        </h1>
        <div className="border h-1/12 w-1/12 mt-6 rounded-full border-black p-2">
          <div className='animate-bounceTwice'>
            <a className='hover:cursor-pointer' onClick={() => scrollToSection('subhead')}>
              <img className="arrow" src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
