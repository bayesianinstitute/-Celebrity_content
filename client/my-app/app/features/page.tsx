import React from 'react'
import Layout from '../../components/layout'; 
import {FeaturesSectionComponent} from '../../components/features-section'


export default function FeaturesPage() {
  return (
    <Layout>
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Our Powerful Features
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Discover how our AI-driven platform revolutionizes content creation and media automation.
          </p>
        </div>
      </div>
      <FeaturesSectionComponent />
    </Layout>
  )
}