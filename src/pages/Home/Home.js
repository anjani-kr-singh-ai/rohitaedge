import React from 'react';
import Hero from '../../components/Hero/Hero';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import SalesServices from '../../components/SalesServices/SalesServices';
import OtherProducts from '../../components/OtherProducts/OtherProducts';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import ClientsSlider from '../../components/ClientsSlider/ClientsSlider';
import ContactCTA from '../../components/ContactCTA/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ImageSlider />
      <SalesServices />
      <OtherProducts />
      <WhyChooseUs />
      <Testimonials />
      <ClientsSlider />
      <ContactCTA />
    </>
  );
};

export default Home;
