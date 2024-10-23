import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Container2: React.FC = () => {
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
    return(<div id="c3" className="w-full p-10">
        <div className="w-full md:w-5/6" ref={sectionRef}>
        <h2 className="text-2xl md:text-4xl font-bold">Why Attend Sampark?</h2>
        <ol className="mt-5 text-lg md:text-2xl md:leading-10 leading-7 font-semibold">
        <li>Learn from the best and brightest minds in technology.</li>
        <li>Participate in exciting events and competitions.</li>
        <li>Get hands-on experience with the latest technologies.</li>
        <li>Network with other students and professionals in the field.</li>
        <li>Workshops and events on the latest technologies, such as Prompt engineering, NLPs, LLPs and many more…</li>
        </ol>
    <button className="text-lg md:text-2xl mt-3 bg-blue-400 p-2 font-bold">Register Now</button>
    </div></div>)
}
export default Container2;