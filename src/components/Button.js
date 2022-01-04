import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      value={props.value}
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
