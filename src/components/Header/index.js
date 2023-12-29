import React, { useState } from "react";
import "./index.css";

import logo from "../../assets/img/Logo.png";
import ServicesPopUp from "../ServicesPopUp";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isServicesPopUpOpen, setIsServicesPopUpOpen] = useState(false);

  const location = useLocation();

  const handleServicesClick = (event) => {
    event.preventDefault();
    setIsServicesPopUpOpen(true);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logoBox">
          <div className="header__logo">
            <img src={logo} alt="Logo" className="header__logoImg" />
          </div>
          <span className="header__logoText">TO BE Aesthetic</span>
        </Link>
        <div className="header__nav">
          <ul className="header__navList">
            <li className="header__navItem">
              <Link
                to="/services"
                className={`header__navLink ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                Послуги
              </Link>
            </li>
            <li className="header__navItem">
              <a
                href="/"
                className={`header__navLink ${
                  isServicesPopUpOpen ? "active" : ""
                }`}
                onClick={handleServicesClick}
              >
                Ціни
              </a>
            </li>
            <li className="header__navItem">
              <Link
                to="/aboutUs"
                className={`header__navLink ${
                  location.pathname === "/aboutUs" ? "active" : ""
                }`}
              >
                Про нас
              </Link>
            </li>
            <li className="header__navItem">
              <a href="/" className="header__navLink">
                Запис на прийом
              </a>
            </li>
          </ul>
        </div>

        <ServicesPopUp
          closePopup={() => setIsServicesPopUpOpen(false)}
          isServicesPopUpOpen={isServicesPopUpOpen}
        />
      </div>
    </header>
  );
}

export default Header;
