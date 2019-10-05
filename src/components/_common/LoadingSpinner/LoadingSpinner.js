import "./loadingspinner.scss";
import React from "react";

const LoadingSpinner = ({ centered }) => (
  <div className={`loading-spinner ${centered ? "centered" : ""}`}>
    <div></div>
    <div></div>
  </div>
);

export default LoadingSpinner;
