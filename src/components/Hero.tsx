import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I build expressive digital experiences that combine cool design features & powerful functionality.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}