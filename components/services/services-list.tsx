"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Database, 
  Shield, 
  Cpu, 
  Brain,
  Code,
  LineChart,
  Users,
  Headphones
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    features: ["Native Performance", "Offline Support", "Push Notifications"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance engagement.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    features: ["AWS/Azure/GCP", "Auto-scaling", "Monitoring"]
  },
  {
    icon: Database,
    title: "DevOps Services",
    description: "Streamlined development and deployment processes.",
    features: ["CI/CD", "Container Orchestration", "Infrastructure as Code"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your assets.",
    features: ["Security Audits", "Penetration Testing", "Compliance"]
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device ecosystems for smart businesses.",
    features: ["Sensor Integration", "Real-time Monitoring", "Data Analytics"]
  },
  {
    icon: Brain,
    title: "AI & ML",
    description: "Intelligent automation and data analysis solutions.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions for unique business needs.",
    features: ["Requirements Analysis", "Custom Development", "Maintenance"]
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform data into actionable business insights.",
    features: ["Data Visualization", "Predictive Analytics", "Reporting"]
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting and advisory services.",
    features: ["Technology Assessment", "Digital Strategy", "Process Optimization"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance.",
    features: ["Incident Response", "System Monitoring", "Regular Updates"]
  }
]

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((Service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{Service.title}</h3>
              <p className="text-gray-600 mb-6">{Service.description}</p>
              
              <ul className="space-y-2">
                {Service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
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