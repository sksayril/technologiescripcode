"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "A comprehensive financial analytics dashboard with real-time data visualization.",
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"]
  },
  {
    id: 2,
    title: "HealthTrack Mobile App",
    category: "Mobile App",
    description: "Health and fitness tracking application with personalized workout plans.",
    image: "https://images.pexels.com/photos/3846062/pexels-photo-3846062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Firebase", "TensorFlow"]
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online shopping platform with payment integration and inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    id: 4,
    title: "Smart Home IoT System",
    category: "IoT",
    description: "Connected home automation system with AI-powered energy optimization.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "TensorFlow", "MQTT", "AWS IoT"]
  },
  {
    id: 5,
    title: "Enterprise Resource Planning",
    category: "Enterprise",
    description: "Comprehensive ERP solution for manufacturing and supply chain management.",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Java", "Spring Boot", "Oracle", "Docker"]
  },
  {
    id: 6,
    title: "AI-Powered Customer Support",
    category: "AI/ML",
    description: "Intelligent customer service platform with natural language processing capabilities.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "NLP", "TensorFlow", "MongoDB"]
  }
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Enterprise",
  "IoT",
  "AI/ML"
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Projects</span>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Showcase of Our Recent Work
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Explore our portfolio of innovative solutions delivered for clients across various industries.
            </p>
          </motion.div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white font-medium"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}