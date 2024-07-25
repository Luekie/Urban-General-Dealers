// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/sustainability">Sustainability</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
