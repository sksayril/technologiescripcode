"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const showcases = [
  {
    title: "E-Commerce Platform",
    description: "Built with Next.js, Node.js, and MongoDB",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"]
  },
  {
    title: "Healthcare Management System",
    description: "Developed using React, Python, and PostgreSQL",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Python", "PostgreSQL", "Docker", "Azure"]
  },
  {
    title: "IoT Dashboard",
    description: "Created with Vue.js, Go, and Time Series DB",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Vue.js", "Go", "InfluxDB", "Grafana", "Kubernetes"]
  }
]

export default function TechnologiesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology in Action</h2>
            <p className="text-gray-600 text-lg">
              See how we leverage our technology stack to build powerful solutions for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={showcase.image}
                  alt={showcase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">{showcase.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{showcase.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {showcase.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}