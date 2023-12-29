import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";

import pin from "../../assets/img/pin.svg";

function ContactUs() {
  const defaultCenter = [50.48351944181224, 30.45870294886363];
  const defaultZoom = 16;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setPhoneTouched(true);
    if (name && phone) {
      setIsSubmitted(true);
    }
  };

  const pinIcon = L.icon({
    iconUrl: pin,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <section className="ContactUs">
      <div className="ContactUs__container">
        <div className="ContactUs__map">
          <MapContainer center={defaultCenter} zoom={defaultZoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              style={{
                width: "560px",
                height: "560px",
              }}
            />
            <Marker position={defaultCenter} icon={pinIcon} />
          </MapContainer>
        </div>
        <div className="ContactUs__contacts">
          <div className="ContactUs__contacts__title">Зв’яжіться з нами !</div>

          <form className="ContactUs__contacts__form" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="ContactUs__contacts__confirmation">
                <div className="ContactUs__contacts__confirmation__container">
                  <span className="ContactUs__contacts__confirmation__text">
                    Дякую
                  </span>
                  <span className="ContactUs__contacts__confirmation__subtext">
                    Ваші дані були збережені успішно
                  </span>
                </div>
              </div>
            ) : (
              <div className="ContactUs__contacts__inputBox">
                <div className="ContactUs__contacts__input">
                  <label htmlFor="name">Ім’я</label>
                  <input
                    type="text"
                    placeholder="Наталія*"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameTouched(false);
                    }}
                    className={nameTouched && !name ? "red" : ""}
                  />
                </div>
                <div className="ContactUs__contacts__input">
                  <label htmlFor="phone">Номер телефону</label>
                  <input
                    type="text"
                    placeholder="+380-11-111-1111*"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneTouched(false);
                    }}
                    className={phoneTouched && !phone ? "red" : ""}
                  />
                </div>
              </div>
            )}
            <div className="ContactUs__contacts__textBox">
              <span className="ContactUs__contacts__text">
                Слідкуйте за новинами естетичного догляду
                <br />в нашому Instagram!
              </span>
            </div>
            <button
              type="submit"
              className="contactUs__button header_section__button "
            >
              <sppan className="contactUs__buttonText header_section__buttonText">
                Записатись
                <br />
                на прийом
              </sppan>
            </button>
          </form>
        </div>
      </div>
      <div className="ContactUs__social">
        <div className="ContactUs__social__title">
          Або зв’яжіться з нами через месенджер:
        </div>
        <div className="ContactUs__social__buttonsBox">
          <div className="ContactUs__social__button">
            <span>Telegram</span>
          </div>
          <div className="ContactUs__social__button">
            <span>WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
