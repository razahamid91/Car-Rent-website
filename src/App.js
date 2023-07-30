import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BecomeRenter from './pages/BecomeRenter';
import RentalDeals from './pages/RentalDeals';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from './pages/WhyChooseUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/become-renter" element={<BecomeRenter/>} />
          <Route path="/rental-deals" element={<RentalDeals/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/why-choose-us" element={<WhyChooseUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
