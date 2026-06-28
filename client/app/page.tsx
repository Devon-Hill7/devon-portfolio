import NavBar from "@/components/ui/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import { ProjectNavigationProvider } from "@/components/ProjectNavigationProvider";
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <ProjectNavigationProvider>
      <main>
        <div className="flex flex-col min-h-screen portfolio-background">
          <NavBar/>
          <HeroSection></HeroSection>
          <ProjectsSection></ProjectsSection>
          <TechStackSection></TechStackSection>
          <AboutSection></AboutSection>
          <ContactSection></ContactSection>
          
        </div>
      </main>
    </ProjectNavigationProvider>
  );
}
