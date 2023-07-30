import React, { useState } from 'react';



const Footer = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleFindCarClick = () => {
    // Implement logic to find cars based on location, pickupDate, and returnDate
    console.log('Finding cars with location:', location, 'pickup date:', pickupDate, 'return date:', returnDate);


  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="location-search">
          <input
            type="text"
            placeholder="Search for location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="date-picker">
          <input
            type="date"
            placeholder="Pickup date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Return date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <button className="find-car-button" onClick={handleFindCarClick}>
          FIND CAR
        </button>
      </div>
    </footer>
  );
};

export default Footer;
