"use client"

import {useEffect, useRef} from "react"
import {Github, Instagram, Linkedin, Mail} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Download} from "lucide-react"
import {Education} from "@/components/education"
import {TechnicalSkills} from "@/components/technical-skills"
import {Projects} from "@/components/projects"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import HorizontalScroll from "@/components/HorizontalScroll";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const heroRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const educationRef = useRef(null)
    const projectsRef = useRef(null)

    useEffect(() => {
        const hero = heroRef.current
        const about = aboutRef.current
        const skills = skillsRef.current
        const education = educationRef.current
        const projects = projectsRef.current

        gsap.from(hero, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        })

        gsap.from(about, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: "top 80%",
            },
        })

        gsap.from(skills, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: skills,
                start: "top 80%",
            },
        })

        gsap.from(education, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: education,
                start: "top 80%",
            },
        })

        gsap.from(projects, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: projects,
                start: "top 80%",
            },
        })
    }, [])

    function DownloadResume() {
        const resumeUrl = "https://drive.google.com/uc?export=download&id=1NnFzdojMQFcR6Qh8lg6rWggZap4yb2uW";

        const link = document.createElement("a");
        link.href = resumeUrl;
        link.target = "_blank";
        link.download = "Abdumajid's_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }



return (
    <>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, I'm Abdumajid</h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Frontend Developer crafting beautiful web experiences
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <Link
                            href="https://github.com/Abdulmajid78"
                            className="text-gray-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-6 h-6"/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/z7777_77z/"
                            className="text-gray-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-6 h-6"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/abdumajid-masixullayev-00456922b/"
                            className="text-gray-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                        <Link href="mailto:abdumajed@mail.ru"
                              className="text-gray-400 hover:text-white transition-colors">
                            <Mail className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"/>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-900 bg-opacity-50 scroll-mt-14">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image Section */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src="/placeholder.svg?height=600&width=600"
                            alt="Abdumajid Masikhullaev"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight transition-colors duration-200 text-[#6366f1] cursor-pointer">About
                                Me</h2>
                            <p className="text-gray-400">Frontend Developer & UI/UX Enthusiast</p>
                        </div>

                        <div className="space-y-4 text-gray-300">
                            <p>
                                Hello! I'm Abdumajid, a passionate Frontend Developer based in Uzbekistan. I
                                specialize in building
                                exceptional digital experiences that combine clean code with thoughtful design.
                            </p>

                            <p>
                                With a strong foundation in modern web technologies like React, Next.js, and
                                TypeScript, I create
                                responsive and performant web applications that users love to interact with.
                            </p>

                            <p>
                                My goal is to continue growing as a developer, embracing new technologies and best
                                practices to
                                deliver cutting-edge solutions that make a positive impact on users' lives.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Button onClick={DownloadResume} className="group hover:text-[#6366f1] cursor-pointer"
                                variant="outline">
                            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce "/>
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <HorizontalScroll/>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-24 bg-gray-800 bg-opacity-50">
            <div className="container mx-auto px-4">
                <TechnicalSkills/>
            </div>
        </section>

        {/* Education Section */}
        <section>
            <Education/>
        </section>

        {/* Projects Section */}
        <section>
            <Projects/>
        </section>
    </>
)
}

