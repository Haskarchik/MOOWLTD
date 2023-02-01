import React from "react";

const Imfo = (props) => {
  let div = (
    <div
      className="map_active_block"
      style={{ top: props.regionY, left: props.regionX }}
    >
      {props.path}
    </div>
  );

  return <div>{div}</div>;
};

export default Imfo;
