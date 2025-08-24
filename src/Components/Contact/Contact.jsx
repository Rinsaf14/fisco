/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6750ec5-d104-4da7-9c12-b31170f02898");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Tulis pesan untuk saya <img src={msg_icon} alt="" />
        </h3>
        <p>
          Website ini saya buat untuk berbagi cerita tentang panjangnya perjalanan masyarakat perbatasan Barru menuju layanan publik. Jika kamu punya pesan, saran, atau sekadar ingin berbagi pandangan, silakan kirimkan melalui form di samping.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            ririnsaf14@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +62 878 5333 9921
          </li>
          <li>
            <img src={location_icon} alt="" />
            Lingkungan Banrongnge, Kelurahan Bojo Baru, Kecamatan Mallusetasi, Kab. Barru
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nama Kamu</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Nomor Telepon</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Tulis pesan atau harapanmu di sini...</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Kirim<img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
