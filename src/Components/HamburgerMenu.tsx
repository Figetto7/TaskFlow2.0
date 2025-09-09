import type { JSX } from "react";
import { useState } from "react";
import  HamburgerToXAnimation  from "../Helpers/Utils/hamburgerToXAnimation";
import SideBarMobile from "./SideBarMobile";

export default function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="ultraThinBorder w-10 h-10  mt-3 !rounded-none !border-l-0 !rounded-r-xl">
        <button  onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
          <HamburgerToXAnimation isOpen={isOpen} />
        </button>
      </div>
      {isOpen && (
        <SideBarMobile closeMenu={closeMenu} />
      )}
    </div>
  );
}