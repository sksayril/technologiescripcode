"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Client logos
const clients = [
  { id: 1, name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
  { id: 2, name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { id: 3, name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { id: 4, name: "Apple", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { id: 5, name: "Facebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { id: 6, name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { id: 7, name: "Twitter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" },
  { id: 8, name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  { id: 9, name: "Adobe", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg" },
  { id: 10, name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" }
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Add animation to client logos
    const logoContainer = document.querySelector('.client-logos');
    if (!logoContainer) return;
    
    const firstRow = logoContainer.children[0];
    const secondRow = logoContainer.children[1];
    
    if (firstRow && secondRow) {
      // Animation for first row (left to right)
      firstRow.classList.add('animate-marquee');
      
      // Animation for second row (right to left)
      secondRow.classList.add('animate-marquee-reverse');
    }
  }, [isInView]);

  return (
    <section id="clients" className="py-20 md:py-32 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-yellow-500 mr-4"></div>
              <span className="text-yellow-500 font-semibold uppercase tracking-wider">Our Clients</span>
              <div className="h-1 w-12 bg-yellow-500 ml-4"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Trusted by Leading Companies Worldwide
            </h2>
            
            <p className="text-blue-200 text-lg">
              We're proud to collaborate with forward-thinking businesses across various industries,
              from startups to established enterprises.
            </p>
          </motion.div>
        </div>
        
        <div 
          ref={ref}
          className="client-logos overflow-hidden"
        >
          {/* First row of logos (moves left to right) */}
          <div className="flex space-x-16 py-8 opacity-0 transition-opacity duration-1000" 
               style={{ opacity: isInView ? 1 : 0 }}>
            {clients.slice(0, 5).map((client) => (
              <div 
                key={client.id}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 w-40"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {clients.slice(0, 5).map((client) => (
              <div 
                key={`dup-${client.id}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 w-40"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Second row of logos (moves right to left) */}
          <div className="flex space-x-16 py-8 mt-6 opacity-0 transition-opacity duration-1000" 
               style={{ opacity: isInView ? 1 : 0 }}>
            {clients.slice(5, 10).map((client) => (
              <div 
                key={client.id}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 w-40"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {clients.slice(5, 10).map((client) => (
              <div 
                key={`dup-${client.id}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 w-40"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center bg-blue-900 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to join our client success stories?</h3>
          <p className="text-blue-200 mb-8">
            Let's discuss how we can help your business achieve its digital transformation goals.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-8 py-3 rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}