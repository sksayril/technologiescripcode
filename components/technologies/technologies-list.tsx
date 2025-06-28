"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    techs: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    category: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    techs: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Express.js", logo: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fhpg6if7btrwilqkidqbe.png" },
      // { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      // { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ]
  },
  {
    category: "Database Technologies",
    description: "Managing data with efficient and reliable solutions",
    techs: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      // { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Deploying and managing scalable infrastructure",
    techs: [
      { name: "AWS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80l73TdYIEWsMWflGX19pkqw5VbE61MSS5g&s" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
    ]
  },
  {
    category: "AI/ML",
    description: "Development using AI generated tools for each and every product",
    techs: [
      
      { name: "ChatGPT", logo: "https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg" },
      { name: "Phython", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Claude", logo: "https://www.fahimai.com/wp-content/uploads/2024/06/Untitled-design-7.png" },
      { name: "Deepseek", logo: "data:image/jpeg;base64,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" },
     
    ]
  }
  
]

export default function TechnologiesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {technologies.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
              <p className="text-gray-600 text-lg">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {category.techs.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mb-4">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}