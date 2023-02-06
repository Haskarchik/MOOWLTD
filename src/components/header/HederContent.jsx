import React from "react";
import { useTranslation } from "react-i18next";


const HederContent = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className="header_seaction">
      <div className="header_title">
        <h2>{t("header_title_h2")}</h2>
          <p>
          {t("header_title_p")}
          </p>
      </div>
      <div className="header_seaction_buttons">
      
          <button className="header_header_button">
          {t("header_button_go_web")} 
          </button>
       
     
          <button className="header_header_black_button">
          {t("header_button_go_app")}  
          </button>
     
      </div>
    </section>
  );
};

export default HederContent;
