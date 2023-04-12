import React, { useState } from 'react';

interface CarBoxProps {
  data: any,
  carID: number,
}

export const CarBox: React.FC<CarBoxProps> = ({ data, carID }) => {
  const [carLoad, setCarLoad] = useState<boolean>(true);

  return (
    <>
      {data[carID].map((car: any, id: number) => {
        return (
          <div key={id} className="box-cars">
            <div className="pick-car">
              {carLoad && <span className="loader"></span>}
              <img
                style={{ display: carLoad ? 'none' : 'block' }}
                src={car.img}
                alt="car-img"
                onLoad={() => setCarLoad(false)}
              />
            </div>
            <div className="pick-description">
              <div className="pick-description__price">
                <span>${car.price}/ rent per day</span>
              </div>
              <div className="pick-description__table">
                <div className="pick-description__table__col">
                  <span>Model</span>
                  <span>{car.model}</span>
                </div>
                <div className="pick-description__table__col">
                  <span>Mark</span>
                  <span>{car.mark}</span>
                </div>

                <div className="pick-description__table__col">
                  <span>Year</span>
                  <span>{car.year}</span>
                </div>

                <div className="pick-description__table__col">
                  <span>Doors</span>
                  <span>{car.doors}</span>
                </div>

                <div className="pick-description__table__col">
                  <span>AC</span>
                  <span>{car.air}</span>
                </div>

                <div className="pick-description__table__col">
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </div>

                <div className="pick-description__table__col">
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
              <a className="cta-btn" href="#booking-section">
                Reserve Now
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
