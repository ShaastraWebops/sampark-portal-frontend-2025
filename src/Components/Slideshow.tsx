// import React, { useState, useEffect } from 'react';
// import i1 from './Images/image1.jpg'; // Import images
// import i2 from './Images/image2.jpg';
// import i3 from './Images/image3.jpg';
// import i4 from './Images/image4.jpg';
// import i5 from './Images/image5.jpg';

// interface ImageSlide {
//   url: string;
// }

// // Use the imported images in the array
// const slides: ImageSlide[] = [
//     { url: i1 },
//     { url: i2 },
//     { url: i3 },
//     { url: i4 },
//     {url: i5},
// ];

// const Slideshow: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto">
//       {/* Slideshow container */}
//       <div className="relative h-96 overflow-hidden rounded-lg">
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide.url}  // Corrected: using the imported images
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//             alt={`Slide ${index}`}
//           />
//         ))}
//       </div>

//       {/* Dots for navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
import React, { useState, useEffect } from "react";

interface ImageSlide {
  url: string;
}

const slides: ImageSlide[] = [
  { url: "https://sampark-2025.blr1.digitaloceanspaces.com/uploads/i1.jpg" },
  { url: "https://sampark-2025.blr1.digitaloceanspaces.com/uploads/i2.jpg" },
  // { url: "https://sampark-2025.blr1.digitaloceanspaces.com/uploads/i3.JPG" },
  { url: "https://sampark-2025.blr1.digitaloceanspaces.com/uploads/i4.JPG" },
  { url: "https://sampark-2025.blr1.digitaloceanspaces.com/uploads/i5.JPG" },
];
const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Slideshow container */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default Slideshow;
