import React, { useState } from "react";
import "./index.css";

import SkinCareList from "../SkinСareList";

import skinCareData from "../../Data/services/SkinCareData.json";
import SpaProceduresData from "../../Data/services/SpaProceduresData.json";
import InjectionCosmetologyData from "../../Data/services/InjectionCosmetologyData.json";

function Services() {
  const [menuOpen, setMenuOpen] = useState({
    skinCareList: false,
    injection: false,
    spa: false,
  });

  const handleMenuClick = (menu) => {
    setMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
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
                  onClick={() => handleMenuClick("skinCareList")}
                >
                  Естетична косметологія
                </h1>
              </div>
            </div>
            <SkinCareList
              data={skinCareData}
              isMenuOpen={menuOpen.skinCareList}
            />
          </div>
          <div className="services__content_itemBox">
            <div className="services__content_item">
              <div className="services__content_item__title">
                <h1
                  className="services__content_item__titleText"
                  onClick={() => handleMenuClick("injection")}
                >
                  Інʼєкційна косметологія
                </h1>
              </div>
            </div>
            <SkinCareList
              data={InjectionCosmetologyData}
              isMenuOpen={menuOpen.injection}
            />
          </div>
          <div className="services__content_itemBox">
            <div className="services__content_item">
              <div className="services__content_item__title">
                <h1
                  className="services__content_item__titleText"
                  onClick={() => handleMenuClick("spa")}
                >
                  Спа процедури і програми схуднення
                </h1>
              </div>
            </div>
            <SkinCareList data={SpaProceduresData} isMenuOpen={menuOpen.spa} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
