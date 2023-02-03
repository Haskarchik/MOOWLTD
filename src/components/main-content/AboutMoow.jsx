import React, { useRef } from "react";

export default function AboutMoow(props) {

  const show = useRef();

  if (props.show) {   /* check class  */
    show.current = "show";
  } else {
    show.current = " ";
  }

  return (
    <section className={"about " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="title">Про MOOW за 2 хвилини</div>
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
