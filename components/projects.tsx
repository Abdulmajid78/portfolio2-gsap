"use client"

import {useState} from "react"
import Image from "next/image"
import {ExternalLink, Github} from "lucide-react"
import {Button} from "@/components/ui/button"

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
        title: "Consept solution",
        description:
            "Is",
        technologies: ["HTML", ""],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/n8p53mozxmokdwe0zzec1/Screenshot-from-2025-05-12-16-00-43.png?rlkey=8q0xak72vklvxjimi2wjk1clc&st=vn46cicg",
        liveUrl: "https://www.conceptsolutions.uz/",
    },
    {
        id: 2,
        title: "Krate Design",
        description:
            "I uploaded my project using HTML and CSS on this website. All data images, texts, blogs, team-info are redirected via javascript. Reused sections are also drawn using js",
        technologies: ["HTML", "CSS", "JS", "Responsive", "AOS", "Designers web site"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/j8e3k4m51px0sjgcl25t1/Screenshot-from-2024-03-11-15-46-29.png?rlkey=l3lot152k7f6apce1x5re0zks&dl=0",
        liveUrl: "https://abduma-krate.netlify.app/",
        githubUrl: "https://github.com/Abdulmajid78/page-krate",
    },
    {
        id: 3,
        title: "Digital Marketing App",
        description: "The website offers services that help you grow your business. Landing page deployed fully in React. There we can see different animations",
        technologies: ["CSS", "JS", "React", "AOS", "Landing page"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/fppc8lfg6towyjvkopsyr/Screenshot-from-2024-03-12-18-16-14.png?rlkey=69ulpdc5zah7vowvq54018iwu&dl=0",
        liveUrl: "https://abduma-digital-marketing.netlify.app",
        githubUrl: "https://github.com/Abdulmajid78/digital-marketing",
    },
    {
        id: 4,
        title: "Royal Ice cream",
        description: "dasadsdas",
        technologies: ["Landing page"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/ps91gpzkuvk9k0woeardj/Screenshot-from-2025-05-12-16-36-53.png?rlkey=qmtvfb47tm994ijd6195sgial&st=71just57\n",
        liveUrl: "https://royal.uz/",
    },
    {
        id: 5,
        title: "Himplast Corp",
        description: "sad",
        technologies: ["Cnding page"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/pvaez5v87gsaccivzkl4n/Screenshot-from-2025-05-12-15-54-14.png?rlkey=3i18lyohwo0tvo3ykrx0muund&st=iizm94fj",
        liveUrl: "https://himplast.uz/",
        // githubUrl: "https://github.com/Abdulmajid78/digital-marketing",
    },
    {
        id: 6,
        title: "Movie Flicks",
        description:
            "People can search a new movie or serials to see for night\n - Added Trending page so we can see what's trending. - Deployed on \"Netlify\"",
        technologies: ["HTML", "CSS", "ReactStrap", "Axios", "Material UI Skleton", "Responsive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/x2u0nijmso58ey8z8vqum/Screenshot-from-2024-03-11-15-00-54.png?rlkey=177j7xxq3wipovzre8febxg5u&dl=0",
        liveUrl: "https://abduma-movie-flicks.netlify.app",
        githubUrl: "https://github.com/Abdulmajid78/know-movie",
    },
    {
        id: 7,
        title: "FreightguardBusters",
        description:
            "sadsadadsa",
        technologies: ["HTML", "CSS", "ReactStrap", "Axios", "Material UI Skleton", "Responsive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/bm0t7fkdpmzw4etbo3jpn/Screenshot-from-2025-05-12-15-52-56.png?rlkey=24sp7zs95d7ci43bbllofgosh&st=lfgcecmp",
        liveUrl: "https://freightguardbusters.com/",
    },
    {
        id: 8,
        title: "Diyor Machine",
        description:
            "P",
        technologies: ["HTML", "CSS", "Django", "DRF", "Responsive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/djnea5jb8ocgg9qil522r/Screenshot-from-2025-05-12-17-27-23.png?rlkey=nbq4qu3juuirssiqe41nlttf8&st=8hmqzotm",
        liveUrl: "https://diyormachine.uz",
        // githubUrl: "https://github.com/Abdulmajid78/know-movie",
    },
    {
        id: 9,
        title: "Cbats - conference",
        description:
            "P",
        technologies: ["HTML", "CSS", "Django", "DRF", "Responsive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/fpp100ew19h2p9cizz60x/Screenshot-from-2025-05-12-17-01-24.png?rlkey=30qirlzl186rni9iq170nyyxk&st=q8bq9oxk\n",
        liveUrl: "https://https://cbats-conference.uz",
    },
    {
        id: 10,
        title: "Weather App",
        description: "Developer Weather Website made in React. Fully customisable and dynamic, easily can find any country and changes icons",
        technologies: ["React", "JavaScript", "Axios", "Netlify", "Responsive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/j4odp5l0gne9gnaeozhf7/Screenshot-from-2024-03-11-15-42-54.png?rlkey=oqnkt1eutlq4jwy6409oqr8s1&dl=0",
        liveUrl: "https://abduma-weather.netlify.app",
        githubUrl: "https://github.com/Abdulmajid78/my_weather",
    },
    {
        id: 11,
        title: "Hayat cabel",
        description: "Dens",
        technologies: ["Rensive"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/eyb3vt7e8i1v1x7b4ov41/Screenshot-from-2025-05-12-15-59-02.png?rlkey=390d93udgubk826c3erss9rxj&st=fotjswlc",
        liveUrl: "https://hayatkabel.uz",
    },
    {
        id: 12,
        title: "Printing club",
        description:
            "- An Android App that loads list of feeds from a **paginated** API and shows in a RecyclerView.\n - Uses the **MVVM** architecture.\n - Uses **Paging 3** library along with other Architecture Components.",
        technologies: ["HTML", "CSS", "Sass", "JS", "React", "i18n", "Flow"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/p31hdi3y8ql7wyz7emdgd/Screenshot-from-2024-03-15-02-30-08.png?rlkey=95nb83unnnyjal430snn8zi0h&dl=0",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/Abdulmajid78/printing-club",
    },
    {
        id: 13,
        title: "Crud Django",
        description: "- A simple Task Tracker web app made with **Angular 12**.\n - Uses **mock JSON server** to get, add, delete or update tasks.",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        imageUrl: "https://dl.dropboxusercontent.com/scl/fi/tnidxp5z8plc4l2y6udls/Screenshot-from-2024-03-16-17-18-49.jpg?rlkey=3w4w5w9szhinjd6s8lte2unno&dl=0",
        githubUrl: "https://github.com/Abdulmajid78/django_crud",
    }
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
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
                {!showAll && projects.length > 6 && (
                    <div className="mt-12 text-center">
                        <Button className="hover:text-[#6366f1] cursor-pointer" onClick={() => setShowAll(true)}
                                variant="outline">
                            View All Projects
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

function ProjectCard({project}: { project: Project }) {
    return (
        <div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-56">
                <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover"/>
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold transition-colors duration-200 hover:text-[#6366f1] cursor-pointer">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech}
                              className="px-2 py-1 bg-gray-700 text-xs hover:bg-[#6366f1] cursor-pointer text-gray-300 rounded-full transition-color duration-300">
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
                            <ExternalLink className="w-4 h-4 mr-1"/>
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
                            <Github className="w-4 h-4 mr-1"/>
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

