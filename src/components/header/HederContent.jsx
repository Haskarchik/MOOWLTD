import React from "react";
import headerStyle from "../header/header.module.css";

const HederContent = () => {
  return (
    <section className={headerStyle.seaction}>
      <div className={headerStyle.title}>
        <h2>Весь агро-транспортний ринок в одному сервісі</h2>
          <p>
            Платформа для фермерів, перевізників, промислових та торгових
            компаній.
          </p>
      </div>
      <div className={headerStyle.seaction_buttons}>
        <div>
          <button className={headerStyle.header_button}>
            Перейти до веб-версії
          </button>
        </div>
        <div>
          <button className={headerStyle.header_black_button}>
            Завантажити додаток на смартфон
          </button>
        </div>
      </div>
    </section>
  );
};

export default HederContent;
