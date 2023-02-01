import React from "react";
import "./mainContent.css";
export default function Advantages() {
  return (
    <section className="advantages">
      <div className="wrapper">
        <div className="advatages_title title">Наші переваги</div>
        <div className="advantages_content">
          <div className="advantages_card">
            <div className="ad_card_img"></div>
            <div className="ad_card_description">
              <div className="ad_card_label">Все в одному сервісі</div>
              <div className="ad_card_text">
                Вам більше не доведеться працювати у 3-4 сервісах одночасно, щоб
                закрити свої потреби. Moow - це вся товарно-транспортна
                діяльність у три кліка.
              </div>
            </div>
          </div>
          <div className="advantages_card">
            <div className="ad_card_img"></div>
            <div className="ad_card_description">
              <div className="ad_card_label">
                Повний контроль бізнес процесів
              </div>
              <div className="ad_card_text">
                Вся аналітика та документація в одному сервісі. Платформа надає
                повноту даних, починаючи від документації, аналітики продажів,
                закінчуючи відстеженням вантажу по GPS прямо на мапі.
              </div>
            </div>
          </div>
          <div className="advantages_card reverse_card">
            <div className="ad_card_img"></div>
            <div className="ad_card_description">
              <div className="ad_card_label">Верифіковані учасники</div>
              <div className="ad_card_text">
                Ви можете бути впевненими у надійності учасників платформи.
                Будь-яка людина, яка надає послуги, проходить декілька видів
                верифікації. Також платформа веде публічну історію діяльності та
                надає рейтингову систему.
              </div>
            </div>
          </div>
          <div className="advantages_card reverse_card">
            <div className="ad_card_img"></div>
            <div className="ad_card_description">
              <div className="ad_card_label">Простота</div>
              <div className="ad_card_text">
                Не дивлячись на різноманітність функціоналу, користуватися
                сервісом дуже просто. Ви можете замовити товар чи послугу
                напряму, або через чат з продавцем.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
