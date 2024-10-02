import React from 'react'
import Layout from '../../components/layout'; 
import {TestimonialsSectionComponent} from '../../components/testimonials-section'

export default function TestimonialsPage() {
  return (
    <Layout>
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            See how our AI-driven platform has transformed content creation for businesses across industries.
          </p>
        </div>
      </div>
      <TestimonialsSectionComponent />
    </Layout>
  )
}