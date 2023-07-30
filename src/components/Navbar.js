import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src="carlogo.jpg" alt="Rent Car" className="logo-img" />
          <span className="logo-text">Rent Car</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/become-renter" className="nav-link">Become Renter</Link>
        <Link to="/rental-deals" className="nav-link">Rental Deals</Link>
        <Link to="/how-it-works" className="nav-link">How it Works?</Link>
        <Link to="/why-choose-us" className="nav-link">Why Choose Us?</Link>
        <Link to="/login" className="nav-link">LOGIN</Link>
        <Link to="/register" className="nav-link">REGISTER</Link>
      </div>
    </nav>
  );
};

export default Navbar;
