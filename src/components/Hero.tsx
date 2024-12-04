import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800"> I'm a 
            Full Stack </h1>
          <h1 className="text-5xl font-bold mb-6 text--150"> Software Engineer 
            </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I build unique digital experiences that combine cool design features & powerful functionality.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Projects
            <ArrowDown className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}