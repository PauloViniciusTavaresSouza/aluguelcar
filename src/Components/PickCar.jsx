import React, { useState } from 'react';

export const PickCar = () => {
  const [active, setActive] = useState('FirstCar');
  const [colorBtn, setColorBtn] = useState('btn1');

  console.log(colorBtn);

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? '' : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? 'colored-button' : '';
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container_title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              <div className="pick-box">
                <button
                  className={`${coloringButton('btn1')}`}
                  onClick={() => {
                    setActive('FirstCar');
                    btnID('btn1');
                  }}
                >
                  {' '}
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton('btn2')}`}
                  onClick={() => {
                    setActive('SecondCar');
                    btnID('btn2');
                  }}
                >
                  {' '}
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton('btn3')}`}
                  onClick={() => {
                    setActive('ThirdCar');
                    btnID('btn3');
                  }}
                >
                  {' '}
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton('btn4')}`}
                  onClick={() => {
                    setActive('FourthCar');
                    btnID('btn4');
                  }}
                >
                  {' '}
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton('btn5')}`}
                  onClick={() => {
                    setActive('FifthCar');
                    btnID('btn5');
                  }}
                >
                  {' '}
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton('btn6')}`}
                  onClick={() => {
                    setActive('SixthCar');
                    btnID('btn6');
                  }}
                >
                  {' '}
                  VW Passat CC
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
