import "./Input.css";
import React from "react";

function Input({ className, type, name, placeholder, value, onChange }) {
    return (
        <input
            className={`input ${className}`.trim()}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
