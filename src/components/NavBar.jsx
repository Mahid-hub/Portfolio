import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar({ logo, name, bgClr }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Destop View */}
      <div className={`${bgClr} px-5 h-16 flex items-center justify-between`}>
        <Logo logo={logo} name={name} />

        <div className="hidden md:flex gap-6 items-center">
          <Link
            to={'/'}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to={'/contact'}
          >
            <Button
              text="Contact"
              bgClr="bg-purple-600"
              textClr="text-white"
              className="rounded-md relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4/5"
            />
          </Link>
        </div>
        {/* Mobile View */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div
          className={`${bgClr} md:hidden pb-2 flex flex-col gap-4 items-center`}
        >
          <a
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href="#"
          >
            Home
          </a>
          <a
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href="#"
          >
            About
          </a>
          <Button
            text="Contact"
            bgClr="bg-purple-600"
            textClr="text-white"
            className="rounded-md relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4/5"
          />
        </div>
      )}
    </>
  );
}

export default NavBar;
