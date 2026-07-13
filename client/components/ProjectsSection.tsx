import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { useProjectNavigation } from "./ProjectNavigationProvider";
import { motion, type Variants } from "motion/react";

const MotionCarousel = motion.create(Carousel);

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsSection = () => {
  const { setCarouselApi } = useProjectNavigation();

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1400px] w-full mx-auto flex flex-col items-center gap-8 xl:gap-12 px-8 xl:px-12">
        <motion.h2 variants={item} className="text-5xl xl:text-6xl font-spacegrotesk text-offwhite">
          Featured Projects
        </motion.h2>

        <MotionCarousel variants={item} className="w-full xl:w-5/6" setApi={setCarouselApi}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} id={project.id} className="basis-full lg:basis-1/2">
                <ProjectCard title={project.title} description={project.description} image={project.image} techStack={project.techStack} repoUrl={project.repoUrl} liveUrl={project.liveUrl} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </MotionCarousel>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;