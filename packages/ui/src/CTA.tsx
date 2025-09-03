import React from 'react';
import { ArrowRight, Github, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to start creating?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of creators who use DrawFlow to bring their ideas to life. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="group flex items-center space-x-3 text-white hover:text-white/80 transition-colors duration-200 px-6 py-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
              <Github className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold">View on GitHub</div>
              <div className="text-sm text-white/70 flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>2.1k stars</span>
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>No installation required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Works in your browser</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Free forever</span>
          </div>
        </div>
      </div>
    </section>
  );
}