'use client'

import React from 'react'
import { Database, Cpu, Video, Zap, Users, Lock } from 'lucide-react'

const features = [
  {
    icon: <Database className="h-10 w-10 text-purple-500" />,
    title: "Centralized Database",
    description: "Manage a comprehensive library of celebrity media content for easy access and manipulation."
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-500" />,
    title: "AI-Powered Generation",
    description: "Create new content using advanced generative AI technologies while maintaining celebrity personas."
  },
  {
    icon: <Video className="h-10 w-10 text-green-500" />,
    title: "Custom Video Scripting",
    description: "Freely replace, alter, or script content for videos with maintained authenticity."
  },
  {
    icon: <Zap className="h-10 w-10 text-yellow-500" />,
    title: "Real-time Processing",
    description: "Generate and modify content in real-time for immediate use in various applications."
  },
  {
    icon: <Users className="h-10 w-10 text-red-500" />,
    title: "Multi-industry Application",
    description: "Suitable for marketing, news media, virtual events, and interactive content creation."
  },
  {
    icon: <Lock className="h-10 w-10 text-indigo-500" />,
    title: "Secure & Scalable",
    description: "Built on a secure, cloud-based infrastructure that scales with your needs."
  }
]

export function FeaturesSectionComponent() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Revolutionize Content Creation with AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}