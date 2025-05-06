"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 6,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 8,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 9,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 10,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 11,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 12,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 13,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 14,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  // Add more projects here...
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section className="py-24 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {!showAll && projects.length > 6 && (
          <div className="mt-12 text-center">
            <Button className="hover:text-[#6366f1] cursor-pointer" onClick={() => setShowAll(true)} variant="outline">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold transition-colors duration-200 hover:text-[#6366f1] cursor-pointer">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-700 text-xs hover:bg-[#6366f1] cursor-pointer text-gray-300 rounded-full transition-color duration-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#6366f1] cursor-pointer transition-colors flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#6366f1] cursor-pointer transition-colors flex items-center"
            >
              <Github className="w-4 h-4 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

