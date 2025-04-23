"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A full-featured online shopping platform with payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Healthcare Management",
    category: "Enterprise",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Comprehensive healthcare management system for hospitals.",
    technologies: ["React", "Python", "PostgreSQL", "Docker"]
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mobile application for tracking workouts and nutrition.",
    technologies: ["React Native", "Firebase", "Node.js"]
  },
  {
    id: 4,
    title: "Smart Home IoT",
    category: "IoT",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "IoT solution for home automation and energy management.",
    technologies: ["Python", "MQTT", "React", "AWS IoT"]
  },
  {
    id: 5,
    title: "AI Customer Service",
    category: "AI/ML",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "AI-powered customer service chatbot platform.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"]
  },
  {
    id: 6,
    title: "Supply Chain Platform",
    category: "Enterprise",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "End-to-end supply chain management solution.",
    technologies: ["Vue.js", "Java", "PostgreSQL", "Docker"]
  }
]

const categories = ["All", "Web Development", "Mobile", "Enterprise", "IoT", "AI/ML"]

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 flex items-end p-6 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}