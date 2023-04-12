import React from 'react';
import { Hero } from '../Components/Hero';
import { PlanTrip } from '../Components/PlanTrip';
import { BookCar } from '../Components/BookCar';
import { PickCar } from '../Components/PickCar';
import { Banner } from '../Components/Banner';
import { ChooseUs } from '../Components/ChooseUs';
import { Testimonials } from '../Components/Testimonials';
import { Faq } from '../Components/Faq';
import { Donwload } from '../Components/Donwload';

export const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Donwload />
    </>
  );
};
