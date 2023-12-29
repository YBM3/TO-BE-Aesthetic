import React from "react";
import "./index.css";

import beauty1 from "../../assets/img/AUdCPp28Qw9V8fH6CyzCD-transformed 1.png";
import beauty2 from "../../assets/img/stock-photo-cosmetologist-makes-rejuvenation-injection-in-woman-face-skin-anti-aging-revitalization-cosmetic-2248174367 1 (1).png";
import beauty3 from "../../assets/img/free-photo-of-hands-of-a-masseur-wrapping-a-leg 1.png";
import beauty4 from "../../assets/img/image 17.png";

function Main() {
  return (
    <main className="Main">
      <div className="Main__container">
        <div className="Main__title">
          <h1 className="Main__titleText">Послуги</h1>
          <span className="Main__titleText1">“Ми прагнемо розкривати і</span>
          <span className="Main__titleText2">
            підкреслювати вашу природну красу”
          </span>
        </div>
        <div className="Main__services services1">
          <div className="Main__service-img">
            <img
              src={beauty1}
              alt="service-img"
              className="Main__service-img"
            />
            <h2 className="Main__service-title">Естетична косметологія</h2>
            <span className="Main__service-text">
              Пілінги, та догляд за шкірою,
            </span>
            <span className="Main__service-text">
              Чистка шкіри, масаж обличчя
            </span>
          </div>
        </div>
        <div className="Main__services services2">
          <div className="Main__service-img">
            <img
              src={beauty2}
              alt="service-img"
              className="Main__service-img"
            />
            <h2 className="Main__service-title">Інʼєкційна косметологія</h2>
            <span className="Main__service-text">
              Мезотерапія обличчя, та біоревіталізація
            </span>
            <span className="Main__service-text">
              Біорепарація Контурна пластика
            </span>
            <span className="Main__service-text">
              Ботулінотерапія, бланшинг
            </span>
          </div>
        </div>
        <div className="Main__services services3">
          <div className="Main__service-img">
            <img
              src={beauty3}
              alt="service-img"
              className="Main__service-img"
            />
            <h2 className="Main__service-title">
              Спа процедури і
              <br />
              програми схуднення
            </h2>
            <span className="Main__service-text">
              Масаж тіла, і обгортування
            </span>
          </div>
        </div>
        <div className="Main__services Main__feedback-img services4">
          <div className="Main__service-img">
            <img
              src={beauty4}
              alt="service-img"
              className="Main__service-img large"
            />
          </div>
        </div>
        <div className="Main__services services5">
          <div className="Main__feedback">
            <div className="Main__feedback-title">Відгуки від клієнтів</div>
            <div className="Main__feedback-User">
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-textName">Марія</div>
                <div className="Main__feedback-text">
                  "Завдяки центру краси, я відчуваю себе справжньою зіркою! Їхня
                  команда косметологів не лише надає найкращі послуги для шкіри,
                  але і завжди працює з індивідуальним підходом до кожного
                  клієнта. Результати просто неймовірні, і я завжди залишаюся
                  задоволеною і впевненою у своєму вигляді!"
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-textName">Світлана</div>
                <div className="Main__feedback-text">
                  "Цей центр став для мене справжньою оазою краси та релаксації.
                  Послуги тут настільки розносторонні та професійні, що я
                  відчуваю, ніби мене перетворено на нову людину після кожного
                  відвідування. Вони дійсно знають, як робити свою роботу!"
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-textName">Софія</div>
                <div className="Main__feedback-text">
                  "Я завжди з нетерпінням очікую своїх візитів до цього
                  косметологічного центру. Вони надають широкий спектр послуг, і
                  кожна з них - це чиста магія для моєї шкіри і душі. Тут мене
                  завжди зустрічають посмішкою та готовністю допомогти мені
                  виглядати і відчувати себе найкраще."
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-textName">Олексій</div>
                <div className="Main__feedback-text">
                  "Я вдячний центру за те, що вони зробили для моєї шкіри. Вони
                  розуміють, що потрібно моїй шкірі, і завжди працюють з нею із
                  захопленням. Після процедур тут я виглядаю молодше і свіжіше,
                  і це завдяки їхній дбайливості та експертності."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
