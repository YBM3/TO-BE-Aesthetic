import React from "react";
import "./index.css";

function HeaderSectionServices() {
  return (
    <section className="header_section_services">
      <div className="header_section_services__container">
        <div className="header_section_services__textBox">
          <h1 className="header_section_services__title">
            Відкрийте красу в собі
          </h1>
          <p className="header_section_services__subtitle">
            з найкращими фахівцями !
          </p>
        </div>
        <a href="#ContactUs" className="header_section_services__button">
          <span className="header_section_services__buttonText">
            Записатись
            <br />
            на прийом
          </span>
        </a>
      </div>
    </section>
  );
}

export default HeaderSectionServices;
