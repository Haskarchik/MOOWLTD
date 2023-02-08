import React from "react";

import "./preloader.css";

const Preloader = ({ active, setActive }) => {

  return (
<div className="preloader">
    <img src="/image/icons/os.svg" alt="" />
    <div className="load">Loading....</div>
</div>
  );
};

export default Preloader;
