"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const pricingPlans = [
  {
    name: "Basic plan",
    price: "₹7000",
    duration: "/month",
    description: "Small , less complex buisness websites",
    features: [
      { included: true, text: "2 Landing Page" },
      { included: true, text: "Premium in UI" },
      { included: true, text: "SEO optimized" },
      { included: true, text: "Our Assistance" },
    ],
    cta: "Get free plan",
    popular: false,
    color: "blue"
  },
  {
    name: "Business plan",
    price: "₹15,000 - ₹25,000",
    duration: "/month",
    description: "Ideal for Medium businesses.",
    features: [
      { included: true, text: "Landing Page with premium UI" },
      { included: true, text: "Vendor's " },
      { included: true, text: "Backend Intregrated" },
      { included: true, text: "Payment Gateway" },
    ],
    cta: "Get business plan",
    popular: false,
    color: "blue"
  },
  {
    name: "Enterprise plan",
    price: "₹50,000 - ₹70,000",
    duration: "/month",
    description: "Ideal for Big businesses.",
    features: [
      { included: true, text: "Landing Page with premium UI" },
      { included: true, text: "Vendor's and much more" },
      { included: true, text: "Backend Intregrated" },
      { included: true, text: "Payment Gateway" },
      { included: true, text: "Full Stack" },
    ],
    cta: "Get enterprise plan",
    popular: false,
    color: "blue"
  },
  {
    name: "Custom plan",
    price: "Custom",
    duration: "/custom",
    description: "Tailored solutions for your specific needs.",
    features: [
      { included: true, text: "All Enterprise features" },
      { included: true, text: "Custom as you want !" },
      { included: true, text: "Custom integrations" },
      { included: true, text: "Advanced security features" },
    ],
    cta: "Contact us",
    popular: false,
    color: "purple"
  }
]

export default function PricingSection() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [requirements, setRequirements] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  const [loading, setLoading] = useState(false)
  const [pricingResponse, setPricingResponse] = useState<string | null>(null)
  
  const handleSubmit = async () => {
    try {
      setLoading(true)

      // Craft a detailed prompt for Gemini to generate a market price estimate
      const detailedPrompt = `
You are a professional web development pricing consultant. 
Analyze the following website requirements and provide a clear, concise market price estimate in Indian Rupees (₹):

Requirements: ${requirements}

Please respond ONLY with a structured pricing breakdown in this exact format:
Estimated Total Price: ₹X - ₹Y
Pricing Breakdown:
- Development Complexity: [Low/Medium/High]
- Key Cost Factors:
  * Frontend Development: ₹X
  * Backend Development: ₹X
  * Design & UX: ₹X
  * Additional Features: ₹X

Provide a professional, market-standard pricing estimate based on current industry rates for web development in India.
    `.trim()

      // Call the Gemini API with the detailed requirements
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': 'AIzaSyCoSGd8-qNHCXwGQagNLeBUHMQZ4pGeIbw',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: detailedPrompt }
              ]
            }
          ]
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get pricing estimate')
      }

      const data = await response.json()
      // Extract the text response from Gemini
      const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
        'Based on your requirements, we estimate a custom price. Our team will contact you shortly with more details.'
      
      // Clean and format the response
      const cleanedResponse = geminiText
        .replace(/```/g, '')  // Remove code block markers
        .replace(/\n\n+/g, '\n')  // Reduce multiple newlines
        .trim()

      setPricingResponse(cleanedResponse)
    } catch (error) {
      console.error('Error fetching pricing:', error)
      setPricingResponse('We could not generate an automatic estimate. Our team will contact you shortly.')
    } finally {
      setLoading(false)
    }
  }
  
  const resetForm = () => {
    setRequirements('')
    setName('')
    setEmail('')
    setPricingResponse(null)
    setDialogOpen(false)
  }
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-7xl font-bold mb-4 text-black"
          >
            <span className="inline-block">
              Pricing <span className="font-normal">plans</span>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base mb-8"
          >
            Hyro features that will help your company scale faster
          </motion.p>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-sm font-medium">Our Hardwork...!</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full p-1 flex items-center">
              <div className="w-4 h-4 bg-black rounded-full transform translate-x-6"></div>
            </div>
            <span className="text-sm font-medium">Your Need</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              {/* Card content */}
              <div className="bg-gray-100 rounded-xl p-6 h-full min-h-[500px] flex flex-col">
                <div className="mb-2">
                  <h3 className="text-sm font-medium text-gray-800 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">{plan.duration}</span>
                  </div>
                  {index === 3 ? (
                    <Button 
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-2 mb-4"
                      size="sm"
                      onClick={() => setDialogOpen(true)}
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-2 mb-4"
                      size="sm"
                    >
                      {plan.cta}
                    </Button>
                  )}
                  <p className="text-gray-500 text-xs mb-4">{plan.description}</p>
                </div>
                
                <div className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Gradient background at bottom */}
                <div className="mt-auto pt-8">
                  <div className="h-24 w-full rounded-xl overflow-hidden">
                    {index === 0 && (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 via-purple-300 to-transparent rounded-tl-full rounded-tr-full"></div>
                    )}
                    {index === 1 && (
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent rounded-tl-full rounded-tr-full"></div>
                    )}
                    {index === 2 && (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-400 to-transparent rounded-tl-full rounded-tr-full"></div>
                    )}
                    {index === 3 && (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-500 to-transparent rounded-tl-full rounded-tr-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom gradient decorations */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Custom Pricing Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl max-h-[90vh] overflow-hidden flex flex-col">
          
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {pricingResponse ? '✨ Your Custom Pricing Estimate' : '✨ Get Your Custom Pricing'}
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              {pricingResponse 
                ? 'Based on your requirements, we have generated a detailed pricing estimate for your project.'
                : 'Fill out the form below to get a personalized pricing estimate tailored to your specific needs.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="overflow-y-auto flex-grow">
            {!pricingResponse ? (
              <div className="grid gap-6 py-6 px-6">
                <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right text-sm font-medium col-span-1 text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="email" className="text-right text-sm font-medium col-span-1 text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="requirements" className="text-right text-sm font-medium col-span-1 text-gray-700">
                    Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="col-span-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Describe your project requirements, features needed, expected traffic, etc."
                    rows={5}
                  />
                </div>
              </div>
            ) : (
              <div className="py-6 px-6">
                <div className="rounded-lg bg-white p-6 my-2 border border-gray-100 shadow-sm">
                  {pricingResponse && pricingResponse.includes('Estimated Total Price') ? (
                    <div className="space-y-4">
                      {pricingResponse.split('\n').map((line, index) => {
                        if (line.startsWith('Estimated Total Price')) {
                          return (
                            <div key={index} className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                              <h3 className="text-lg font-bold text-indigo-900">{line}</h3>
                            </div>
                          );
                        } else if (line.startsWith('Pricing Breakdown') || line.startsWith('- Development Complexity') || line.startsWith('- Key Cost Factors')) {
                          return <h4 key={index} className="font-semibold text-gray-800 mt-3">{line}</h4>;
                        } else if (line.startsWith('  *')) {
                          return <p key={index} className="text-gray-700 ml-4">{line}</p>;
                        } else {
                          return <p key={index} className="text-gray-700">{line}</p>;
                        }
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-700">{pricingResponse}</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter className="border-t pt-4 mt-2">
            {pricingResponse ? (
              <Button 
                onClick={resetForm} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6"
              >
                Close
              </Button>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setDialogOpen(false)}
                  className="border-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={loading || !requirements.trim() || !name.trim() || !email.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Get Premium Estimate'}
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}