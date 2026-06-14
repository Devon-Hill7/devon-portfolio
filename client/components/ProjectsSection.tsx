'use client';

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import { useState } from 'react'
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { useProjectNavigation } from './ProjectNavigationProvider';

const ProjectsSection = () => {
    
    const { setCarouselApi } = useProjectNavigation();



  return (
    <section id="projects" className="min-h-screen">
        <div className="w-full justify-center items-center flex mt-20 gap-12 flex-col">
            <h2 className="text-6xl font-spacegrotesk text-offwhite">Featured Projects</h2>
            <Carousel className="w-3/4 mb-5" setApi={setCarouselApi}>
                <CarouselContent>
                    {projects.map((project) => (
                    <CarouselItem key={project.id} id={project.id} className="md:basis-1 lg:basis-1/2">
                        <ProjectCard title={project.title} description={project.description} image={project.image} techStack={project.techStack} repoUrl={project.repoUrl} liveUrl={project.liveUrl}></ProjectCard>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </section>
  )
}

export default ProjectsSection