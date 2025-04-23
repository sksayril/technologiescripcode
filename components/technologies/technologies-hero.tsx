"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield } from "lucide-react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

interface AnimatedIcon {
  x: number
  y: number
  Icon: typeof Code
}

export default function TechnologiesHero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [icons, setIcons] = useState<AnimatedIcon[]>([])

  useEffect(() => {
    // Initialize particles only on client side
    const initialParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setParticles(initialParticles)

    // Initialize icons
    const iconComponents = [Code, Database, Cloud, Shield]
    const initialIcons = iconComponents.map(Icon => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      Icon
    }))
    setIcons(initialIcons)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-950/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-950/50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ 
                x: icon.x,
                y: icon.y,
                opacity: 0.1
              }}
              animate={{
                x: Math.random() * 1000, // Use fixed values instead of window.innerWidth
                y: Math.random() * 600,  // Use fixed values instead of window.innerHeight
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 2
              }}
              className="absolute text-blue-200/10"
            >
              <icon.Icon size={100} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 rounded-full px-4 py-1 text-sm text-white font-medium mb-6">
            Our Technologies
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cutting-Edge
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" Technologies"}
            </span>
            <br />
            for Modern Solutions
          </h1>
          
          <p className="text-xl text-blue-100 mb-8">
            We leverage the latest and most powerful technologies to deliver exceptional solutions 
            that keep you ahead of the competition.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-blue-200">Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-blue-200">Modern Stack</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-400">10+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}