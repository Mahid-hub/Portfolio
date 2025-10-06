import React from "react";

function Button({
  text,
  variant = "border", // default value
  bgClr = "",
  textClr = "",
  height = "",
  width = "",
  click,
  className = "",
}) {
  const baseStyle = "px-3 py-2 font-semibold";

  const variants = {
    border: `${bgClr} ${textClr} ${height} ${width}`,
    unborder: `bg-transparent ${textClr} underline ${height} ${width} hover:text-[#8f8f8f]`,
  };

  return (
    <button
      onClick={click}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
