import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";
import { agronomicStatistics } from "../../../data/agronomicStatistics";

import "../mainContent.css";

export default function Statistik(props) {
  function displayTopFiveCropCapacity() {
    let list = [];

    let array = agronomicStatistics.sort(function (a, b) {
      if (a.cropCapacity > b.cropCapacity) {
        return -1;
      }
      if (a.cropCapacity < b.cropCapacity) {
        return 1;
      }
      return 0;
    });

    for (let i = 0; i < 5; i++) {
      list.push(
        <li>
          <span>{i + 1}</span>
          {array[i].name} - {array[i].cropCapacity}
        </li>
      );
    }
    return list;
  }
  function displayTopFiveCollectedArea() {
    let list = [];

    let array = agronomicStatistics.sort(function (a, b) {
      if (a.collectedArea > b.collectedArea) {
        return -1;
      }
      if (a.collectedArea < b.collectedArea) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < 5; i++) {
      list.push(
        <li>
          <span>{i + 1}</span>
          {array[i].name} - {array[i].collectedArea}
        </li>
      );
    }
    return list;
  }

  function displayTopFiveProductionVolumes() {
    let list = [];

    let array = agronomicStatistics.sort(function (a, b) {
      if (a.ProductionVolumes > b.ProductionVolumes) {
        return -1;
      }
      if (a.ProductionVolumes < b.ProductionVolumes) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < 5; i++) {
      list.push(
        <li>
          <span>{i + 1}</span>
          {array[i].name} - {array[i].ProductionVolumes}
        </li>
      );
    }
    return list;
  }

  const [scroll, setscroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setscroll(window.scrollY);
  }

  const show = useRef();

  props.show ? (show.current = "show") : (show.current = " "); /* check class */

  return (
    <section className={"statistics " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="title">Наша статистика показує</div>
        <div className="statistic_content">
          <div className="statistik_label">
            <h2> Збір урожаю соняшнику на 01 грудня 2021р. Топ-5 областей</h2>
            <p>
              Дані наведено без урахування тимчасово окупованої території
              Автономної Республіки Крим, м. Севастополя та частини тимчасово
              окупованих територій у Донецькій та Луганській областях
            </p>
          </div>
          <div className="statistic_info">
            <div className="statistic_card">
              <div className="stat_card_label">Зібрана площа (тис. га.)</div>
              <ul className="stat_card_top_list">
                {displayTopFiveCollectedArea()}
              </ul>
              <div className="stat_card_at_ukraine">
                По Україні - <span>6 523,9 тис. га.</span>
              </div>
            </div>
            <div className="statistic_card">
              <div className="stat_card_label">Обсяги виробництва (тис.ц.)</div>
              <ul className="stat_card_top_list">
                {displayTopFiveProductionVolumes()}
              </ul>
              <div className="stat_card_at_ukraine">
                По Україні - <span>164 398,4 тис. ц.</span>
              </div>
            </div>
            <div className="statistic_card">
              <div className="stat_card_label">
                Урожайність (ц. за 1 га. зібраної площі)
              </div>
              <ul className="stat_card_top_list">
                {displayTopFiveCropCapacity()}
              </ul>
              <div className="stat_card_at_ukraine">
                По Україні - <span>25,2 ц. за 1 га. зібраної площі</span>
              </div>
            </div>
          </div>
        </div>
        {scroll > 1000 ? <Map show={"show"} /> : <Map />}
      </div>
    </section>
  );
}
