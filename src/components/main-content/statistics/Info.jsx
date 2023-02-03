import React, { useRef } from "react";
import { agronomicStatistics } from "../../../data/agronomicStatistics";


const Imfo = (props) => {

  let onMapData = useRef();
  
  agronomicStatistics.forEach(el => {
    if (el.city === props.data){
      if (el.noInfo) {
        onMapData.current = (
          <>
            <div key={el.id} className="map_active_block_label">{el.name}</div>
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
            <div key={el.id} className="map_active_block_label">{el.name}</div>
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
