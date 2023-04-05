import React, { useState } from 'react';
import ImgLogo from '../images/logo/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  console.log(nav);
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img">
            <Link onClick={() => window.scrollTo(0, 0)}>
              <img src={ImgLogo} alt="image logo" />
            </Link>
          </div>

          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign in
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
