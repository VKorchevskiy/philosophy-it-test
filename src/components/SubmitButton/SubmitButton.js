import "./SubmitButton.css";
import React from "react";

function SubmitButton({ className, type, name, value, isValid }) {
  return (
    <input
      className={`submit-button ${className}`.trim() + ' button-text'}
      type={type}
      name={name}
      value={value}
      disabled={!isValid}
    />
  );
}

export default SubmitButton;
