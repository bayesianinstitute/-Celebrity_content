'use client';

import React from 'react';
import { NavigationComponent } from '../components/navigation';
import { HeroSectionComponent } from '../components/hero-section';
import { FeaturesSectionComponent } from '../components/features-section';
import { TestimonialsSectionComponent } from '../components/testimonials-section';
import { CtaSection } from '../components/cta-section';
import { FooterComponent } from '../components/footer';

const MainPageComponent = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationComponent />
      <HeroSectionComponent />
      <FeaturesSectionComponent />
      <TestimonialsSectionComponent />
      <CtaSection />
      <FooterComponent />
    </div>
  );
}

export default MainPageComponent;
