"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "SK Sayril Amed",
    position: "CEO & Founder & AI  Engineer",
    image: "https://nexora-ai.co.in/assets/sayril-BvgxvpOi.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Vaibavh Singh",
    position: "Frontend Developer",
    image: "https://nexora-ai.co.in/assets/vaibahvhimage-removebg-preview-DG6iWZk9.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Ali Chauhan",
    position: "Backned Developer",
    image: "https://nexora-ai.co.in/assets/aliimage-removebg-preview-Cjch0B1t.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Khushi Shah",
    position: "UI UX Designer",
    image: "https://nexora-ai.co.in/assets/khushiimage-B01szx8A.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
]

export default function AboutTeam() {
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
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">
              Our talented team of experts is dedicated to delivering exceptional results 
              and driving innovation in everything we do.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}