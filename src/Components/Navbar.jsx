import React from 'react';
import ImgLogo from '../images/logo/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__img">
        <img src={ImgLogo} alt="image logo" />
      </div>
      <div>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <button>register</button>
      </div>
    </div>
  );
};
