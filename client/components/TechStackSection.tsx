'use client'

import React from 'react'
import Marquee from "@/components/ui/Marquee";

const TechStackSection = () => {

    return (
        <section id="tech-stack" className="min-h-screen">
            <div className="w-full justify-center flex mt-20 gap-15 flex-col">
                <h2 className="text-6xl font-spacegrotesk text-center text-offwhite">Tech Stack</h2>
                <Marquee techStack="frontend"></Marquee>
                <Marquee techStack="backend"></Marquee>
                <Marquee techStack="database"></Marquee>
            </div>
        </section>
    )
}

export default TechStackSection