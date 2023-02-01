import React from "react";

const AppOrWeb = () => {
  return (
    <section className="app_or_web">
      <div className="wrapper">
        <div className="app_or_web_contet">
          <div className="app_or_web_title">
            Завантажуйте додаток або працюйте через браузер
          </div>
          <div className="app_or_web_subtitle">
            Весь функціонал доступний у двох форматах. Працюйте через телефон
            або на комп’ютері.
          </div>
          <div className="app_or_web_buttot_web">
            <a href="">Почати працювати через браузер </a>
          </div>
          <div className="app_or_web_app">
            <a className="app_or_web_buttot_app" href="">
              Завантажити додаток з Google Play
            </a>
            <a className="app_or_web_buttot_app" href="">
              Завантажити додаток з App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOrWeb;
