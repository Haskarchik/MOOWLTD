import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Registration(props) {
  const { t, i18n } = useTranslation();

  const show = useRef();

  props.show ? show.current = "show" : show.current = " ";  /* check class */ 

  return (
    <section className={"registration " + show.current}> {/* adding class show */}
      <div className="wrapper">
        <div className="title">{t("registration_title")}</div>
        <div className="registration_content">
          <div className="reg_card">
            <div className="exist_left_words"> {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w last_word"></div> {/* remove margin */}
            </div>
            <div className="reg_card_content">
              <div className="reg_card_label">{t("reg_card_label_Individual")}Фізична особа</div>
              <div className="reg_card_text">
              {t("reg_card_text_Individual")}
              </div>
            </div>
          </div>
          <div className="reg_card">
            <div className="exist_left_words">  {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w last_word"></div>  {/* remove margin */}
            </div>
            <div className="reg_card_content">
              <div className="reg_card_label">{t("reg_card_label_Legal_entity")}</div>
              <div className="reg_card_text">
              {t("reg_card_text_Legal_entity")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
