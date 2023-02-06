import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderNavigation = () => {
  const [langOpen, setlangOpen] = useState(false);
  const [lang, setLang] = useState("Укр");
  const { t, i18n } = useTranslation();

  function setUaLanguages() {
    if (lang !== "Укр") {
      document.querySelector(".App").classList.add("translation");
      setTimeout(() => {
        i18n.changeLanguage("ua");
        setTimeout(() => {
          document.querySelector(".App").classList.remove("translation");
        }, 100);
      }, 200);
      setLang("Укр");
    }
  }
  function setEngLanguages() {
    if (lang !== "Eng") {
      document.querySelector(".App").classList.add("translation");
      setTimeout(() => {
        i18n.changeLanguage("eng");
        setTimeout(() => {
          document.querySelector(".App").classList.remove("translation");
        }, 100);
      }, 200);
      setLang("Eng");
    }
  }

  function languages() {
    setlangOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className="header_navigation">
        <div>
          <a href="#">
            <img
              className="header_logo"
              src="/image/icons/Logo.svg"
              alt="Logo"
            />
          </a>
        </div>

        <ul className="header_nav_list">
          <a href="#">
            <li>{t("nav_about")}</li>
          </a>
          <a href="#">
            <li>{t("nav_comand")}</li>
          </a>
          <a href="#">
            <li>FAQ</li>
          </a>
        </ul>

        <a href="#" className="header_button">
          {t("nav_button")}
        </a>

        <div
          className={
            langOpen ? "header_nav_languages_active" : "header_nav_languages"
          }
          onClick={languages}
        >
          {lang}
          {langOpen && (
            <div className="header_nav_languages_block">
              <div className="header_nav_languages_ua" onClick={setUaLanguages}>
                Укр
              </div>
              <div
                className="header_nav_languages_eng"
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
