import React, { useRef } from "react";

export default function Question(props) {
  const show = useRef()
  if(props.show){
    show.current='show'
  }else{
    show.current=' '
  }
  return (
    <section className={"question " + show.current}>
      <div className="wrapper">
        <div className="question_content">
          <div className="title">Залишились запитання?</div>
          <div className="question_content_subtitle">
            Перейди на сторінку FAQ, там є відповіді на часті запитання. А якщо
            все ж не знайшдеш відповіді на запитання, звернись до нашого
            чат-боту!
          </div>
          <div className="question_buttons">
            <a className="go_faq" href="#">Перейди до FAQ</a>
            <a className="go_bot" href="#">Написати через чат-бот</a>
          </div>
          <div className="question_text">
            Середній час відповіді у чат-боті в робочий час (понеділок –
            п'ятниця, з 10:00 до 18:00) – 2 години. При високому завантаженні
            термін очікування відповіді може бути збільшено. У вихідні дні ми
            відповідаємо протягом доби.
          </div>
        </div>
      </div>
    </section>
  );
}
