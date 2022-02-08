import React from "react";

const Button = ({ onClick, name, text }) => {
  return (
    <a href="/#" onClick={onClick} className={name}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
