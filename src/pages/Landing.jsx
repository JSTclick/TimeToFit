// pages/LandingPage.jsx
import React from 'react';
import img1 from './assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';

const LandingPage = () => {
  // Normally these would be imported from the assets folder
  // For demo purposes, we'll use placeholder images
  const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13
  ];
//   const images = Array.from({ length: 13 }, (_, i) => (`../assets/${i + 1}.png`));
//   const images = Array.from({ length: 12 }, (_, i) => `/api/placeholder/600/300`);

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col w-full">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img 
              src={img} 
              alt={`Fitness image ${index + 1}`} 
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;