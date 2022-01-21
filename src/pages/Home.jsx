import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Testimonial from "../Components/Testimonial/Testimonial"
import "../files/old/home/home.css"
import Hero from '../Components/Hero/Hero'
import HeroIMG from '../files/images/herooo.png'
import Service from '../Components/Service/Service'
import ContactUs from '../Components/Contactus/Contactus'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return(
      <>
        <Navbar />
        <Hero imgg={HeroIMG} />
        <Service />
        <Testimonial />
        <ContactUs />
        <Footer />
      </>
  );
}
