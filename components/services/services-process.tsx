"use client"

import { motion } from "framer-motion"
import { 
  Search,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake
} from "lucide-react"

const process = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by understanding your business needs and objectives through detailed consultation.",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: PenTool,
    title: "Planning",
    description: "Our team creates a comprehensive project plan and design strategy.",
    color: "from-yellow-500 to-yellow-400"
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build your solution using the latest technologies and best practices.",
    color: "from-blue-700 to-blue-500"
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous testing ensures quality and reliability of the solution.",
    color: "from-blue-800 to-blue-600"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "We launch your solution and ensure smooth transition to production.",
    color: "from-yellow-600 to-yellow-500"
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Ongoing maintenance and support to keep your solution running optimally.",
    color: "from-blue-900 to-blue-700"
  }
]

export default function ServicesProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-600 text-lg">
              We follow a systematic approach to deliver high-quality solutions that meet your business needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-r ${step.color} p-6`}>
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white/60 text-sm font-medium">Step {index + 1}</span>
                <h3 className="text-xl font-bold text-white mt-1">{step.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}