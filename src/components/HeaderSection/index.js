import React from "react";
import "./index.css";

function HeaderSection() {
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
        <a href="#ContactUs" className="header_section__button">
          <span className="header_section__buttonText">
            Записатись
            <br />
            на прийом
          </span>
        </a>
      </div>
    </section>
  );
}

export default HeaderSection;
