import React from "react";
import "./index.css";

import instagram from "../../assets/img/mdi_instagram.svg";
import telegram from "../../assets/img/mingcute_telegram-line.svg";
import whatsapp from "../../assets/img/ic_baseline-whatsapp.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">
          Copyright © 2022 TO BE Aesthetic. All rights reserved.
        </div>
        <div className="footer__contacts">
          <a
            className="footer__contacts__button"
            href="mailto:to_be_aesthetic@gmail.com"
          >
            to_be_aesthetic@gmail.com
          </a>
          <div className="footer__contacts__social">
            <img src={instagram} alt="instagram" />
            <img src={telegram} alt="telegram" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
