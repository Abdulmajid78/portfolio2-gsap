import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import type {Metadata} from "next";
import Image from "next/image"
import lms from "../public/projects/Learning management system.jpg"
import {ExternalLink} from "lucide-react";

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
    <section
        className={`min-w-[100vw] h-[80vh] mt-32 md:mt-0 md:h-screen flex items-center justify-center p-4 md:p-8 ${className}`}>
        {children}
    </section>
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

        gsap.to('.card-1', {
            x: 380,
            ease: 'none',
            scrollTrigger: {
                trigger: '.card-1',
                containerAnimation: scrollTween,
                start: 'center 50%',
                end: 'center 20%',
                scrub: true,
            },
        });


        gsap.to('.card-2', {
            x: 320,
            backgroundColor: '#1e90ff',
            ease: 'none',
            scrollTrigger: {
                trigger: '.card-2',
                containerAnimation: scrollTween,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });

        gsap.to('.card-3', {
            x: 320,
            backgroundColor: '#1e90ff',
            ease: 'none',
            scrollTrigger: {
                trigger: '.card-3',
                containerAnimation: scrollTween,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });

        gsap.to('.card-4', {
            y: 320,
            ease: 'none',
            scrollTrigger: {
                trigger: '.card-4',
                containerAnimation: scrollTween,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="projects" className="bg-gray-900 text-gray-200 relative z-50 scroll-mt-24">
            <div className="flex items-center justify-center p-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">My Top Rated Projects</h2>
                </div>
            </div>

            <div ref={containerRef} className="relative h-screen overflow-hidden">
                <div ref={panelsRef} className="flex w-[500%] h-full">
                    {/*lms*/}
                    <AnimatedPanel className="panel bg-slate-500">
                        <div
                            className="animated-panel animated-one w-full h-full rounded-xl flex items-center justify-center">
                            <div
                                className="card card-1 max-w-lg bg-gradient-to-l from-neutral-500/90 to-slate-500 text-gray-200 rounded-xl p-8">
                                <div className="card-body">
                                    <h3 className="card-title text-2xl text-center mb-2">Learning Management System</h3>
                                    <p className="card-text">
                                        Our team has developed a website using React. It communicates with the backend
                                        via Axios to perform data fetching and full CRUD operations. The login and
                                        logout functionalities are also fully implemented.
                                    </p>
                                    <small className="text-md underline text-blue-300">
                                        <a className="flex items-center" target="_blank"
                                           href="https://www.lms-ba.uz"><ExternalLink
                                            className="w-4 h-4 mr-1"/>www.lms-ba.uz</a></small>
                                </div>
                            </div>
                        </div>
                    </AnimatedPanel>
                    {/*course*/}
                    <AnimatedPanel className="panel bg-blue-600">
                        <div
                            className="animated-panel animated-two w-full h-full rounded-xl flex items-center justify-center">
                            <div
                                className="card card-2 max-w-lg bg-gradient-to-l from-neutral-500/90 to-blue-600 text-gray-200 rounded-xl p-8">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-2">Textile course</h3>
                                    <p className="card-text">
                                        My first account has been uploaded via Django! All site information is
                                        manageable through the Django admin panel, and any data submitted through the
                                        form is
                                        sent directly to the client's Telegram account.
                                    </p>
                                    <small className="text-md underline text-blue-300">
                                        <a className="flex items-center" target="_blank"
                                           href="https://textile-course.uz"><ExternalLink
                                            className="w-4 h-4 mr-1"/>www.textile-course.uz</a></small>
                                </div>
                            </div>
                        </div>
                    </AnimatedPanel>
                    {/*alfa karton*/}
                    <AnimatedPanel className="panel bg-green-600">
                        <div
                            className="animated-panel animated-three w-full h-full rounded-xl flex items-center justify-center">
                            <div
                                className="card card-3 max-w-lg bg-gradient-to-l from-neutral-500/90 to-green-600 text-gray-200 rounded-xl p-8">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-2">Alfa Karton</h3>
                                    <p className="card-text">
                                        I handled the design of this website, deployed it on a Linux server, and secured
                                        it with an HTTPS certificate using Certbot.
                                    </p>
                                    <small className="text-md underline text-blue-300">
                                        <a className="flex items-center" target="_blank"
                                           href="https://www.alfakarton.uz"><ExternalLink
                                            className="w-4 h-4 mr-1"/>www.alfakarton.uz</a></small>
                                </div>
                            </div>

                        </div>
                    </AnimatedPanel>

                    <AnimatedPanel className="panel bg-yellow-600">
                        <div
                            className="animated-panel animated-four w-full h-full rounded-xl flex items-center justify-center">
                            <div
                                className="card card-4 max-w-lg bg-gradient-to-l from-neutral-500/90 to-yellow-600 text-gray-200 rounded-xl p-8">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-2">To'rt Fasl Fayz</h3>
                                    <p className="card-text">
                                        A full-stack e-commerce solution with user authentication, product management,
                                        and payment integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedPanel>

                    {/*<AnimatedPanel className="panel bg-green-600">*/}
                    {/*    <div className="max-w-lg">*/}
                    {/*        codeblock*/}
                    {/*    </div>*/}
                    {/*</AnimatedPanel>*/}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;