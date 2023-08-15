import React, { useEffect, useState } from "react";
import "./progress.css";

const ProgressBar = ({ value ,sucess,setSucess}) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    if (value>100) setSucess(true)
    setPercent(Math.min(100, Math.max(value, 0))/5);
  }, [value,sucess]);
  return (
    <div className="container">
      <div className="progress">
        <span style={{ color: percent > 49 ? "white" : "black" }}>
          {percent.toFixed()}%
        </span>
        <div
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent.toFixed()}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
