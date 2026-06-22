import React from 'react'
import { Button } from "./Button"

type NavbarButtonProps = {
  text: string
  sectionId: string
}

const NavbarButton = ({ text, sectionId}: NavbarButtonProps) => {
  return (
    <a href={sectionId}>
      <Button variant="ghost" size="xs">
        {text}
      </Button>
    </a>
  )
}

export default NavbarButton