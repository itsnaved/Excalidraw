import React from 'react';
import { Palette, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DrawFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              About
            </a>
            <button className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Sign In
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium">
              Start Drawing
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                About
              </a>
              <button className="text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium text-center">
                Start Drawing
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}