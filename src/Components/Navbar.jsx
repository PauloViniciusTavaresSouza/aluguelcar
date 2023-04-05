import React, { useState } from 'react';
import ImgLogo from '../images/logo/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}

        <div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="mobile-navbar__close__icon"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link to="/" onClick={openNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={openNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="models" onClick={openNav}>
                Models
              </Link>
            </li>
            <li>
              <Link to="testimonials" onClick={openNav}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="team" onClick={openNav}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={openNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

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

          {/* mobile */}

          <div className="mobile-hamb" onClick={openNav}>
            <i className="mobile-hamb__hamb"></i>
          </div>
        </div>
      </nav>
    </>
  );
};
