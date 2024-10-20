import React from 'react';
import arrow from '../assets/arrow.svg'; // Adjust the import path as necessary

const MyComponent: React.FC = () => {
  return (
    <div id="c1" className="flex justify-center items-center h-screen w-full relative">
      <div className="flex flex-col w-full items-center">
        <h1
          className="text-7xl text-center font-arial-black font-bold relative .div1"
          title="Get Ahead Of The Competition"
        >
          Get Ahead Of<br /> The Competition
          <span className="absolute top-0 left-0 w-full h-full text-7xl font-arial-black font-bold animate-glitchTop clip-top" />
          <span className="absolute top-0 left-0 w-full h-full text-7xl font-arial-black font-bold animate-glitchBottom clip-bottom" />
        </h1>
        <div className="border h-1/12 w-1/12 mt-6 rounded-full border-black p-2">
          <img className="arrow animate-bounceTwice" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
