import React from 'react';
import { Hero } from '../Components/Hero';
import { PlanTrip } from '../Components/PlanTrip';
import { BookCar } from '../Components/BookCar';
import { PickCar } from '../Components/PickCar';
import { Banner } from '../Components/Banner';

export const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
    </>
  );
};
