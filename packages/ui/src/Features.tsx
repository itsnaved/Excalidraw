import React from 'react';
import { Zap, Users, Palette, Download, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Intuitive Drawing Tools',
    description: 'Professional drawing tools that feel natural. Create shapes, diagrams, and illustrations with precision and ease.',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together in real-time with your team. See changes instantly and collaborate seamlessly across projects.',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for performance. Smooth interactions, instant saves, and responsive design that works on any device.',
    color: 'emerald'
  },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'Export your creations in multiple formats. PNG, SVG, PDF - share your work however you need.',
    color: 'orange'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. Work on sensitive projects with confidence and peace of mind.',
    color: 'red'
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    description: 'Access your drawings from any device. Desktop, tablet, mobile - your work follows you everywhere.',
    color: 'indigo'
  }
];

const colorClasses = {
  purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  emerald: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
  red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
  indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              create amazing diagrams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that make drawing and collaboration effortless, whether you're sketching ideas or building complex diagrams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}