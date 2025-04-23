"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsHero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Client testimonials"
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
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 rounded-full px-4 py-1 text-sm text-white font-medium mb-6">
            Client Testimonials
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" Say About Us"}
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8">
            Discover why leading businesses trust us with their technology needs
            and digital transformation journeys.
          </p>
          
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}