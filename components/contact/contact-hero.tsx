"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from "lucide-react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ContactHero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Initialize particles only on client side
    const initialParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setParticles(initialParticles)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        
        {/* Animated particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [particle.x, particle.x + particle.vx * 100],
              y: [particle.y, particle.y + particle.vy * 100],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 rounded-full px-4 py-1 text-sm text-white font-medium mb-6">
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Start Your
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" Digital Journey"}
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-12">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-blue-200">+91 (92) 6541-7748</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-blue-200">info.cripcocode@gmail.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-200">Amadpur School Para, Memari, Burdwan</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}