/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h2>Harapan Masyarakat Perbatasan Barru</h2>
        <p>
          Setiap perjalanan menuju layanan publik bagi masyarakat perbatasan Barru bukan sekadar menempuh jarak, tetapi juga melintasi waktu, tenaga, dan biaya yang tidak sedikit. Bagi sebagian orang, jarak 45 km hanyalah angka, namun bagi kami, itu adalah pengorbanan setiap kali ada urusan mendesak.
        </p>
        <p>
          Kami berharap, di masa depan layanan publik dapat hadir lebih dekat, mudah, dan merata. Bukan hanya di pusat kota, tetapi juga menjangkau desa-desa yang jauh di ujung batas kabupaten.
        </p>
        <p>
          Semoga dengan hadirnya solusi digital dan pemerataan pembangunan, tidak ada lagi warga yang merasa jauh dari hak dasarnya untuk mendapatkan pelayanan.
        </p>
      </div>
    </div>
  );
};

export default About;
