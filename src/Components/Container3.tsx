import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Container3: React.FC = () => {
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
    return(<div id="c4" className="w-full flex border p-10 clip-zigzag-double bg-[#0a1128] text-white">
        <div className="w-full px-8 mb-8" ref={sectionRef}>
        <h2 className="text-2xl md:text-4xl font-bold text-center">Shaastra</h2>
        <p className="mt-5 text-lg md:text-2xl font-semibold">Shaastra is the annual technical festival of the Indian Institute of Technology Madras (IIT Madras). The Sanskrit word 'shaastra' means science, and the festival accordingly consists of various engineering, science, and technology competitions, summits, lectures, video conferences, exhibitions, demonstrations and workshops. It has seen twenty-two editions, starting in its current avatar in the year 2000. shaastra is entirely student-managed and is the first such event in the world to be ISO 9001:2015 certified.</p>
    </div></div>)
}
export default Container3;