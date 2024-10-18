import { useState } from "react";
import arrow from '../assets/arrow.svg'
const Home: React.FC = () => {
    const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = 200;
    const newOpacity = 1 - scrollTop / maxScroll;
    setOpacity(Math.max(newOpacity, 0));
  }
    return(<>
    <div id="c1" className="flex justify-center items-center h-screen w-full">
    <div className="flex flex-col w-full items-center"><h1 className="text-7xl text-center font-arial-black font-bold">Get Ahead Of<br/>
    The Competition</h1>
    <div className="border h-1/12 w-1/12 mt-6 rounded-full border-black p-2"><img className="arrow animate-bounceTwice" src={arrow}/></div></div>
    </div>
    </>)
}
export default Home;