'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content: "This AI-driven platform has revolutionized our celebrity endorsement campaigns. We've seen a 300% increase in engagement!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "News Producer, Global Media",
    content: "The ability to generate real-time interviews with AI has completely transformed our news production process. It's a game-changer.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emily Rodriguez",
    role: "Event Manager, VirtualCon",
    content: "We used this platform for our virtual conference, and the AI-generated celebrity appearances were a massive hit with our attendees.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
]

export function TestimonialsSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl">
            <div className="flex items-center mb-4">
              {/* <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mr-4" /> */}
              <div>
                <h3 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
                <p className="text-purple-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg italic mb-4">"{testimonials[currentIndex].content}"</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-purple-600 rounded-full p-2 text-white hover:bg-purple-700 transition-colors duration-300">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-600 rounded-full p-2 text-white hover:bg-purple-700 transition-colors duration-300">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}