import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white pb-10 mt-10 -mb-5">
   
   <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 mt-8">
        
        <div className="mb-8 md:mb-0">
          <h3 className="text-orange-400 font-bold mb-3 text-2xl">Developers</h3>
          <ul className="space-y-2">
            <li>Mogith Guru</li>
            <li>Pranav Ram</li>
            <li>Sathwik</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-orange-400 font-bold mb-3 text-2xl">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold pr-3">Thrupthi</span>
              <span className="text-blue-400">+91 7975016134</span>
              <p>Outreach Head, Shaastra</p>
              
            </li>
            <li>
              <span className="font-semibold pr-3">Vansh</span>
              <span className="text-blue-400">+91 7404769417</span>
              <p>Publicity Coordinator, Shaastra</p>
              
            </li>
            <li>
              <span className="font-semibold pr-3">Roshan</span>
              <span className="text-blue-400">+91 9156450775</span>
              <p>Publicity Coordinator, Shaastra</p>
              
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-orange-400 font-bold mb-3 text-2xl">Don't miss out :)</h3>
          <p>Register now to turn your ideas into reality!!</p>
          <button className="bg-green-600 hover:bg-green-500 transition-colors duration-300 text-white px-5 py-2 mt-3 rounded-full text-xl">
            Join now
          </button>


        {/* </div>

        <div>
          <h3 className="text-orange-400 font-bold mb-3">Let's stay connected!</h3>
          <p>Ask your doubts and concerns. We are here to help you out!</p>
          
         
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Let's Chat..."
              className="p-2 rounded-l-lg w-full md:w-auto border-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300"
            />
            <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 text-white px-4 py-2 rounded-r-lg">
              Submit
            </button>
          </div> */}

          <div className="flex space-x-4 mt-8">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300">
              <i className="fab fa-facebook text-5xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
              <i className="fab fa-instagram text-5xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300">
              <i className="fab fa-linkedin text-5xl"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors duration-300">
              <i className="fab fa-youtube text-5xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
