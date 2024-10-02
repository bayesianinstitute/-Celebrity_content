'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Zap } from 'lucide-react'
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Content Creation?
        </h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Join the AI revolution and start creating cutting-edge celebrity content that engages your audience like never before.
        </p>
      <Link href="/try-beta" passHref>
        <Button className="group bg-white text-purple-600 hover:bg-purple-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto">
          Get Started Now
          <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
        </Button>
      </Link>
      </div>
    </section>
  )
}