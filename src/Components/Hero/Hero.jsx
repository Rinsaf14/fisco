/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Jauh di Mata, Sulit di Akses</h1>
        <p>
          Tantangan Masyarakat Perbatasan Barru-Parepare dalam Menggapai Layanan Publik
        </p>
        <a href="#testimonials" className="btn">
  Explore more <img src={dark_arrow} alt="" />
</a>

      </div>
    </div>
  );
};

export default Hero;
