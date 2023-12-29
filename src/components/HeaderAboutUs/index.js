import React from "react";
import "./index.css";

function HeaderAboutUs() {
  return (
    <section className="header_section">
      <div className="headerAboutUs_section__container">
        <div className="header_section__textBox">
          <h1 className="headerAboutUs_section__title">Ваша краса -</h1>
          <p className="headerAboutUs_section__subtitle">
            наше мистецтво, наша майстерність
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

export default HeaderAboutUs;
