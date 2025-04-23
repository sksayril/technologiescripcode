"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Baseline as Timeline } from "lucide-react"

export default function AboutHistory() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Our journey began with a vision to transform digital experiences."
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description: "Expanded our team and client base across multiple industries."
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Established presence in key markets worldwide."
    },
    {
      year: "2023",
      title: "Innovation Awards",
      description: "Recognized for groundbreaking solutions in technology."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Timeline className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600">
            A timeline of growth, innovation, and continuous improvement
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {milestones.map((milestone, index) => (
            <Card key={index} className="transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-primary text-2xl font-bold mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}