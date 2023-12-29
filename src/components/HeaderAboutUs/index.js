import React from "react";
import "./index.css";

function HeaderAboutUs() {
  return (
    <section className="header_section">
      <div className="header_section__container">
        <div className="header_section__textBox">
          <h1 className="header_section__title">
            Косметологічний центр TO BE Aesthetic
          </h1>
          <p className="header_section__subtitle">
            Гармонія зовнішності та самочуття з кожним візитом!
          </p>
        </div>
        <div className="header_section__button">
          <span className="header_section__buttonText">
            Записатись
            <br />
            на прийом
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeaderAboutUs;
