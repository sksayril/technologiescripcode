"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: <Target className="w-12 h-12" />,
    title: "Mission-Driven",
    description: "We're committed to delivering innovative solutions that drive real business value."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Client-Focused",
    description: "Our clients' success is our success. We build lasting partnerships based on trust."
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovation",
    description: "We constantly push boundaries to create cutting-edge solutions."
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Excellence",
    description: "Quality is at the heart of everything we do, from code to customer service."
  }
]

export default function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide our work and shape our culture, ensuring we deliver 
              the best possible solutions for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-6 mx-auto">{value.icon}</div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}