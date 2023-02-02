import React, { useRef } from "react";

const Imfo = (props) => {
  let onMapData = useRef();
  switch (props.data) {
    case "Lviv":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Львівська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Luhansk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Луганська область</div>
          <ul className="region_info">
            <li>Даних немає </li>
          </ul>
        </>
      );
      break;
    case "Donetsk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Донецька область</div>
          <ul className="region_info">
            <li>Даних немає </li>
          </ul>
        </>
      );
      break;
    case "Simferopol":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Симферопольська область</div>
          <ul className="region_info">
            <li>Даних немає </li>
          </ul>
        </>
      );
      break;
    case "Kiev":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Київська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Lutsk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Луцька область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Uzhorod":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Ужгородська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Rivne":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Рівненська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Ternopil":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Тернопільська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Ivano-frankivsk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">
            Івано-Франківська область
          </div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Chernivets":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Чернівецька область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Khmelnitsk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Хмельницька область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Zhytomyr":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Житомирська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Vinnytsia":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Вінницька область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Cherkasy":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Черкаська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Kirovograd":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Киривоградська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Mykolayiv":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Миколаївська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Odesa":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Одеська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Kherson":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Херсонська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Dnipropetrovsk":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Дніпропетровська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Zaporizhzhia":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Запорізька область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Kharkiv":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Харківська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Poltava":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Полтавська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Chernihiv":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Чернігівська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;
    case "Sumy":
      onMapData.current = (
        <>
          <div className="map_active_block_label">Сумська область</div>
          <ul className="region_info">
            <li>
              Урожайність <span>31,2 ц./га зібр. площі </span>
            </li>
            <li>
              Зібрана площа <span>200,9 тис. га</span>
            </li>
            <li>
              Обсяги виробництва <span>6279,3 тис. ц.</span>{" "}
            </li>
          </ul>
        </>
      );
      break;

    default:
      break;
  }

  let udaptivePointsY = 2005;
  let udaptivePointsX = 455;

  let div = (
    <div
      className="map_active_block"
      style={{ top: props.regionY - udaptivePointsY, left: props.regionX  - udaptivePointsX }}
    >
      {onMapData.current}
    </div>
  );

  return <div>{div}</div>;
};

export default Imfo;
