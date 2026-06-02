import React from 'react'
import { Badge } from './badge'

interface MarqueeTechPillProps {
    name: string,
    icon: React.ComponentType
    glow: string
}

const MarqueeTechPill = ({ name, icon: Icon, glow }: MarqueeTechPillProps) => {
  return (
    <Badge className="shrink-0 grow-0 basis-5rem items-center text-3xl h-15 w-70 gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-[#FFFFFF0A] border border-[#FFFFFF14] text-[#94A3B8] hover:bg-[#FFFFFF14] hover:text-offwhite hover:shadow-[0_0_10px_var(--glow)]"
      style={{ "--glow": glow } as React.CSSProperties}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center">
        <Icon />
      </div>
      {name}
    </Badge>
  )
}

export default MarqueeTechPill