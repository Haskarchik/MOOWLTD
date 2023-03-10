import React from "react";
import { useTranslation } from "react-i18next";
import "./mainContent.css";

export default function Advantages(props) {
  const { t, i18n } = useTranslation();
 
  return (
    <section className="advantages " > 
      <div className="wrapper">
        <div className="advatages_title title">{t("advantages_title")}</div>
        <div className="advantages_content">
          <div className="advantages_card">
            <div className="ad_card_img">
              <img
                className="cirkle"
                src="/image/icons/all-in-one/cirkle.png"
                alt="cirkle"
              />
              <img
                className="message"
                src="/image/icons/all-in-one/messege.svg"
                alt="messeges"
              />
              <img
                className="box"
                src="/image/icons/all-in-one/box.svg"
                alt="box"
              />
              <img
                className="carculator"
                src="/image/icons/all-in-one/carculator.svg"
                alt="carculator"
              />
            </div>
            <div className="ad_card_description">
              <div className="ad_card_label">{t("advantages_allInOne_title")}</div>
              <div className="ad_card_text">{t("advantages_allInOne_text")}
              </div>
            </div>
          </div>
          <div className="advantages_card">
            <div className="ad_card_img">
              <img src="/image/icons/business-process-control.svg" alt="business process control" />
              <img
                className="advantages_card_loop"
                src="/image/icons/business-process-control-loop.svg"
                alt="business process control loop"
              />
            </div>
            <div className="ad_card_description">
              <div className="ad_card_label">
              {t("advantages_business-process-control_title")}
               
              </div>
              <div className="ad_card_text">
              {t("advantages_business-process-control_text")}
              </div>
            </div>
          </div>
          <div className="advantages_card reverse_card">
            <div className="ad_card_img">
              <img src="/image/icons/verified-members.svg" alt="verified-members" />
              <img
                className="advantages_card_chek_mark"
                src="/image/icons/check-mark.svg"
                alt="check-mark"
              />
            </div>
            <div className="ad_card_description">
              <div className="ad_card_label">{t("advantages_verify_title")}</div>
              <div className="ad_card_text">
              {t("advantages_verify_text")}
              
              </div>
            </div>
          </div>
          <div className="advantages_card reverse_card">
            <div className="ad_card_img">
              <svg
                className="under_hand_button"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="under_hand_button_inside"
                  d="M34.3045 17.1733C34.3045 26.5381 26.7128 34.1298 17.348 34.1298C7.98318 34.1298 0.391479 26.5381 0.391479 17.1733C0.391479 7.80849 7.98318 0.216797 17.348 0.216797C26.7128 0.216797 34.3045 7.80849 34.3045 17.1733Z"
                  fill="#FEFEFE"
                />
                <path
                  className="under_hand_button_around"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.348 30.2168C24.5517 30.2168 30.3915 24.377 30.3915 17.1733C30.3915 9.9696 24.5517 4.12984 17.348 4.12984C10.1443 4.12984 4.30452 9.9696 4.30452 17.1733C4.30452 24.377 10.1443 30.2168 17.348 30.2168ZM17.348 34.1298C26.7128 34.1298 34.3045 26.5381 34.3045 17.1733C34.3045 7.80849 26.7128 0.216797 17.348 0.216797C7.98318 0.216797 0.391479 7.80849 0.391479 17.1733C0.391479 26.5381 7.98318 34.1298 17.348 34.1298Z"
                  fill="#665CD1"
                />
                <path
                  className="under_hand_button_center"
                  d="M17.1313 7.22266L14.7393 14.9396L7.02246 17.3312L14.7393 19.7232L17.1313 27.44L19.523 19.7232L27.2399 17.3312L19.523 14.9396L17.1313 7.22266Z"
                  fill="#665CD1"
                />
              </svg>
              <img className="hand" src="/image/icons/hand.svg" alt="hand" />
            </div>
            <div className="ad_card_description">
              <div className="ad_card_label">{t("advantages_simplicity_title")}</div>
              <div className="ad_card_text">{t("advantages_simplicity_text")}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
