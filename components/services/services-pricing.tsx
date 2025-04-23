"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic Web Development",
      "5 Pages Website",
      "Mobile Responsive",
      "Basic SEO Setup",
      "3 Months Support",
      "2 Revisions"
    ]
  },
  {
    name: "Professional",
    price: "2499",
    description: "Ideal for growing businesses",
    features: [
      "Advanced Web Development",
      "10 Pages Website",
      "Mobile Responsive",
      "Advanced SEO Setup",
      "6 Months Support",
      "5 Revisions",
      "Custom Features",
      "Analytics Integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "4999",
    description: "For large scale organizations",
    features: [
      "Full-Scale Web Development",
      "Unlimited Pages",
      "Mobile Responsive",
      "Complete SEO Package",
      "12 Months Support",
      "Unlimited Revisions",
      "Custom Features",
      "Analytics Integration",
      "Priority Support",
      "Security Audit"
    ]
  }
]

export default function ServicesPricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">
              Choose the perfect plan that fits your business needs. All plans include our core features.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/project</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom plan? <a href="/contact" className="text-blue-600 font-medium">Contact us</a> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}