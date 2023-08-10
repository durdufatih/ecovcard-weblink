import React from "react";
import "./BusinessCard.css";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMobile,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";

function save() {
  const fileData = `BEGIN:VCARD
VERSION:4.0
N:Fatih Durdu;
FN:Fatih Durdu
ORG:Software Co.
TITLE:Software Engineer
TEL;TYPE#work,voice;VALUE#uri:tel:+905423875430
TEL;TYPE#home,voice;VALUE#uri:tel:+905307746114
ADR;TYPE#WORK;PREF#1;LABEL#"Normality\nYeni, Sait Girgin Cd., 34570 Silivri/İstanbul
EMAIL:mfdurdu@gmail.com
REV:20080424T195243Z
x-qq:21588891
END:VCARD
  `;

  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "user-info.vcf";
  link.href = url;
  link.click();
}
const BusinessCard = ({
  backgroundImage,
  logo,
  name,
  title,
  telephone,
  phone,
}) => {
  return (
    <div className="business-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="logo">
        <img src={logo} alt="Logo" className="half-logo" />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
      </div>

      <section className="detail-container">
        <div className="detail">
          <div className="item">
            <div className="icon">
              <FaMobile />
            </div>
            <a className="value" href="tel:+905423875430">
              +905423875430
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <a className="value" href="tel:+902127653456">
              {" "}
              02127653456
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <a className="value" href="mailto:mfdurdu@gmail.com">
              {" "}
              mfdurdu@gmail.com
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaHome />
            </div>
            <a className="value" href="https://www.google.com.tr">
              {" "}
              fatihdurdu.com
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaFacebookSquare />
            </div>
            <a className="value" href="https://www.facebook.com.tr">
              {" "}
              Facebook
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaTwitterSquare />
            </div>
            <a className="value" href="https://www.tiwtter.com">
              {" "}
              Twitter
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaLinkedin />
            </div>
            <a className="value" href="https://www.linkedin.com">
              {" "}
              Linkedin
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaInstagram />
            </div>
            <a className="value" href="https://www.instagram.com">
              {" "}
              Instagram
            </a>
          </div>

          <button className="saveButton" onClick={save}>
            Kaydet
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessCard;
