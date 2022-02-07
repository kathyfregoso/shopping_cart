import React from "react";

const Button = ({ className, name }) => {
  return (
    <a className={className}>
      <span>{name}</span>
    </a>
  );
};

export default Button;
