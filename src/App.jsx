/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Kisah Nyata" />
        <Testimonials />
        <Title subTitle="Peta" title="Perjalanan Panjang Menuju Layanan Publik" />
        <Campus />
        <About />
        <Title subTitle="Sampaikan Suaramu" title="Mari Berbagi Cerita & Harapan" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
