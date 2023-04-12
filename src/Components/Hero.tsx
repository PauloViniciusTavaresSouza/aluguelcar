import React, { useEffect, useState } from 'react';
import BgShape from '../images/hero/hero-bg.png';
import HeroCar from '../images/hero/main-car.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [goUp, setGoUp] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: (0), behavior: 'smooth' });
  };

  useEffect(() => {
    const onPageScroll = (): void => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };

    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />

          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link className="hero-content__text__btns__book-ride" to="/">
                  Book Ride
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More
                </Link>
              </div>
            </div>

            {/* img */}

            <img
              className="hero-content__car-img"
              src={HeroCar}
              alt="car-img"
            />
          </div>
        </div>

        {/* page up */}

        <div
          onClick={scrollToTop}
          className={` scroll-up ${goUp ? 'show-scroll' : ''}`}
        >
          <i className="scroll-up__icon"></i>
        </div>
      </section>
    </>
  );
};
