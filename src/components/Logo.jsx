import React from "react";
import Button from "./Button";

function Logo({ logo, name, className }) {
  return (
    <>
      <div
        className={`flex items-center gap-2 cursor-pointer ${className || ""}`}
      >
        <Button
          text={logo}
          variant="border"
          bgClr="bg-purple-600"
          textClr="text-white"
          className="rounded-full"
        />
        <p className="text-black font-bold">{name}</p>
      </div>
    </>
  );
}

export default Logo;
