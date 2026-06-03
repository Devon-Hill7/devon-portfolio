import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,} from "@/components/ui/carousel";
import ProjectCard from "@/components/ui/ProjectCard";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main>
      <div className= "bg-background flex flex-col min-h-screen">
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
      </div>
    </main>
  );
}
