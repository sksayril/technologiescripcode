"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={600}
                height={700}
                alt="Cripcocode Team Collaboration"
                className="w-full object-cover object-center h-[500px]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-950/20" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 md:-right-20 bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-8 rounded-xl shadow-xl max-w-[240px] md:max-w-[300px]">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <p className="text-blue-200 font-medium">Years of Excellence in IT Solutions</p>
            </div>
            
            <div className="absolute -top-10 -left-10 md:-left-20 bg-yellow-500 p-6 md:p-8 rounded-xl shadow-xl max-w-[240px] md:max-w-[300px]">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">500+</div>
              <p className="text-blue-900 font-medium">Successfully Completed Projects</p>
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Creating the Future of Digital Technology
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Cripcocode Technologies is a leading IT solutions provider committed to transforming businesses through innovative technology solutions. Since our inception, we've been at the forefront of digital innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-md text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">We deliver cutting-edge solutions tailored to your needs.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-md text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our team comprises industry experts and tech enthusiasts.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-md text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Client-Focused</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your success is our top priority in everything we do.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-md text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 dark:text-gray-400">We maintain the highest standards in all our deliverables.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}