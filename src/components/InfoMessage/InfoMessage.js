import "./InfoMessage.css";
import React from "react";

const InfoMessage = ({ className, message, isValid }) => {
  return (
    <span
      className={`info-message ${className} ${
        !isValid ? "info-message_active" : "info-message_disable"
      }`.trim()}
    >
      {message}
    </span>
  );
};

export default InfoMessage;
