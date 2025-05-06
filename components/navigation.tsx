"use client"

import {useState} from "react"
import Link from "next/link"
import {Menu, X} from "lucide-react"
import {usePathname} from "next/navigation"
import logo from "../public/logo.svg"
import Image from "next/image"

const navItems = [
    {href: "/", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#education", label: "Education"},
    {href: "https://drive.google.com/file/d/1NnFzdojMQFcR6Qh8lg6rWggZap4yb2uW/view?usp=sharing", label: "Resume"},
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="fixed top-0 z-40 w-full bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4 mt-1">
                    {" "}
                    {/* Added mt-1 for top margin */}
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                        <Image src={logo} alt="my logo" width={72} height={72}/>
                    </Link>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    target={item.href.length > 20 ? "_blank" : ""}
                                    className={`text-sm font-medium transition-colors ${
                                        item.label === "Resume"
                                            ? "text-[#6366f1] underline"
                                            : pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                                    }`}

                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Navigation */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X/> : <Menu/>}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <ul className="py-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block py-2 text-gray-300 hover:text-white transition-colors ${
                                            pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

