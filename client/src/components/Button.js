import React from "react";

const Button = ({ name, text }) => {
  return (
    <a className={name}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
