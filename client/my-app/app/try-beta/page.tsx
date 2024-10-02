'use client'; // Marks this file as a Client Component

import React, { useState } from 'react';
import Layout from '../../components/layout'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Use textarea for prompt

export default function TryBetaPage() {
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const wordCount = prompt.split(/\s+/).length;
    
    // Validate prompt word count (30 to 300 words)
    if (wordCount < 30 || wordCount > 300) {
      setErrorMessage('Prompt must be between 30 and 300 words.');
      return;
    }
    
    // Validate email format (basic validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage(''); // Clear error message on successful validation
    console.log('Form submitted');
    // Handle form submission logic here
  };

  return (
    <Layout>
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Try Our Beta Version
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Be among the first to experience the future of AI-driven content creation.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="space-y-4">

              {/* Prompt Textarea */}
              <div>
                <Label htmlFor="prompt" className="text-white">Prompt</Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your prompt (30 to 300 words)..."
                  required
                  rows={6}
                />
              </div>

              {/* Email Input */}
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Display Validation Error */}
              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up for Beta
              </Button>

            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
