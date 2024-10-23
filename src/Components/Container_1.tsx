import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import i1 from './Images/image1.jpg'; // Sample images - update paths as needed
import i2 from './Images/image2.jpg';
import i3 from './Images/image3.jpg';
import i4 from './Images/image4.jpg';
import i5 from './Images/image5.jpg';
// Assuming we have a CSS fi2e

gsap.registerPlugin(ScrollTrigger);

interface ImageSlide {
  url: string;
}

const slides: ImageSlide[] = [
  { url: i1 },
  { url: i2 },
  { url: i3 },
  { url: i4 },
  { url: i5 },
];

const Container_1: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="c2" className="w-full flex flex-col border p-10 clip-zigzag-double bg-[#0a1128] text-white">
      {/* Section for About Information */}
      <div className="w-full md:w-5/6 mx-auto" ref={sectionRef}>
        <h2 className="text-2xl text-center md:text-4xl font-bold">About Sampark</h2>
     </div>

      {/* Slideshow Container */}
      <div className="w-full max-w-3xl mx-auto mt-8 mb-8">
        <div className="relative h-96 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.url}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              alt={`Slide ${index}`}
            />
          ))}

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
            &lt;
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>

      </div>
      <div className="w-full md:w-5/6 mx-auto mb-8" ref={sectionRef}>
        <p className=" text-lg md:text-2xl font-semibold">
          Sampark is the annual outreach program of Shaastra, the technical festival of IIT Madras. It is a series of workshops, events, and lectures that are held in 15+ cities across India to bring Shaastra closer to students. The goal of Sampark is to give students the opportunity to learn about and participate in the various events and competitions that take place at Shaastra. It also provides a platform for students to interact with and learn from experts in their field.
        </p>
        <button className="text-lg md:text-2xl mt-3 bg-blue-400 p-2 font-bold">Register Now</button>
      </div>
      
    </div>
  );
};

export default Container_1;
