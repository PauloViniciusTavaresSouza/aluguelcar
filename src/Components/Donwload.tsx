import React from 'react';
import AppStore from '../images/download/appstore.svg';
import GooglePlay from '../images/download/googleapp.svg';

export const Donwload = () => {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={AppStore} />
              <img alt="download_img" src={GooglePlay} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
