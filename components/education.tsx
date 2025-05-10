import {GraduationCap, Calendar} from "lucide-react"

interface EducationItem {
    degree: string
    institution: string
    year: string
    description: string
}

const educationData: EducationItem[] = [
    {
        degree: "Full Stack Web Development Bootcamp",
        institution: "Bobir Akilkhanov Tech Academy",
        year: "2022-2023",
        description:
            "Intensive 9-month program covering modern web technologies including Python, Django, HTML, CSS, Bootstrap, DRF and database management.",
    },
    {
        degree: "Isystem Learning center",
        institution: "Front-end Development",
        year: "2024",
        description:
            "Focused on Frontend developing, JS, Sass and React. Participated in various hackathons and coding competitions.",
    },

    // Add more education items as needed
]

export function Education() {
    return (
        <section id="education" className="py-24 bg-gray-900 bg-opacity-50 scroll-mt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
                <div className="space-y-12">
                    {educationData.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                                    <GraduationCap className="w-6 h-6"/>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold transition-colors duration-200 hover:text-[#6366f1] cursor-pointer">{item.degree}</h3>
                                <p className="text-gray-400">{item.institution}</p>
                                <div className="flex items-center text-gray-500 mt-1">
                                    <Calendar className="w-4 h-4 mr-2"/>
                                    <span>{item.year}</span>
                                </div>
                                <p className="mt-2 text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

