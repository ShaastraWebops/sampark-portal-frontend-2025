import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import "./home.scss";

const Home: React.FC = () => {
  const [heading] = useState("Get Ahead Of The Competition");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="c1"
      className="flex justify-center items-center h-screen w-full relative"
    >
      <div className="flex flex-col w-full items-center text-center">
        <h1
          data-heading={heading}
          className="relative text-5xl md:text-8xl uppercase font-normal m-0"
        >
          <span
            data-heading={heading}
            suppressContentEditableWarning
            className="relative block outline-none"
          >
            Get Ahead Of
            <br />
            The Competition
          </span>
        </h1>
        <div className="border h-1/12 w-1/12 mt-6 rounded-full border-black p-2 hidden md:block">
          <div className="animate-bounceTwice">
            <a
              className="hover:cursor-pointer"
              onClick={() => scrollToSection("subhead")}
            >
              <img className="arrow" src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
