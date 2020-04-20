import React from "react";
import "./Button.css";

const Button = (props) => {
  let classes = "button ";
  if (props.operation === "operation") {
    classes += "operation";
  }
  if (props.operation === "double") {
    classes += "double";
  }
  if (props.operation === "triple") {
    classes += "triple";
  }

  return (
    <button
      onClick={(event) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  );
};
export default Button;
