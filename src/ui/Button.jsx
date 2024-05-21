// src/components/Button.js
import React from "react";

const Button = ({ color, text, icon }) => {
  return (
    <button
      className={`${color} text-white flex items-center justify-center px-4 py-2 rounded-full shadow-md hover:bg-opacity-90 transition`}
    >
      {text}
      <span className="ml-2">{icon}</span>
    </button>
  );
};

export default Button;
