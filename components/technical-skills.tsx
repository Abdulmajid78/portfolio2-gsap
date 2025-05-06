import { Code, Palette, Server, Globe, Cpu } from "lucide-react"

interface Skill {
  name: string
  category: "frontend" | "backend" | "design" | "tools" | "other"
}

const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "SASS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Git", category: "tools" },
  { name: "Webpack", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Docker", category: "tools" },
]

const categoryIcons = {
  frontend: <Code className="w-6 h-6" />,
  backend: <Server className="w-6 h-6" />,
  design: <Palette className="w-6 h-6" />,
  tools: <Cpu className="w-6 h-6" />,
  other: <Globe className="w-6 h-6" />,
}

export function TechnicalSkills() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-3">
              {categoryIcons[category]}
              <h3 className="text-xl font-semibold capitalize">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span key={skill.name} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

