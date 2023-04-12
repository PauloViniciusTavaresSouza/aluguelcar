import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-content__01">
              <h4>
                <span>CAR</span> Rental
              </h4>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </p>
              <ul className="footer-content__01__content">
                <li>
                  <a href="tel:61992605825">(61) 99260-5825</a>
                </li>
                <li>
                  <a href="mailto: pauloviniciustavaressouza@gmail.com">
                    pauloviniciustavaressouza@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-content__02">
              <h4>COMPANY</h4>
              <ul className="footer-content__02__content">
                <li>
                  <a href="#">New York</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">How we work</a>
                </li>
              </ul>
            </div>
            <div className="footer-content__03">
              <h4>WORKING HOURS</h4>
              <ul className="footer-content__03__content">
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div className="footer-content__04">
              <h4>SUBSCRIPTION</h4>
              <p>Subscribe your Email address for latest news & updates.</p>
              <form action="submit">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
