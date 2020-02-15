import React from "react";
import "./button.css";

const Button = props => (
  <button type="button" onClick={props.onClick} className={props.className}>
    {props.children}
  </button>
);

export default Button;
