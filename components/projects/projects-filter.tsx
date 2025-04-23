"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const filters = {
  categories: ["All", "Web", "Mobile", "Enterprise", "IoT", "AI/ML"],
  technologies: ["React", "Node.js", "Python", "Java", "AWS", "Docker"],
  industries: ["Healthcare", "Finance", "E-commerce", "Education", "Manufacturing"]
}

export default function ProjectsFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    category: "All",
    technologies: [] as string[],  // Add explicit type here
    industry: "All"
  })

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Search bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={20} />
                <span>Filters:</span>
              </div>
              
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {filters.categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilters.category === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilters({ ...activeFilters, category })}
                    className={`rounded-full ${
                      activeFilters.category === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Advanced filters */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {filters.technologies.map((tech) => (
                      <Button
                        key={tech}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const techs = activeFilters.technologies.includes(tech)
                            ? activeFilters.technologies.filter(t => t !== tech)
                            : [...activeFilters.technologies, tech]
                          setActiveFilters({ ...activeFilters, technologies: techs })
                        }}
                        className={`rounded-full ${
                          activeFilters.technologies.includes(tech)
                            ? "bg-blue-100 text-blue-600 border-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {filters.industries.map((industry) => (
                      <Button
                        key={industry}
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveFilters({ ...activeFilters, industry })}
                        className={`rounded-full ${
                          activeFilters.industry === industry
                            ? "bg-blue-100 text-blue-600 border-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {industry}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}