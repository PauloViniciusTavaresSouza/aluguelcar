import Img2 from '../images/testimonials/pfp1.jpg';
import Img3 from '../images/testimonials/pfp2.jpg';
import AspasImg from '../images/testimonials/aspas.png';

export const Testimonials = () => {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h3>Reviewed by People</h3>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="testimonials-content__testimonial">
              <div className="testimonials-content__testimonial__box">
                <h4>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </h4>
                <div className="testimonials-content__testimonial__box__users">
                  <div className="testimonials-content__testimonial__box__users__user">
                    <div className="testimonials-content__testimonial__box__users__user__name">
                      <img src={Img2} alt="img-client" />
                      <div className="testimonials-content__testimonial__box__users__user__name__title">
                        <h5>Potter Harry</h5>
                        <p>Gryffindor</p>
                      </div>
                    </div>
                    <img
                      className="aspas-img"
                      src={AspasImg}
                      alt="simbolo-aspas"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonials-content__testimonial__box">
                <h4>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </h4>
                <div className="testimonials-content__testimonial__box__users">
                  <div className="testimonials-content__testimonial__box__users__user">
                    <div className="testimonials-content__testimonial__box__users__user__name">
                      <img src={Img3} alt="img-client" />
                      <div className="testimonials-content__testimonial__box__users__user__name__title">
                        <h5>Ron Rizzly</h5>
                        <p>Novi Sad</p>
                      </div>
                    </div>
                    <img
                      className="aspas-img"
                      src={AspasImg}
                      alt="simbolo-aspas"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
