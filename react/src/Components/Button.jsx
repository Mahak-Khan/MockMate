import React from "react";

const Button = ({ text, onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-black text-white
        px-6 py-2 rounded-lg
        cursor-pointer hover:scale-105
        mt-4
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
