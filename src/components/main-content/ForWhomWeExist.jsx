import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./mainContent.css";

export default function (props) {
  const { t, i18n } = useTranslation();
  const show = useRef();

 

  props.show ? show.current = "show" : show.current = " ";  /* check class */ 

  return (
    <section className={"exist " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="exist_content">
          <div className="exist_left_part">
   <div className="exist_title title">{t("exist_title")}</div>
            <ul className="exist_list">
              <li>{t("exist_list_1")}</li>
              <li>{t("exist_list_2")}</li>
              <li>{t("exist_list_3")}</li>
              <li>{t("exist_list_4")}</li>
              <li>{t("exist_list_5")}</li>
            </ul>
          </div>
          <div className="exist_right_part">
            <div className="exist_left_words">   {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo"></div>
              <div className="w last_word"></div> {/* remove margin */}
            </div>
            <div className="exist_offer">
              <div className="offer_title">
              {t("exist_offer_title")}
                
              </div>
              <button className=" offer_button">
              {t("exist_offer_button")} </button>
              <div className="offer_title">
              {t("exist_offer_subtitle")}
                
              </div>
              <div className="ofer_download_buttons">
                <a href="#">   {/* button  */}
                  <div className="google_play"></div>
                </a>
                <a href="#">   {/* button  */}
                  <div className="app_store"></div>
                </a>
              </div>
            </div>
            <div className="exist_right_words"> {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo"></div>
              <div className="w last_word"></div> {/* remove margin */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
