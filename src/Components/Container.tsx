import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logos from '../assets/ShaastraLogoWhite.jpg'
gsap.registerPlugin(ScrollTrigger);
import i1 from '../assets/i1.jpeg'
const Container: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
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
    return(<div id="c2" className="w-full flex border p-10 clip-zigzag-double bg-[#0a1128] text-white">
        <div className="w-full px-8 mb-4" ref={sectionRef}>
        <h2 className="text-2xl md:text-4xl font-bold text-center">About Sampark</h2>
        <p className="mt-5 text-lg md:text-2xl font-semibold">Sampark is the annual outreach program of Shaastra, the technical festival of IIT Madras. It is a series of workshops, events and lectures that are held in 15+ cities across India to bring Shaastra closer to students. The goal of Sampark is to give students the opportunity to learn about and participate in the various events and competitions that take place at Shaastra. It also provides a platform for students to interact with and learn from experts in their field.</p>
    <div className='w-full flex justify-center'><button className="text-lg md:text-2xl rounded-full hover:bg-sky-700 mt-3 bg-sky-500 p-2 font-bold">Register Now</button>
    </div> </div></div>)
}
export default Container;