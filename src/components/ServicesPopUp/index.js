import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import cross from "../../assets/img/Vector 1.svg";
import arrow from "../../assets/img/Vector 3.svg";

import AestheticCosmetology from "../AestheticCosmetology";
import InjectionCosmetologyPart1 from "../InjectionCosmetologyPart1";
import InjectionCosmetologyPart2 from "../InjectionCosmetologyPart2";
import InjectionCosmetologyPart3 from "../InjectionCosmetologyPart3";
import InjectionCosmetologyPart4 from "../InjectionCosmetologyPart4";
import SpaProcedures from "../SpaProcedures";

function ServicesPopUp({ closePopup, isServicesPopUpOpen, setIsPopupOpen }) {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(null);
  const [direction, setDirection] = useState(null);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);

  const tabs = [
    <AestheticCosmetology />,
    <InjectionCosmetologyPart1 />,
    <InjectionCosmetologyPart2 />,
    <InjectionCosmetologyPart3 />,
    <InjectionCosmetologyPart4 />,
    <SpaProcedures />,
  ];

  const onCircleClick = (index) => {
    if (index === activeTab) {
      return;
    }

    setDirection(index > activeTab ? "Right" : "Left");
    setPrevTab(activeTab);
    setActiveTab(index);
  };

  const onNextClick = () => {
    setDirection("Right");
    setPrevTab(activeTab);
    setActiveTab((activeTab + 1) % tabs.length);
  };

  const onBackClick = () => {
    setDirection("Left");
    setPrevTab(activeTab);
    setActiveTab((activeTab - 1 + tabs.length) % tabs.length);
  };

  return (
    <section
      className="ServicesPopUp"
      ref={popupRef}
      style={{
        height: isServicesPopUpOpen ? "1005px" : "0px",
        transition: "height 0.5s ease-in-out",
      }}
    >
      <div className="ServicesPopUp__container">
        <div className="ServicesPopUp__servicesTabs">
        <div className="ServicesPopUp__close" onClick={() => { closePopup(); setIsPopupOpen(false); }}>            <img
              className="ServicesPopUp__img"
              src={cross}
              alt="ServicesPopUp"
              border="0"
            />
          </div>
          <div className="ServicesPopUp__buttonBack" onClick={onBackClick}>
            <div className="ServicesPopUp__button">
              <img src={arrow} alt="ServicesPopUp" border="0" />
            </div>
          </div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`ServicesPopUp__circle ${
                activeTab === index ? "circle_active" : ""
              }`}
              onClick={() => onCircleClick(index)}
            ></div>
          ))}
        </div>
        <div className="ServicesPopUp__tabs">
          <div className="ServicesPopUp__tabsContent">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`ServicesPopUp__tab ${
                  activeTab === index
                    ? `active slideIn${direction}`
                    : prevTab === index
                    ? `prev slideOut${direction}`
                    : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="ServicesPopUp__buttonNext" onClick={onNextClick}>
            <div className="ServicesPopUp__button">
              <img src={arrow} alt="ServicesPopUp" border="0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPopUp;
