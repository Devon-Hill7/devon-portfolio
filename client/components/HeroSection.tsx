import React from 'react'
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen">
        <div className="flex h-7/8 gap-12 mt-15">
            <div className=" flex flex-col w-1/2 gap-12 ml-15 ">
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-spacegrotesk text-offwhite">Devon Hill</h2>
                    <div className="bg-orange h-px"></div>
                    <Badge variant="outline">Open To Full Time Opportunities</Badge>
                </div>
                <div>
                    <h1 className="text-7xl font-bold text-offwhite">Full-Stack Developer</h1>
                    <h1 className="text-7xl font-spacegrotesk text-offwhite">Building Modern Web Applications</h1>
                </div>
                <p className="text-xl font-inter text-offwhite">Focused on developing scalable full-stack applications with secure backend systems, responsive frontend designs, and modern web technologies.</p>
                <div className="flex gap-15">
                    <a href='#projects'>
                        <Button variant="default" size="xl">
                            View Projects
                        </Button>
                    </a>
                    <a href="/resume.pdf" target="_blank">
                        <Button variant="default" size="xl">
                            View Resume
                        </Button>
                    </a>
                </div>
            </div>
            <div className="flex w-1/2  justify-center items-center">
                <img
                    src="/images/headshot.png"
                    className="w-auto h-150 rounded-full border-[3px] border-white/15 shadow-[0_0_100px_rgba(255,111,60,0.18)] brightness-75 contrast-110"
                    />
            </div>
        </div>
    </section>
  )
}

export default HeroSection