import React from "react";

export const KebabIcon = ({ className = "" }) => (
  <div className={`kebab ${className}`}>
    <span className="circle" />
    <span className="circle" />
    <span className="circle" />
  </div>
);

export default KebabIcon;
