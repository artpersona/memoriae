import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn-medium", "btn-large"];
export const Button = ({ children, onClick, buttonSize, buttonStyle, to }) => {
  const style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const size = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={to} className={`btn ${size} ${style}`} onClick={onClick}>
      {children}
    </Link>
  );
};
