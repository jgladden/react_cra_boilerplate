import "./inputfield.scss";
import React from "react";

const InputField = props => {
  return (
    <div className="input-field-wrapper">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        type={props.type ? props.type : "text"}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
        className={`${props.className || ""} ${
          props.inValid ? "inValidField" : ""
        }`}
        id={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
