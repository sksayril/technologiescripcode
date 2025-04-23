"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechGlobe Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Cripcocode Technologies transformed our digital infrastructure with their innovative solutions. Their team's expertise and dedication exceeded our expectations, delivering a scalable platform that has significantly enhanced our operational efficiency.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, FinSmart Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "We partnered with Cripcocode for our fintech application, and the results were outstanding. Their deep understanding of the financial sector combined with technical excellence resulted in a secure, user-friendly platform that our clients love.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, Retail Innovations",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "The e-commerce platform developed by Cripcocode has revolutionized our online presence. Sales have increased by 45% since launch, and the seamless user experience has significantly improved customer retention. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "David Williams",
    position: "Head of IT, HealthFirst",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Cripcocode's healthcare management system has streamlined our operations and improved patient care. Their team took the time to understand our unique challenges and delivered a tailored solution that perfectly addresses our needs.",
    rating: 5
  },
  {
    id: 5,
    name: "Jennifer Lee",
    position: "Founder, EdTech Innovators",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Our learning platform required sophisticated features and seamless performance. Cripcocode not only delivered on technical requirements but also provided valuable insights that enhanced the overall product. Their collaborative approach made all the difference.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={ref} id="testimonials" className="py-20 md:py-32 bg-blue-900 text-white">
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
              <span className="text-yellow-500 font-semibold uppercase tracking-wider">Testimonials</span>
              <div className="h-1 w-12 bg-yellow-500 ml-4"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            
            <p className="text-blue-200 text-lg">
              Don't just take our word for it. Here's what our clients have to say about our services and collaboration.
            </p>
          </motion.div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-10 -left-10 text-blue-600 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="bg-blue-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Image column */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-blue-300">
                  {testimonials[activeIndex].position}
                </p>
                <div className="flex mt-2">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </motion.div>
              
              {/* Quote column */}
              <motion.div 
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2"
              >
                <blockquote className="text-xl md:text-2xl font-light italic text-blue-100 mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </motion.div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? "bg-yellow-500 w-6" : "bg-blue-600 hover:bg-blue-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}