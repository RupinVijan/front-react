import React from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Rentaproperty from '../Components/Rentaproperty/Rentaproperty'
import HeroIMG from "../files/images/final-curousal@4x.png"
import '../files/old/tenant form/tenform.css'

export default function RentProperty() {
  return (
      <>
        <Navbar />
        <Hero imgg={HeroIMG} />
        <Rentaproperty />
        <Footer />
      </>
  );
}
