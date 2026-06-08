import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,} from "@/components/ui/carousel";
import ProjectCard from "@/components/ui/ProjectCard";
import Marquee from "@/components/ui/Marquee";
import QuickFactsEntry from "@/components/ui/QuickFactsEntry";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col min-h-screen portfolio-background">
        <NavBar/>
        <section id="hero" className="min-h-screen">
          <div className="flex1 flex flex-col w-1/2 mt-15 gap-20 ml-15 ">
            <h2 className="text-3xl font-spacegrotesk text-offwhite">Devon Hill</h2>
            <h1 className="text-7xl font-bold text-offwhite">Full-Stack Developer Building Modern Web Applications</h1>
            <p className="text-xl font-inter text-offwhite">Focused on developing scalable full-stack applications with secure backend systems, responsive frontend designs, and modern web technologies.</p>
          </div>
          <div className="w-full items-center justify-center flex mt-20">
            <Button variant="default" size="xl" className="text-2xl hover:shadow-[-0.45px_-0.75px_1px_rgba(255,185,140,0.6),0.45px_0.75px_6px_rgba(0,13,18,1)] 
              active:shadow-[inset_1px_1px_3px_rgba(90,25,12,1),inset_-1px_-1px_2px_rgba(255,150,100,1)]">
                View Projects
            </Button>
          </div>
        </section>
        <section id="projects" className="min-h-screen">
          <div className="w-full justify-center items-center flex mt-20 gap-12 flex-col">
            <h2 className="text-6xl font-spacegrotesk text-offwhite">Featured Projects</h2>
            <Carousel className="w-3/4 mb-5">
              <CarouselContent>
                <CarouselItem className="md:basis-1 lg:basis-1/2">
                  <ProjectCard
                    title="My Spanish Diary"
                    description="Full-stack journaling app with grammar feedback and secure user authentication"
                    image="/images/MySpanishDiaryScreenshot.png"
                    techStack={["Spring Boot", "React", "PostgreSQL", "JWT"]}
                    repoUrl="https://github.com/Devon-Hill7/MySpanishDiary"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="tech-stack" className="min-h-screen">
          <div className="w-full justify-center flex mt-20 gap-15 flex-col">
            <h2 className="text-6xl font-spacegrotesk text-center text-offwhite">Tech Stack</h2>
              <Marquee techStack="frontend"></Marquee>
              <Marquee techStack="backend"></Marquee>
              <Marquee techStack="database"></Marquee>
          </div>
        </section>
        <section id="about" className="min-h-screen">
          <div className="w-full justify-center flex mt-20 gap-15 flex-col">
            <h2 className="text-6xl font-spacegrotesk text-center text-offwhite">About Me</h2>
            <div className="w-full flex gap-10 p-3 justify-center">
              <div className="w-2/3 bg-white/3 flex flex-col gap-4  border-white/5 rounded-lg p-10">
                <p className="text-xl font-inter text-center text-offwhite">
                  Hi, I'm Devon, a software developer with a Bachelor's degree in Computer Science and a passion for building full-stack applications.
                </p>
                <p className="text-xl font-inter text-center text-offwhite">
                  I enjoy creating software from the ground up and seeing an idea evolve from a concept into a finished product. While I have experience across the full stack, I particularly enjoy backend development and understanding how all parts of a system work together behind the scenes. What draws me to software engineering is the ability to design, build, and continuously improve solutions while learning something new along the way.
                </p>
                <p className="text-xl font-inter text-center text-offwhite">
                  My proudest project is My Spanish Diary, a full-stack application that challenged me to take ownership of every stage of development. From planning the concept and designing the user interface to building the frontend with React, developing a backend API with Spring Boot, and connecting everything together, the project pushed me to learn new technologies and solve unfamiliar problems independently. 
                </p>
                <p className="text-xl font-inter text-center text-offwhite">
                  As a developer, I strive to be reliable, adaptable, and easy to work with. I enjoy tackling difficult challenges, learning new tools, and finding practical solutions to complex problems. Currently, I'm expanding my skills with TypeScript and Next.js while exploring areas such as Docker and UI/UX design. I'm seeking opportunities to contribute to meaningful software projects, continue growing as an engineer, and help build products that make a difference.
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="w-1/3 rounded-2xl p-5 flex flex-col justify-between bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <h3 className="text-3xl font-spacegrotesk text-offwhite text-center">Quick Facts</h3>
                <QuickFactsEntry title="Education" content="B.S. Computer Science"/>
                <QuickFactsEntry title="Focus" content="Full-Stack Development"/>
                <QuickFactsEntry title="Favorite Area" content="Backend Systems"/>
                <QuickFactsEntry title="Currently Learning" content="TypeScript, Next.js, Docker"/>
                <QuickFactsEntry title="Outside Tech" content="Learning Spanish, Board Games, Video Games"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
