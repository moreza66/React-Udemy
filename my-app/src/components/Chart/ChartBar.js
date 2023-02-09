import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
