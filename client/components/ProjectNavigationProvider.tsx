"use client"

import { createContext, useContext, useRef, ReactNode } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { projects } from "@/lib/projects"

type ProjectNavigationContextType = {
  setCarouselApi: (api: CarouselApi | null) => void
  goToProject: (projectId: string) => void
}

const ProjectNavigationContext =
  createContext<ProjectNavigationContextType | null>(null)

export function ProjectNavigationProvider({
  children,
}: {
  children: ReactNode
}) {
  const carouselApiRef = useRef<CarouselApi | null>(null)

  const setCarouselApi = (api: CarouselApi | null) => {
    carouselApiRef.current = api
  }

  const goToProject = (projectId: string) => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })

    const index = projects.findIndex(
      (project) => project.id === projectId
    )

    if (index !== -1) {
      carouselApiRef.current?.scrollTo(index)
    }
  }

  return (
    <ProjectNavigationContext.Provider
      value={{ setCarouselApi, goToProject }}
    >
      {children}
    </ProjectNavigationContext.Provider>
  )
}

export function useProjectNavigation() {
  const context = useContext(ProjectNavigationContext)

  if (!context) {
    throw new Error(
      "useProjectNavigation must be used inside ProjectNavigationProvider"
    )
  }

  return context
}