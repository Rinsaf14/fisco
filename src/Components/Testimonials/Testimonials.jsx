/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide"> 
              <p>
                Masyarakat Kelurahan Bojo Baru di perbatasan 
                Barru harus menempuh perjalanan lebih dari 
                45 km menuju layanan publik terdekat. Panjangnya
                jarak ini menjadi tantangan tersendiri, terutama bagi 
                mereka yang membutuhkan layanan mendesak.
              </p>
            </div>
          </li>
          <li>
            <div className="slide"> 
              <p>
                Pada pengurusan beasiswa, saya harus 
                menempuh perjalanan jauh ke Dinas Pendidikan. 
                Sesampainya di sana, saya hanya menyerahkan 
                map berkas, lalu harus pulang lagi tanpa proses berarti. 
                Perjalanan yang melelahkan terasa sia-sia. 
                Seandainya layanan publik tersedia lebih dekat, waktu, 
                tenaga, dan biaya masyarakat bisa dihemat.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <p>
                Saya masih ingat betul ketika harus 
                mengurus SKCK untuk melamar pekerjaan. 
                Dari kampung di perbatasan Barru, 
                saya menempuh perjalanan panjang menuju 
                kantor polisi di kota.Panas terik dan ongkos yang tak sedikit 
                saya relakan demi sebuah dokumen penting.
                Namun itu sirna karena polisi yang bertugas
                tidak berada di tempat dan saya diminta datang esok.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
