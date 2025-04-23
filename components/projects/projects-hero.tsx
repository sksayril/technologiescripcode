"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Project collaboration"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 rounded-full px-4 py-1 text-sm text-white font-medium mb-6">
            Our Projects
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Ideas into
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" Reality"}
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8">
            Explore our portfolio of successful projects that showcase our expertise
            in delivering innovative solutions across various industries.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-200">Industries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}