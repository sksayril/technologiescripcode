"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechGlobe Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Working with Cripcocode Technologies has been transformative for our business. Their expertise in digital solutions and commitment to excellence is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, FinSmart Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "The team at Cripcocode delivered beyond our expectations. Their innovative approach to problem-solving and attention to detail sets them apart.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, Retail Innovations",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Our e-commerce platform has seen remarkable growth since partnering with Cripcocode. Their technical expertise and strategic insights have been invaluable.",
    rating: 5
  }
]

export default function TestimonialsList() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === activeIndex && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl p-8 md:p-12 relative"
                >
                  <Quote className="absolute top-8 left-8 text-blue-100 w-24 h-24" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
                    <div className="text-center md:text-left">
                      <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex justify-center md:justify-start mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}