'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Video, Star, Zap, ChevronRight } from 'lucide-react'
import Link from 'next/link';
export function HeroSectionComponent() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center space-y-12 z-10">
        <div className="flex items-center justify-center space-x-4">
          <Video className="h-12 w-12 text-purple-400" />
          <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          AI-Driven Celebrity Content
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Generation & Media Automation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          Transform your media content with AI-powered celebrity KOLs and idols. 
          Automate, customize, and revolutionize your marketing and news production.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/try-beta" passHref>
          <Button className="group px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
            Get Started
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/features" passHref>
          <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center">
            Learn More
          </Button>
        </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <Zap className="absolute top-20 right-[10%] h-8 w-8 text-yellow-400 animate-pulse" />
      <Star className="absolute bottom-32 left-[15%] h-6 w-6 text-purple-400 animate-ping" />
      <Video className="absolute top-1/4 left-[5%] h-10 w-10 text-indigo-400 animate-bounce" />
      <Star className="absolute bottom-1/4 right-[8%] h-12 w-12 text-pink-400 animate-pulse" />
    </section>
  )
}