import React from "react";
import QuickFactsEntry from "@/components/ui/QuickFactsEntry";
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

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1400px] w-full mx-auto flex flex-col gap-8 xl:gap-12 px-8 xl:px-12">
        <motion.h2 variants={item} className="text-5xl xl:text-6xl font-spacegrotesk text-center text-offwhite">
          About Me
        </motion.h2>

        <motion.div variants={item} className="w-full flex gap-8 xl:gap-10 justify-center">
          <motion.div variants={container} className="w-2/3 bg-white/3 flex flex-col gap-4 border border-white/5 rounded-lg p-6 xl:p-8">
            <motion.p variants={item} className="text-lg xl:text-xl font-inter text-center text-offwhite">
              Hi, I'm Devon, a software developer with a Bachelor's degree in Computer Science and a passion for building full-stack applications.
            </motion.p>

            <motion.p variants={item} className="text-lg xl:text-xl font-inter text-center text-offwhite">
              I enjoy creating software from the ground up and seeing an idea evolve from a concept into a finished product. While I have experience across the full stack, I particularly enjoy backend development and understanding how all parts of a system work together behind the scenes. What draws me to software engineering is the ability to design, build, and continuously improve solutions while learning something new along the way.
            </motion.p>

            <motion.p variants={item} className="text-lg xl:text-xl font-inter text-center text-offwhite">
              My proudest project is My Spanish Diary, a full-stack application that challenged me to take ownership of every stage of development. From planning the concept and designing the user interface to building the frontend with React, developing a backend API with Spring Boot, and connecting everything together, the project pushed me to learn new technologies and solve unfamiliar problems independently.
            </motion.p>

            <motion.p variants={item} className="text-lg xl:text-xl font-inter text-center text-offwhite">
              As a developer, I strive to be reliable, adaptable, and easy to work with. I enjoy tackling difficult challenges, learning new tools, and finding practical solutions to complex problems. Currently, I'm expanding my skills with TypeScript and Next.js while exploring areas such as Docker and UI/UX design. I'm seeking opportunities to contribute to meaningful software projects, continue growing as an engineer, and help build products that make a difference.
            </motion.p>
          </motion.div>

          <motion.div variants={item} className="w-px bg-white/10" />

          <motion.div variants={container} className="w-1/3 rounded-2xl p-5 xl:p-6 flex flex-col gap-6 bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <motion.h3 variants={item} className="text-3xl xl:text-4xl font-spacegrotesk text-offwhite text-center">
              Quick Facts
            </motion.h3>

            <motion.div variants={item}>
              <QuickFactsEntry title="Education" content="B.S. Computer Science" />
            </motion.div>

            <motion.div variants={item}>
              <QuickFactsEntry title="Focus" content="Full-Stack Development" />
            </motion.div>

            <motion.div variants={item}>
              <QuickFactsEntry title="Favorite Area" content="Backend Systems" />
            </motion.div>

            <motion.div variants={item}>
              <QuickFactsEntry title="Currently Learning" content="TypeScript, Next.js, Docker" />
            </motion.div>

            <motion.div variants={item}>
              <QuickFactsEntry title="Outside Tech" content="Learning Spanish, Board Games, Video Games" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;