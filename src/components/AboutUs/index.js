import React from "react";
import "./index.css";

import beauty4 from "../../assets/img/massage.png";

function AboutUs() {
  return (
    <main className="Main">
      <div className="About__title">
        <h1 className="About__titleText">Про нас</h1>
      </div>
      <div className="AboutUs__container">
        <div className="Main__services Main__feedback-img services4">
          <div className="Main__service-img">
            <img
              src={beauty4}
              alt="service-img"
              className="About__service-img large"
            />
          </div>
        </div>
        <div className="Main__services services5">
          <div className="Main__feedback">
            <div className="About__feedback-User">
              <div className="Main__feedback-textBox">
                <div className="About__feedback-title">
                  Ваш партнер у світі краси !
                </div>
                <div className="Main__feedback-text">
                  Ми пропонуємо широкий спектр косметологічних послуг,
                  спрямованих на покращення вашої зовнішності та самопочуття.
                  Наша команда кваліфікованих фахівців використовує сучасні
                  методи та технології для досягнення найкращих результатів. Від
                  процедур для догляду за шкірою обличчя до лазерної епіляції та
                  ін'єкційних процедур, ми стежимо за вашою красою та здоров'ям
                  з найбільшою увагою до деталей.
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-text">
                  Наша команда - це група висококваліфікованих косметологів, які
                  мають багаторічний досвід у сфері краси та дерматології. Ми
                  пишаємося нашими спеціалістами, які постійно підвищують свою
                  кваліфікацію і віддані надавати вам найкращий догляд та поради
                  щодо вашого вигляду.
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-text">
                  Наш центр косметології працює вже багато років, і ми маємо
                  успішний трек-рекорд у досягненні вражаючих результатів для
                  наших клієнтів. Ми використовуємо тільки передові методики та
                  продукти, які пройшли клінічні випробування, щоб гарантувати
                  найвищу якість наших послуг.
                </div>
              </div>
              <div className="Main__feedback-textBox">
                <div className="Main__feedback-text">
                  Ми прагнемо допомогти вам відкрити свою найкращу версію та
                  почуватися впевнено в своїй шкірі. Наша мета - забезпечити вас
                  знаннями, послугами та доглядом, які допоможуть вам досягти і
                  підтримувати гармонійний та здоровий вигляд. Ми завжди
                  відкриті до співпраці та готові допомогти вам в кожному кроці
                  вашого шляху до краси і самовиразу.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
