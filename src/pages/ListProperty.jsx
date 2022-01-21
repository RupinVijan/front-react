import React from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import ListYourProperty from '../Components/Listyourproperties/Listtyourproperties'
import HeroIMG from "../files/images/final-curousal@4x.png"

export default function ListProperty() {
  return (
      <>
        <Navbar />
        <Hero imgg={HeroIMG}/>
        <ListYourProperty />
        <Footer />
      </>
  );
}
