import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Subhead from "./Components/Subhead";
import Container from "./Components/Container";
import Container2 from "./Components/Container2";
import Container3 from "./Components/Container3";
import Container4 from "./Components/Container4";
import Footer from "./Components/Footer";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slideshow from "./Components/Slideshow.tsx";
import Icons from "./Components/icons.tsx";
gsap.registerPlugin(ScrollTrigger);
const App: React.FC = () => {
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
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="App min-h-screen flex flex-col justify-between bg-[#40E0D0]">
      <Navbar />
      <Home />
      <Subhead />
      <Slideshow />
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
      <Footer />
      <Icons/>
      {/* <ImageUpload/> */}
    </div>
  );
};
export default App;
