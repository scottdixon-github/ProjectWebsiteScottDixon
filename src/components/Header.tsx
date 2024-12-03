import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Scott Dixon | Software Engineer</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
          </div>

          <button className="md:hidden text-gray-800">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}