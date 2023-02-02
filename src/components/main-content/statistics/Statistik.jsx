import React, { useRef } from "react";
import Map from "./Map";
import "../mainContent.css";
export default function Statistik(props) {
  const show = useRef()
  if(props.show){
    show.current='show'
  }else{
    show.current=' '
  }
  return (
    <section className={"statistics " + show.current}>
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
                <li><span>1</span>Дніпропетровська область - 599,7 </li>
                <li><span>2</span>Кіровоградська область - 594,6</li>
                <li><span>3</span>Харківська область - 573,3 </li>
                <li><span>4</span>Запорізька область - 532,5 </li>
                <li><span>5</span>Миколаївська область - 495,1 </li>
              </ul>
              <div className="stat_card_at_ukraine">
              По Україні - <span>6 523,9 тис. га.</span>
              </div>
            </div>
            <div className="statistic_card">
              <div className="stat_card_label">Обсяги виробництва (тис.ц.)</div>
              <ul className="stat_card_top_list">
                <li><span>1</span>Кіровоградська область - 15903,9  </li>
                <li><span>2</span>Харківська область - 14 300,9 </li>
                <li><span>3</span>Дніпропетровська область - 14 032,6  </li>
                <li><span>4</span>Миколаївська область - 11 237,5 </li>
                <li><span>5</span>Запорізька область - 10 583,8 </li>
              </ul>
              <div className="stat_card_at_ukraine">
              По Україні - <span>164 398,4 тис. ц.</span>
              </div>
            </div>
            <div className="statistic_card">
              <div className="stat_card_label">Урожайність (ц. за 1 га. зібраної площі)</div>
              <ul className="stat_card_top_list">
                <li><span>1</span>Тернопільська область - 34,3</li>
                <li><span>2</span>Вінницька область - 33,1</li>
                <li><span>3</span>Черкаська область - 32,5 </li>
                <li><span>4</span>Хмельницька область - 32,1 </li>
                <li><span>5</span>Київська область - 31,2 </li>
              </ul>
              <div className="stat_card_at_ukraine">
              По Україні - <span>25,2 ц. за 1 га. зібраної площі</span>
              </div>
            </div>
          </div>
        </div>
        <Map/>
      </div>
    </section>
  );
}
