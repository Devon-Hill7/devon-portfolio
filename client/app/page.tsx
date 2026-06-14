import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/Button";
import QuickFactsEntry from "@/components/ui/QuickFactsEntry";
import ContactInfo from "@/components/ui/contactInfo"
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import { ProjectNavigationProvider } from "@/components/ProjectNavigationProvider";



export default function Home() {
  return (
    <ProjectNavigationProvider>
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
              <Button variant="default" size="xl">
                  View Projects
              </Button>
            </div>
          </section>
          <ProjectsSection></ProjectsSection>
          <TechStackSection></TechStackSection>
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
          <section id="contact" className="min-h-screen">
            <div className="flex flex-col mt-20 gap-30 items-center">
              <h2 className="text-6xl font-spacegrotesk text-center text-offwhite">Contact</h2>
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-spacegrotesk text-offwhite text-center">Whether you have an opportunity, a question about one of my projects, or simply want to connect,</h3>
                <h3 className="text-3xl font-spacegrotesk text-offwhite text-center">I'd be happy to hear from you.</h3>
              </div>
              <div className="flex w-full justify-center">
                <a href="mailto:devonhill7@outlook.com">
                  <Button size="xl">Email Me</Button>
                </a>
              </div>
              <div className="flex w-1/3 justify-between text-offwhite">
                <ContactInfo name="Github" link="https://github.com/Devon-Hill7" 
                  icon={
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                      <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63-.056-.162-.092-.35-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A10.5 10.5 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15 27 8.373 21.627 3 15 3z"/>
                    </svg>
                  }>
                </ContactInfo>
                <ContactInfo name="LinkedIn" link="https://www.linkedin.com/in/devon-hill-3958431b8/" 
                  icon={
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                      <path d="M24 4H6C4.895 4 4 4.895 4 6v18c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM10.954 22H8.004v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 1 1 0-3.439 1.72 1.72 0 0 1 0 3.439zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.772 1.199-1.772 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.54 1.966 3.54 4.522V22z"/>
                    </svg>
                  }>
                </ContactInfo>
                <ContactInfo name="View Resume" link="/resume.pdf"></ContactInfo>
              </div>
            </div>
          </section>
        </div>
      </main>
    </ProjectNavigationProvider>
  );
}
