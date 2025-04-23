"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Cpu, 
  BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    icon: <Globe className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom websites and web applications using the latest technologies and frameworks.",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: 2,
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    color: "from-blue-700 to-blue-500"
  },
  {
    id: 3,
    icon: <Layers className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and engagement.",
    color: "from-yellow-500 to-yellow-400"
  },
  {
    id: 4,
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for businesses of all sizes.",
    color: "from-blue-800 to-blue-600"
  },
  {
    id: 5,
    icon: <Database className="h-10 w-10" />,
    title: "DevOps Services",
    description: "Streamlined development and operations processes for faster deployment cycles.",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: 6,
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    color: "from-blue-700 to-blue-500"
  },
  {
    id: 7,
    icon: <Cpu className="h-10 w-10" />,
    title: "IoT Solutions",
    description: "Connected device ecosystems and IoT applications for smart businesses.",
    color: "from-yellow-500 to-yellow-400"
  },
  {
    id: 8,
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data analysis through advanced AI technologies.",
    color: "from-blue-800 to-blue-600"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
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
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Services</span>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Technology Solutions for Your Business
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We provide a wide range of innovative services to help businesses thrive in the digital era.
              Our expert team delivers tailored solutions to meet your specific needs.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}