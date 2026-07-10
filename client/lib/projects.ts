type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  repoUrl: string
  liveUrl?: string
}


export const projects: Project[] = [
  {
    id: "spanish-diary",
    title: "My Spanish Diary",
    description:
      "Full-stack journaling app with grammar feedback and secure user authentication",
    image: "/images/MySpanishDiaryHomeScreen.png",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Java", "JWT"],
    repoUrl: "https://github.com/Devon-Hill7/MySpanishDiary",
  },
{
    id: "portfolio",
    title: "Portfolio",
    description:
      "Source code for this portfolio, featuring reusable components, responsive design, and a focus on clean user experience",
    image: "/images/PortfolioHero.png",
    techStack: ["Next.js", "TypeScript", "TailWindCSS"],
    repoUrl: "https://github.com/Devon-Hill7/devon-portfolio",
  }
  

  
]