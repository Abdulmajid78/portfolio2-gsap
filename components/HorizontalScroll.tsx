import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import type {Metadata} from "next";
import Image from "next/image"
import lms from "../public/projects/Learning management system.jpg"

export const metadata: Metadata = {
    keywords: [
        "website development Uzbekistan",
        "web design services in Uzbekistan",
        "buy website in Uzbekistan",
        "hire web developer Uzbekistan",
        "order a website Tashkent",
        "sayt yasash Tashkent",
        "sayt tayyorlash xizmatlari",
        "arzon sayt yasash",
        "portfolio sayt ishlab chiqish",
        "internet magazin yaratish"
    ]
}

gsap.registerPlugin(ScrollTrigger);

const AnimatedPanel = ({className, children}: { className?: string; children: React.ReactNode }) => (
    <section className={`min-w-[100vw] h-[80vh] mt-32 md:mt-0 md:h-screen flex items-center justify-center p-4 md:p-8 ${className}`}>
        {children}
    </section>
);

const Box = ({id, className}: { id: string; className?: string }) => (
    <div className={`w-24 h-20 rounded-lg flex items-center justify-center font-bold ${className}`}>
        {`box-${id}`}
    </div>
);

const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !panelsRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>('.panel');

        const scrollTween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: '+=3000',
            },
        });

        // Animation for box-1
        gsap.to('.box-1', {
            y: -130,
            duration: 2,
            ease: 'elastic',
            scrollTrigger: {
                trigger: '.box-1',
                containerAnimation: scrollTween,
                start: 'left center',
                toggleActions: 'play none none reset',
            },
        });

        // Animation for box-2
        gsap.to('.box-2', {
            y: -120,
            backgroundColor: '#1e90ff',
            ease: 'none',
            scrollTrigger: {
                trigger: '.box-2',
                containerAnimation: scrollTween,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });

        // Toggle class for box-3
        ScrollTrigger.create({
            trigger: '.box-3',
            containerAnimation: scrollTween,
            toggleClass: 'active',
            start: 'center 60%',
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="projects" className="bg-gray-900 text-gray-200 scroll-mt-24">
            <div className="flex items-center justify-center p-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">My Top Rated Projects</h2>
                </div>
            </div>

            <div ref={containerRef} className="relative h-screen overflow-hidden">
                <div ref={panelsRef} className="flex w-[500%] h-full">
                    {/*lms*/}
                    <AnimatedPanel className="panel bg-slate-500">
                        <div className="animated-panel animated-one w-full h-full rounded-xl flex items-center justify-center">
                            <div
                                className="card max-w-lg bg-gradient-to-l from-neutral-500/90 to-slate-500 text-gray-200 rounded-xl p-8">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-2">Learning Management System</h3>
                                    <p className="card-text">
                                        A full-stack e-commerce solution with user authentication, product management,
                                        and payment integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedPanel>
                    {/*course*/}
                    <AnimatedPanel className="panel bg-blue-600">
                        <div className="animated-panel animated-two w-full h-full rounded-xl flex items-center justify-center">
                                <div className="card max-w-lg bg-gradient-to-l from-neutral-500/90 to-blue-600 text-gray-200 rounded-xl p-8">
                                    <div className="card-body">
                                        <h3 className="card-title text-center mb-2">Textile course</h3>
                                        <p className="card-text">
                                            A full-stack e-commerce solution with user authentication, product management, and payment integration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </AnimatedPanel>
                    {/*alfa karton*/}
                    <AnimatedPanel className="panel bg-green-600">
                        <div className="animated-panel animated-three w-full h-full rounded-xl flex items-center justify-center">
                                <div className="card max-w-lg bg-gradient-to-l from-neutral-500/90 to-green-600 text-gray-200 rounded-xl p-8">
                                    <div className="card-body">
                                        <h3 className="card-title text-center mb-2">Alfa Karton</h3>
                                        <p className="card-text">
                                            A full-stack e-commerce solution with user authentication, product management, and payment integration.
                                        </p>
                                    </div>
                                </div>

                            <Box id="2" className="bg-white text-gray-900 mt-4 box-2"/>
                        </div>
                    </AnimatedPanel>

                    <AnimatedPanel className="panel bg-purple-600">
                        <div className="max-w-lg">
                            codeblock
                            <Box id="3" className="bg-white text-gray-900 mt-4 box-3 transition-colors duration-300"/>
                        </div>
                    </AnimatedPanel>

                    <AnimatedPanel className="panel bg-green-600">
                        <div className="max-w-lg">
                            codeblock
                        </div>
                    </AnimatedPanel>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;