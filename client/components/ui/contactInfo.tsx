import React from 'react'
import { memo } from 'react' 

interface ContactInfoProps {
    name: string,
    link: string
    icon?: React.ReactNode
}


const contactInfo = ({name, link, icon}: ContactInfoProps) => {
  return (
    <div className="flex gap-2 align-center">
        {icon && icon}
        <a className="text-xl text-offwhite hover:underline underline-offset-4 decoration-offwhite" href={link} target="_blank">{name}</a>
    </div>
  )
}

export default contactInfo