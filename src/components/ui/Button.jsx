import React from "react";
import "./button.css";

export default function Button({ children, onClick, className }) {
  return (
    <button className={`custom-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
