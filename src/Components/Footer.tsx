import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a1128] text-white pb-10 mt-10">
   
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between mt-12">
        
        <div className="mb-8 md:mb-0">
          <h3 className="text-orange-400 font-bold mb-3 text-2xl">Developers</h3>
          <ul className="space-y-2 md:text-xl">
            <li>Mogith Guru</li>
            <li>Pranav Ram</li>
            <li>Sathwik</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-orange-400 font-bold mb-3 text-2xl">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold md:text-xl">Thrupthi</p>
              <p>Outreach Head, Shaastra</p>
              <a href="tel:+917975016134" className="text-blue-400">+91 7975016134</a>
            </li>
            <li>
              <p className="font-semibold md:text-xl">Vansh</p>
              <p>Publicity Coordinator, Shaastra</p>
              <a href="tel:+917404769417"className="text-blue-400">+91 7404769417</a>
            </li>
            <li>
              <p className="font-semibold md:text-xl">Roshan</p>
              <p>Publicity Coordinator, Shaastra</p>
              <a href="tel:+919156450775" className="text-blue-400">+91 9156450775</a>
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

          <div className="flex space-x-4 mt-20">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300"onClick={() =>
            window.open("https://www.facebook.com/Shaastra/")
          }>
              <i className="fab fa-facebook text-5xl"></i>
              
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300" onClick={() =>
            window.open("https://www.instagram.com/shaastra_iitm/")
          }>
              <i className="fab fa-instagram text-5xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300"onClick={() =>
            window.open("https://in.linkedin.com/company/shaastra-iit-madras")
          }>
              <i className="fab fa-linkedin text-5xl"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors duration-300"onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"
            )
          }>
              <i className="fab fa-youtube text-5xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
