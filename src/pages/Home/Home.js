import React from 'react';
import Hero from '../../components/Hero/Hero';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import SalesServices from '../../components/SalesServices/SalesServices';
import OtherProducts from '../../components/OtherProducts/OtherProducts';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import ClientsSlider from '../../components/ClientsSlider/ClientsSlider';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactCTA from '../../components/ContactCTA/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ImageSlider />
      <SalesServices />
      <OtherProducts />
      <WhyChooseUs />
      <ClientsSlider />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
