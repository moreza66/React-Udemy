import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  return <div className="Chart-bar">
    <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
        <div className="chart-bar__label"></div>
    </div>
  </div>    
   {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
};

export default ChartBar;
