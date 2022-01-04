import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        className={`${style.input} ${props.className}`}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
