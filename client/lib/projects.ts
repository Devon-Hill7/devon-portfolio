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
    image: "/images/MySpanishDiaryScreenshot.png",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Java", "JWT"],
    repoUrl: "https://github.com/Devon-Hill7/MySpanishDiary",
  },
{
    id: "portfolio",
    title: "Portfolio",
    description:
      "Full-stack journaling app with grammar feedback and secure user authentication",
    image: "/images/MySpanishDiaryScreenshot.png",
    techStack: ["Next.js", "TypeScript", "TailWindCSS"],
    repoUrl: "https://github.com/Devon-Hill7/MySpanishDiary",
  }
  

  
]