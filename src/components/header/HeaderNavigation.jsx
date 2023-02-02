import React, { useState } from "react";
import headerStyle from "../header/header.module.css";

const HeaderNavigation = () => {
  const [langOpen, setlangOpen] = useState(false);
  const [lang, setLang] = useState("Укр");

  function setUaLanguages() {
    setLang("Укр");
  }
  function setEngLanguages() {
    setLang("Eng");
  }

  function languages() {
    setlangOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className={headerStyle.navigation}>
        <div>
          <a href="#">
            <img
              className={headerStyle.logo}
              src="/image/icons/logo.png"
              alt=""
            />
          </a>
        </div>

        <ul className={headerStyle.nav_list}>
          <a href="#">
            <li>Про сервіс</li>
          </a>
          <a href="#">
            <li>Команда</li>
          </a>
          <a href="#">
            <li>FAQ</li>
          </a>
        </ul>
        <button className={headerStyle.button}>До веб-версії MOOW</button>

        <div className={ langOpen?  headerStyle.nav_languages_active:headerStyle.nav_languages  } onClick={languages}>
          {lang}
          {langOpen && (
            <div className={headerStyle.nav_languages_block}>
              <div
                className={headerStyle.nav_languages_ua}
                onClick={setUaLanguages}
              >
                Укр
              </div>
              <div
                className={headerStyle.nav_languages_eng}
                onClick={setEngLanguages}
              >
                Eng
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
