import type { JSX } from "react";
import { useState } from "react";
import  HamburgerToXAnimation  from "../Helpers/Utils/hamburgerToXAnimation";
import SideBarMobile from "./SideBarMobile";
import { useEffect } from "react";

export default function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="fixed z-50">
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