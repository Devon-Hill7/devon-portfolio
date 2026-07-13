import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "motion/react";

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

const MotionBadge = motion.create(Badge);

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="max-w-[1600px] w-full mx-auto flex items-center gap-8 xl:gap-12 px-8 xl:px-12"
  >
    <div className="flex flex-col flex-1 gap-8 xl:gap-10">
      <div className="flex flex-col gap-3">
        <motion.h2 variants={item} className="text-3xl font-spacegrotesk text-offwhite">
          Devon Hill
        </motion.h2>

        <motion.div variants={item} className="bg-orange h-px" />

        <MotionBadge variants={item} variant="outline">
          Open To Full Time Opportunities
        </MotionBadge>
      </div>

      <div>
        <motion.h1 variants={item} className="text-5xl xl:text-6xl font-bold text-offwhite">
          Full-Stack Developer
        </motion.h1>

        <motion.h1 variants={item} className="text-5xl xl:text-6xl font-spacegrotesk text-offwhite">
          Building Modern Web Applications
        </motion.h1>
      </div>

      <motion.p variants={item} className="max-w-xl text-lg xl:text-xl font-inter text-offwhite">
        Focused on developing scalable full-stack applications with secure backend systems, responsive frontend designs, and modern web technologies.
      </motion.p>

      <motion.div variants={item} className="flex gap-8">
        <a href="#projects">
          <Button size="xl">
            View Projects
          </Button>
        </a>

        <a href="/resume.pdf" target="_blank">
          <Button size="xl">
            View Resume
          </Button>
        </a>
      </motion.div>
    </div>

    <motion.div variants={item} className="flex flex-1 justify-center">
      <img
        src="/images/headshot.png"
        className="h-96 xl:h-112 2xl:h-128 rounded-full border-[3px] border-white/15 shadow-[0_0_100px_rgba(255,111,60,0.18)] brightness-75 contrast-110"
      />
    </motion.div>
  </motion.div>
</section>
  );
};

export default HeroSection;