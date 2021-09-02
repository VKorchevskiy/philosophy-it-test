import "./InfoMessage.css";
import React from "react";

const InfoMessage = ({ className, message }) => {
  return <span className={`error ${className}`.trim()}>{message}</span>;
};

export default InfoMessage;
