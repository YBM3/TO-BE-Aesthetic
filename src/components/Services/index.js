import React, { useState } from "react";
import "./index.css";

import SkinCareList from "../SkinСareList";
import InjectionCosmetologyList from "../InjectionCosmetologyList";
import SpaProceduresLsit from "../SpaProceduresList";

function Services() {
  const [isMenuOpenSkinCareList, setIsMenuOpenSkinCareList] = useState(false);
  const [isMenuOpenInjection, setIsMenuOpenInjection] = useState(false);
  const [isMenuOpenSpa, setIsMenuOpenSpa] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpenSkinCareList(!isMenuOpenSkinCareList);
  };

  const handleMenuClickInjection = () => {
    setIsMenuOpenInjection(!isMenuOpenInjection);
  };

  const handleMenuClickSpa = () => {
    setIsMenuOpenSpa(!isMenuOpenSpa);
  };

  return (
    <div className="services">
      <div className="services__container">
        <div className="services__Title">
          <h1 className="services__TitleText">Послуги</h1>
        </div>
        <div className="services__content">
          <div className="services__content_itemBox">
            <div className="services__content_item">
              <div className="services__content_item__title">
                <h1
                  className="services__content_item__titleText"
                  onClick={handleMenuClick}
                >
                  Естетична косметологія
                </h1>
              </div>
            </div>
            <SkinCareList isMenuOpen={isMenuOpenSkinCareList} />
          </div>
          <div className="services__content_itemBox">
            <div className="services__content_item">
              <div className="services__content_item__title">
                <h1
                  className="services__content_item__titleText"
                  onClick={handleMenuClickInjection}
                >
                  Інʼєкційна косметологія
                </h1>
              </div>
            </div>
            <InjectionCosmetologyList isMenuOpen={isMenuOpenInjection} />
          </div>
          <div className="services__content_itemBox">
            <div className="services__content_item">
              <div className="services__content_item__title">
                <h1
                  className="services__content_item__titleText"
                  onClick={handleMenuClickSpa}
                >
                  Спа процедури і програми схуднення
                </h1>
              </div>
            </div>
            <SpaProceduresLsit isMenuOpen={isMenuOpenSpa} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
