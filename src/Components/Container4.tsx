import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container4: React.FC = () => {
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
    return(<div id="c5" className="w-full p-8">
        <div className="w-full md:w-5/6" ref={sectionRef}>
        <h2 className="text-2xl md:text-4xl font-bold">Be a Campus Ambassador<br/>
Empower your voice and Lead the way!<br/><br/>
</h2><h2 className='text-xl md:text-3xl font-bold'>Why CA?</h2>
        <ol className="listyings m-5 text-lg md:text-2xl md:leading-10 leading-7 font-semibold">
        <li>Sponsored internships for the top 30 CAs.</li>
        <li>Internship certificates to CAs crossing specific threshold points</li>
        <li>Premium Shaastra merchandise and goodies for CAs</li>
        <li>Upskill workshops for CAs</li>
        <li>Earn Shaastra Credits in the Shaastra Grand Championship and use them in Shaastra-2024</li>
        <li>To know more visit <a className='text-none' href='https://ca.shaastra.org/'>https://ca.shaastra.org/</a></li>
        </ol>
        <h2 className="text-xl md:text-3xl font-bold mt-6">Roles and Responsibilities</h2>
        <ol className="listyings m-5 text-lg md:text-2xl md:leading-10 font-semibold leading-7">
        <li>You will be THE FACE OF SHAASTRA on your campus</li>
        <li>Internship certificates to CAs crossing specific threshold points</li>
        <li>Finding innovative and effective social media strategies to help Shaastra find the targeted audience</li>
        <li>Conducting e-mail campaigns in your respective colleges</li>
        <li>Completing the tasks given on time</li>
        </ol>
        </div></div>)
}
export default Container4;