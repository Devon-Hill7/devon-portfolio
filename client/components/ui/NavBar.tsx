import React from 'react'
import { Button } from "./Button"

const NavBar = () => {
  return (
    <div className="bg-foreground flex h-grow w-1/3 gap-5 rounded-full justify-between align-middle p-2">
      <Button variant="ghost" size="xs">Home</Button>
      <Button variant="ghost" size="xs">Projects</Button>
      <Button variant="ghost" size="xs">Tech Stack</Button>
      <Button variant="ghost" size="xs">About</Button>
      <Button variant="ghost" size="xs">Contact</Button>
    </div>
  )
}

export default NavBar