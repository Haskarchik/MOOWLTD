import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { agronomicStatistics } from "../../../data/agronomicStatistics";


const Imfo = (props) => {
  const { t, i18n } = useTranslation();

  let onMapData = useRef();
  function langChose(el){
    if (i18n.language === 'eng') {
      return el.engName
    }else{
    return el.name
    }
  }
  agronomicStatistics.forEach(el => {
    if (el.city === props.data){
      if (el.noInfo) {
        onMapData.current = (
          <>
            <div key={el.id} className="map_active_block_label">{langChose(el)}</div>
            <ul className="region_info">
              <li>
                 {el.noInfo} 
              </li>
            </ul>
          </>
        );
        
      }
      else{
        onMapData.current = (
          <>
            <div key={el.id} className="map_active_block_label">{langChose(el)}</div>
            <ul className="region_info">
              <li>
                Урожайність <span>{el.cropCapacity} ц./га зібр. площі </span>
              </li>
              <li>
                Зібрана площа <span>{el.collectedArea} тис. га</span>
              </li>
              <li>
                Обсяги виробництва <span>{el.ProductionVolumes} тис. ц</span>{" "}
              </li>
            </ul>
          </>
        );
      }
    }
  });

  let udaptivePointsY = 1500;
  let udaptivePointsX = 50;

  let div = (
    <div
      className="map_active_block"
      style={{      /* we transfer the coordinates of the active block  */
        top: props.regionY - udaptivePointsY,
        left: props.regionX  + udaptivePointsX,
      }}
    >
      {onMapData.current}
    </div>
  );

  return <div>{div}</div>;
};

export default Imfo;
