/* eslint-disable no-unused-vars */
import React from "react";
import "./Campus.css";
import mapImage from "../../assets/PETA LOMBA.jpg"; 
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={mapImage} alt="Landscape Map" className="map-image" />
      </div>
      {/* Tombol download otomatis */}
      <a href={mapImage} download="PETA-LOMBA.jpg" className="btn dark-btn">
        See more here <img src={white_arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default Campus;
