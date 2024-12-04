import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-purple-300 backdrop-blur-sm z-25 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-black-100"> Scott Dixon | Software Engineer </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-black-600 hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="text-black-600 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="text-black-600 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="text-black-600 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/scottdixon-github" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/scott-dixon-b0583272/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
            <a href="mailto:scottdixon1249@gmail.com">
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