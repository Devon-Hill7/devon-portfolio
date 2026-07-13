import React from "react";
import Marquee from "@/components/ui/Marquee";
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

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="min-h-screen flex items-center">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1400px] w-full mx-auto flex flex-col gap-8 xl:gap-12 px-8 xl:px-12">
        <motion.h2 variants={item} className="text-5xl xl:text-6xl font-spacegrotesk text-center text-offwhite">
          Tech Stack
        </motion.h2>

        <motion.div variants={item}>
          <Marquee techStack="frontend" />
        </motion.div>

        <motion.div variants={item}>
          <Marquee techStack="backend" />
        </motion.div>

        <motion.div variants={item}>
          <Marquee techStack="database" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;