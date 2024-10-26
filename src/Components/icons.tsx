// Icons.js
import React from 'react';

const Icons = () => {
  return (
    <div className="fixed bottom-6 right-6 hidden md:grid grid-cols-2 gap-2 bg-black opacity-40 hover:opacity-90 rounded-3xl">
     
      <button className="p-1 text-white rounded-full shadow-lg hover:bg-white">
      <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300"onClick={() =>
            window.open("https://www.facebook.com/Shaastra/")
          }>
              <i className="fab fa-facebook text-5xl"></i>
              
            </a>
      </button>
      <button className="p-1 text-white rounded-full shadow-lg hover:bg-white">
      <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300" onClick={() =>
            window.open("https://www.instagram.com/shaastra_iitm/")
          }>
              <i className="fab fa-instagram text-5xl"></i>
            </a>
      </button>
      <button className="p-1 text-white rounded-full shadow-lg hover:bg-white">
      <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300"onClick={() =>
            window.open("https://in.linkedin.com/company/shaastra-iit-madras")
          }>
              <i className="fab fa-linkedin text-5xl"></i>
            </a>
      </button>
      <button className="p-1 text-white rounded-full shadow-lg hover:bg-white">
      <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors duration-300"onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"
            )
          }>
              <i className="fab fa-youtube text-5xl"></i>
            </a>
      </button>
    </div>
  );
};

export default Icons;
