import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main>
      <div className= "bg-background flex items-center flex-col min-h-screen">
        <NavBar/>
        <div className="flex1 flex flex-col items-center"></div>
      </div>
    </main>
  );
}
