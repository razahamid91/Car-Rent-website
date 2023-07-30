import React, { useState } from 'react';

const CarSlider = () => {
  const carImages = [
    'car1.png',
    'car3.png',
    'car4.png',
    'car5.png',
    'car2.png',
    // Add more car images
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="car-slider">
      <img
        src={`car_images/${carImages[currentImageIndex]}`}
        alt="Car"
        className="slider-image"
      />
      <button onClick={prevImage} className="slider-button prev-button">
        &#8249;
      </button>
      <button onClick={nextImage} className="slider-button next-button">
        &#8250;
      </button>
    </div>
  );
};

export default CarSlider;
