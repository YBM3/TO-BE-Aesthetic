import React from "react";
import "./index.css";
import servicesData from "../../Data/services/InjectionCosmetologyPart3.json";

function InjectionCosmetologyPart3() {
  return (
    <>
      <div className="AestheticCosmetology__textBox">
        <h1 className="AestheticCosmetology__title">{servicesData.title}</h1>
      </div>
      <div className="AestheticCosmetology__content">
        <div className="AestheticCosmetology__services_list">
          <div className="AestheticCosmetology__services__container">
            {servicesData.services.map((service) => (
              <>
                <div
                  className={`AestheticCosmetology__services ${service.size}`}
                >
                  <div className="AestheticCosmetology__servicesTitile">
                    {service.title}
                  </div>
                  <div className="AestheticCosmetology__servicesContainer">
                    {service.items.map((item) => (
                      <div className="AestheticCosmetology__servicesBox">
                        <span className="AestheticCosmetology__servicesText">
                          {item.text}
                        </span>
                        <span className="AestheticCosmetology__price">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InjectionCosmetologyPart3;
