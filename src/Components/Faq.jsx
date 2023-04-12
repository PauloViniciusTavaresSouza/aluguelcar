import React, { useState } from 'react';

export const Faq = () => {
  const [activeF, setActiveF] = useState('q1');

  const openQ = (id) => {
    setActiveF(activeF === id ? '' : id);
  };

  const openResposta = (id) => {
    return activeF === id ? 'respotaOpen' : '';
  };

  const activeBackground = (id) => {
    return activeF === id ? 'active' : '';
  };
  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h3>FAQ</h3>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="faq-content__faq">
              <div className="faq-box">
                <div
                  onClick={() => openQ('q1')}
                  className={`faq-content__faq__button ${activeBackground(
                    'q1',
                  )}`}
                >
                  <p>1. What is special about comparing rental car deals?</p>
                  <i> icone </i>
                </div>
                <div
                  className={`faq-content__faq__button__respota ${openResposta(
                    'q1',
                  )}`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className="faq-box">
                <div
                  onClick={() => openQ('q2')}
                  className={`faq-content__faq__button ${activeBackground(
                    'q2',
                  )}`}
                >
                  <p>2. How do I find the car rental deals?</p>
                  <i> icone </i>
                </div>
                <div
                  className={`faq-content__faq__button__respota ${openResposta(
                    'q2',
                  )}`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  onClick={() => openQ('q3')}
                  className={`faq-content__faq__button ${activeBackground(
                    'q3',
                  )}`}
                >
                  <p>3. How do I find such low rental car prices?</p>
                  <i> icone </i>
                </div>
                <div
                  className={`faq-content__faq__button__respota ${openResposta(
                    'q3',
                  )}`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
