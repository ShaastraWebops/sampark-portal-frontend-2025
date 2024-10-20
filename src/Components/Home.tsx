import arrow from '../assets/arrow.svg'; // Adjust the import path as necessary
import './home.css'

const MyComponent: React.FC = () => {
  return (
    <div id="c1" className="flex justify-center items-center h-screen w-full relative">
      <div className="flex flex-col w-full items-center">
        <div className='div1'>
        <h1
          className="text-7xl text-center font-arial-black font-bold relative"
          title="Get Ahead Of The Competition"
        ><strong className='text-[#21618c]'>
          Get Ahead Of The Competition</strong></h1></div>
           
        <div className="border h-1/12 w-1/12 mt-6 rounded-full border-black p-2">
          <img className="arrow animate-bounceTwice" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
