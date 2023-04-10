import React from 'react';

export const CarBox = ({ data, carID }) => {
  console.log(data);
  return (
    <>
      {data[carID].map((car, id) => {
        <div key={id} className="box-cars">
          <div className="pick-car"></div>
        </div>;
      })}
    </>
  );
};
