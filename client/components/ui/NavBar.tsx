import React from "react";
import NavbarButton from "./NavbarButton";

const NavBar = () => {
  return (
    <div className="sticky top-4 left-1/2 -translate-x-1/2 z-50 w-fit bg-foreground rounded-full shadow-[-0.45px_-0.75px_1px_rgba(42,92,107,1),0.45px_0.75px_6px_rgba(0,13,18,0.6)]">
      <div className="flex items-center gap-5 xl:gap-7 px-5 xl:px-7 py-2">
        <NavbarButton text="Home" sectionId="#hero" />
        <NavbarButton text="Projects" sectionId="#projects" />
        <NavbarButton text="Tech Stack" sectionId="#tech-stack" />
        <NavbarButton text="About" sectionId="#about" />
        <NavbarButton text="Contact" sectionId="#contact" />
      </div>
    </div>
  );
};

export default NavBar;