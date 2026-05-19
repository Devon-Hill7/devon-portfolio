import React from 'react'
import { Button } from "./Button"

type NavbarButtonProps = {
  text: string
}

const NavbarButton = ({ text }: NavbarButtonProps) => {
  return (
    <Button variant="ghost" size="xs">
      {text}
    </Button>
  )
}

export default NavbarButton