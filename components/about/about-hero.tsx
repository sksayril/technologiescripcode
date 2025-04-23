"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovating the Future of Technology
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              At Cripcocode Technologies, we're passionate about creating innovative solutions 
              that drive digital transformation and empower businesses to thrive in the modern world.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-blue-200">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}