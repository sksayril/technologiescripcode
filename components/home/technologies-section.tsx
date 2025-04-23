"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Technology categories with logos
const technologies = [
  {
    category: "Frontend",
    description: "Creating responsive and interactive user experiences",
    logos: [
      { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { id: 2, name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { id: 3, name: "Vue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { id: 4, name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { id: 5, name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    category: "Backend",
    description: "Building robust server-side applications and APIs",
    logos: [
      { id: 1, name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { id: 2, name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { id: 3, name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { id: 4, name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { id: 5, name: "Ruby", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" }
    ]
  },
  {
    category: "Database",
    description: "Managing data storage and retrieval efficiently",
    logos: [
      { id: 1, name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { id: 2, name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { id: 3, name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { id: 4, name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { id: 5, name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    category: "DevOps",
    description: "Streamlining development and deployment processes",
    logos: [
      { id: 1, name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { id: 2, name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { id: 3, name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { id: 4, name: "Azure", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { id: 5, name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
    ]
  }
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Add animation effect to logos in each category
    const categories = document.querySelectorAll('.logo-carousel');
    categories.forEach((category, index) => {
      const logos = category.querySelectorAll('.logo-item');
      
      // Staggered animation effect with different directions
      const direction = index % 2 === 0 ? 1 : -1;
      let delay = 0;
      
      logos.forEach((logo) => {
        const elem = logo as HTMLElement;
        elem.style.transitionDelay = `${delay}ms`;
        elem.style.transform = `translateX(${direction * 20}px)`;
        elem.style.opacity = '0';
        
        setTimeout(() => {
          elem.style.transform = 'translateX(0)';
          elem.style.opacity = '1';
        }, 100);
        
        delay += 100;
      });
    });
  }, [isInView]);

  return (
    <section id="technologies" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Technologies</span>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Cutting-Edge Technologies We Use
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We leverage the latest and most powerful technologies to deliver exceptional solutions 
              that keep you ahead of the competition.
            </p>
          </motion.div>
        </div>
        
        <div 
          ref={ref}
          className="space-y-16"
        >
          {technologies.map((tech, index) => (
            <div key={tech.category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {tech.category}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {tech.description}
                  </p>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="logo-carousel flex flex-wrap justify-center lg:justify-start gap-8">
                    {tech.logos.map((logo) => (
                      <div 
                        key={logo.id} 
                        className="logo-item flex flex-col items-center transition-all duration-500"
                      >
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-20 h-20 flex items-center justify-center">
                          <img 
                            src={logo.image} 
                            alt={logo.name} 
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {logo.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}