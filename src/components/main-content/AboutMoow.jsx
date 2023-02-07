import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function AboutMoow(props) {
  const { t, i18n } = useTranslation();

  const show = useRef();

  props.show ? show.current = "show" : show.current = " ";  /* check class */ 

  return (
    <section className={"about " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="title">{t("about_title")}</div>
        <div className="about_content">
          <div className="exist_left_words"> {/* Vertical column with words */}
            <div className="m"></div>
            <div className="oo"></div>
            <div className="o"></div>
            <div className="w"></div>
            <div className="m"></div>
            <div className="o"></div>
            <div className="oo"></div>
            <div className="w "></div>
            <div className="m"></div>
            <div className="o"></div>
            <div className="oo "></div>
            <div className="w last_word"></div> {/* remove margin */}
          </div>
          <iframe                             /* youtube video */
            className="about_video"
            width="1583"
            height="620"
            src="https://www.youtube.com/embed/zrYwgSek_AE"
            title="🇺🇦 MOISSON XXL en UKRAINE sur 12 000 ha chez AGRO KMR | CTF 😲"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="exist_right_words"> {/* Vertical column with words */}
            <div className="m"></div>
            <div className="oo"></div>
            <div className="o"></div>
            <div className="w"></div>
            <div className="m"></div>
            <div className="o"></div>
            <div className="oo "></div>
            <div className="w "></div>
            <div className="m"></div>
            <div className="o"></div>
            <div className="oo "></div>
            <div className="w last_word"></div> {/* remove margin */}
          </div>
        </div>
      </div>
    </section>
  );
}
