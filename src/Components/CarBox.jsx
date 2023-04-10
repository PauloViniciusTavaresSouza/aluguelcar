import React, { useState } from 'react';

export const CarBox = ({ data, carID }) => {
  const [carLoad, setCarLoad] = useState(true);

  console.log(data[carID].map((car, id) => car.img));
  return (
    <>
      {data[carID].map((car, id) => {
        return (
          <div key={id} className="box-cars">
            <div className="pick-car">
              {carLoad && <span className="loader"></span>}
              <img src={car.img} alt="" onLoad={() => setCarLoad(false)} />
              <h1>qualquer coisa</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};
