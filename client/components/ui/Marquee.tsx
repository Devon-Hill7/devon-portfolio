import React from 'react'
import MarqueeTrack from './MarqueeTrack'

interface MarqueeProps {
   techStack:  'frontend' | 'backend' | 'database'
}

 
const Marquee = ({ techStack }: MarqueeProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-spacegrotesk text-offwhite pl-10 tracking-widest uppercase">{techStack}</h2>
      <div className="no-scrollbar overflow-x-hidden items-center pt-1 pb-1 ">
        <div className="flex group w-max ">
          <MarqueeTrack techStack={techStack}></MarqueeTrack>
          <MarqueeTrack techStack={techStack}></MarqueeTrack>
        </div>
      </div>
    </div>
  )
}

export default Marquee