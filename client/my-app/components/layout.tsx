import React from 'react'
import {NavigationComponent } from './navigation'
import {FooterComponent} from './footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <NavigationComponent />
      <main className="flex-grow">
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}