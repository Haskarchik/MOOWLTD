import React from "react";
import "./mainContent.css";

export default function () {
  return (
    <section className="exist">
      <div className="wrapper">
        <div className="exist_content">
          <div className="exist_left_part">
            <div className="exist_title title">Для кого ми існуємо</div>
            <ul className="exist_list">
              <li>Для користувачів із різних сфер бізнесу.</li>
              <li>Для оптових та роздрібних покупців та продавців.</li>
              <li>Для дрібного та середнього бізнесу.</li>
              <li>Для фермера, водія трактора та великих виробників.</li>
              <li>Для тих, хто цінує час та прибуток.</li>
            </ul>
          </div>
          <div className="exist_right_part">
            <div className="exist_left_words">
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo"></div>
              <div className="w last_word"></div>
            </div>
            <div className="exist_offer">
              <div className="offer_title">
                Спробуй прямо зараз через браузер!
              </div>
              <button className=" offer_button">Перейти до веб-версії </button>
              <div className="offer_title">
                Або завантажуй та спробуй з смартфону
              </div>
              <div className="ofer_download_buttons">
                <a href="#">
                  <div className="google_play"></div>
                </a>
                <a href="#">
                  <div className="app_store"></div>
                </a>
              </div>
            </div>
            <div className="exist_right_words">
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo"></div>
              <div className="w last_word"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
