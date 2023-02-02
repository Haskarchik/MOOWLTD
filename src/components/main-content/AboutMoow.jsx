import React, { useRef } from "react";

export default function AboutMoow(props) {
  const show = useRef();
  if (props.show) {
    show.current = "show";
  } else {
    show.current = " ";
  }
  return (
    <section className={"about " + show.current}>
      <div className="wrapper">
        <div className="title">Про MOOW за 2 хвилини</div>
        <div className="about_content">
          <div className="exist_left_words">
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
            <div className="w last_word"></div>
          </div>
          <iframe
          className="about_video"
            width="1583"
            height="620"
            src="https://www.youtube.com/embed/zrYwgSek_AE"
            title="🇺🇦 MOISSON XXL en UKRAINE sur 12 000 ha chez AGRO KMR | CTF 😲"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
         
          <div className="exist_right_words">
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
            <div className="w last_word"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
