"use client"

import { motion } from "framer-motion"
import { 
  Layers, 
  Database, 
  Cloud, 
  Shield, 
  Server, 
  Monitor,
  Smartphone,
  Globe
} from "lucide-react"

const stack = [
  {
    icon: Monitor,
    title: "Frontend Stack",
    description: "Modern and responsive user interfaces",
    items: [
      "React / Next.js",
      "Vue.js / Nuxt.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    icon: Server,
    title: "Backend Stack",
    description: "Robust server-side applications",
    items: [
      "Node.js / Express",
      "Python / Django",
      "Java Spring Boot",
      "Go",
      "PHP Laravel"
    ]
  },
  {
    icon: Database,
    title: "Database Stack",
    description: "Efficient data management solutions",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Stack",
    description: "Scalable cloud infrastructure",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Digital Ocean",
      "Heroku"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Stack",
    description: "Cross-platform mobile development",
    items: [
      "React Native",
      "Flutter",
      "Ionic",
      "Native Android",
      "Native iOS"
    ]
  },
  {
    icon: Shield,
    title: "Security Stack",
    description: "Comprehensive security measures",
    items: [
      "OAuth 2.0",
      "JWT",
      "SSL/TLS",
      "WAF",
      "Penetration Testing"
    ]
  },
  {
    icon: Globe,
    title: "DevOps Stack",
    description: "Continuous integration and deployment",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform"
    ]
  },
  {
    icon: Layers,
    title: "Testing Stack",
    description: "Quality assurance and testing",
    items: [
      "Jest",
      "Cypress",
      "Selenium",
      "JUnit",
      "PyTest"
    ]
  }
]

export default function TechnologiesStack() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Stack</h2>
            <p className="text-gray-600 text-lg">
              We use a comprehensive stack of modern technologies to build robust and scalable solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              <ul className="space-y-2">
                {item.items.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}