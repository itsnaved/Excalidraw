import React from 'react';
import { ArrowRight, Play, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200 mb-8">
            <span className="text-purple-600 font-medium text-sm">✨ Now with real-time collaboration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Draw Your Ideas
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The intuitive drawing tool for designers, developers, and teams. 
            Create beautiful diagrams, wireframes, and illustrations with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>Start Drawing for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 px-6 py-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <span className="font-semibold">Watch Demo</span>
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="h-96 md:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">Your canvas awaits</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-purple-100 rounded-lg border border-purple-200 opacity-80"></div>
                <div className="absolute top-12 right-12 w-16 h-16 bg-blue-100 rounded-full border border-blue-200 opacity-80"></div>
                <div className="absolute bottom-12 left-16 w-24 h-16 bg-emerald-100 rounded-lg border border-emerald-200 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}