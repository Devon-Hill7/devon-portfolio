import React from 'react'
import NavbarButton from "./NavbarButton"

const NavBar = () => {
  return (
    <div className="bg-foreground/10 backdrop-blur-md flex w-1/3 rounded-full justify-between align-middle mt-2 shadow-[-0.45px_-0.75px_1px_rgba(42,92,107,1),0.45px_0.75px_6px_rgba(0,13,18,0.6)]">
      <div className="max-w-5xl w-full mx-auto flex justify-between align-middle px-4 py-2">
        <NavbarButton text="Home" />
        <NavbarButton text="Projects" />
        <NavbarButton text="Tech Stack" />
        <NavbarButton text="About" />
        <NavbarButton text="Contact" />
      </div>
    </div>
  )
}

export default NavBar