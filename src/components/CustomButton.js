import React from "react";

const CustomButton = ({ title, variant }) => {
  return <button className={variant}>{title}</button>;
};

export default CustomButton;
