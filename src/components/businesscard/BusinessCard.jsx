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

const makeVCardVersion = () => `VERSION:3.0`;
const makeVCardInfo = (info) => `N:${info}`;
const makeVCardName = (name) => `FN:${name}`;
const makeVCardOrg = (org) => `ORG:${org}`;
const makeVCardTitle = (title) => `TITLE:${title}`;
const makeVCardPhoto = (img) => `PHOTO;TYPE=JPEG;ENCODING=b:[${img}]`;
const makeVCardLogo = (img) => `LOGO;TYPE=PNG:${img}`;
const makeVCardTel = (phone) => `TEL;TYPE=WORK,VOICE:${phone}`;
const makeVCardTelGSM = (phone) => `TEL;TYPE=GSM,VOICE:${phone}`;
const makeVCardAdr = (address) => `ADR;TYPE=WORK,PREF:;;${address}`;
const makeVCardEmail = (email) => `EMAIL:${email}`;
const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

const save = (cardItem) => {
  let vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardInfo(cardItem.description)}
${makeVCardName(cardItem.title)}
${makeVCardOrg(cardItem.ownerId)}
${makeVCardTitle(cardItem.description)}
${makeVCardPhoto(cardItem.selectedLogoUrl)}
${makeVCardLogo(cardItem.selectedLogoUrl)}
${makeVCardTel(cardItem.phoneNumber)}
${makeVCardTelGSM(cardItem.gsmNumber)}
${makeVCardAdr(cardItem.address)}
${makeVCardEmail(cardItem.emailAddress)}
${makeVCardTimeStamp()}
END:VCARD`;
  /*const fileData = `BEGIN:VCARD
VERSION:4.0
N:Fatih Durdu;
FN:Fatih Durdu
ORG:Software Co.
TITLE:Software Engineer
TEL;Work;VALUE#uri:tel:+905423875430
TEL;Home;VALUE#uri:tel:+905307746114
ADR;Work;PREF#1;LABEL#"Normality\nYeni, Sait Girgin Cd., 34570 Silivri/Istanbul
EMAIL:mfdurdu@gmail.com
REV:20080424T195243Z
x-qq:21588891
END:VCARD
  `;*/
  console.log(vcard);

  const blob = new Blob([vcard], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "user-info.vcf";
  link.href = url;
  link.click();
};
const BusinessCard = ({ card }) => {
  return (
    <div className="business-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${card.selectedImageUrl})` }}
      ></div>
      <div className="logo">
        <img src={card.selectedLogoUrl} alt="Logo" className="half-logo" />
      </div>
      <div className="info" style={{ backgroundColor: card.backgroundTitle }}>
        <div style={{ width: "100%" }}>
          <h2 className="name">{card.title}</h2>
        </div>
        <div style={{ width: "100%" }}>
          <p className="title">{card.description}</p>
        </div>
      </div>
      <button className="saveButton" onClick={()=>save(card)}>
        Kaydet
      </button>
      <section className="detail-container">
        <div className="detail">
          <div className="item">
            <div className="icon">
              <FaMobile />
            </div>
            <a className="value" href={"tel:" + card.gsmNumber}>
              {card.gsmNumber}
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <a className="value" href={"tel:" + card.phoneNumber}>
              {card.phoneNumber}
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <a className="value" href={"mailto:" + card.emailAddress}>
              {card.emailAddress}
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <FaHome />
            </div>
            <a className="value" href={card.websiteURL}>
              {card.websiteURL}
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
        </div>
      </section>
    </div>
  );
};

export default BusinessCard;
