'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Video, Menu } from 'lucide-react'
import Link from 'next/link';

export function NavigationComponent() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-white">
              <Video className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">AI Media</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="try-beta" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Try-Beta</a>
            </div>
          </div>
          <div className="hidden md:block">
          <Link href="/try-beta" passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Button>
          </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
