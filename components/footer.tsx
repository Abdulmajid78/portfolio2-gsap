import Link from "next/link"
import {Github, Linkedin, Mail} from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">&copy; {new Date().getFullYear()} Abdumajid. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className='flex space-x-4'>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5"/>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5"/>
                            </Link>
                            <Link href="mailto:hello@example.com" className="hover:text-white transition-colors">
                                <Mail className="w-5 h-5"/>
                            </Link>
                        </div>

                        <div className="flex justify-end"><a className="text-sm font-medium text-blue-600 underline"
                                                             target="_blank" href="https://old.abduma.uz/">
                            Old design</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

