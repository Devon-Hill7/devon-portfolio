import NavBar from "@/components/ui/NavBar";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <div className= "bg-background flex flex-col min-h-screen">
        <NavBar/>
        <div className="flex1 flex flex-col w-1/2 mt-15 gap-20 ml-15 ">
          <h2 className="text-3xl font-spacegrotesk text-offwhite">Devon Hill</h2>
          <h1 className="text-7xl font-bold text-offwhite">Full-Stack Developer Building Modern Web Applications</h1>
          <p className="text-xl font-inter text-offwhite">Focused on developing scalable full-stack applications with secure backend systems, responsive frontend designs, and modern web technologies.</p>
        </div>
        <div className="w-full items-center justify-center flex mt-20">
          <Button variant="default" size="xl" className="text-2xl">View Projects</Button>
        </div>
      </div>
    </main>
  );
}
