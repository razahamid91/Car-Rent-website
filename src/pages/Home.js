import React from 'react';
import CarSlider from '../components/CarSlider';

const Home = () => {
  
  return (
    <div className="home">
      <h1>Find, Book, and  <span style={{ color: 'red' }}>Rent a car</span> in Easy Steps.</h1>
     
      <CarSlider />
    
       
    </div>
  );
};

export default Home;
