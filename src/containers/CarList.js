import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulate fetching car data from a backend API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Assuming the API response contains an array of cars
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.title}
            {/* Replace "title" with the property name containing car details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
