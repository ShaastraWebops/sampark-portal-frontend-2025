import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a1128] text-white pb-5 mt-10">
     
      {/* Footer content */}
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between mt-12">
        
        {/* Developers Section */}
        <div>
          <h3 className="text-orange-400 font-bold mb-3">Developers</h3>
          <ul>
            <li>Mogith Guru</li>
            <li>Pranav Ram</li>
            <li>Sathwik</li>
          </ul>
        </div>

        {/* Contents Section */}
        <div>
          <h3 className="text-orange-400 font-bold mb-3">Contents</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Timeline</li>
          </ul>
        </div>

        {/* Don't Miss Out Section */}
        <div>
          <h3 className="text-orange-400 font-bold mb-3">Don't miss out :)</h3>
          <p>Register now to turn your ideas into reality!!</p>
          <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded-full">Join now</button>
          
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="text-orange-400 font-bold mb-3">Let's stay connected!</h3>
          <p>Ask your doubts and concerns. We are here to help you out!</p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Let's Chat.."
              className="p-2 rounded-l-lg border-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-r-lg">Submit</button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;