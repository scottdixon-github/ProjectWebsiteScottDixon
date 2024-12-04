import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { StarBackground } from './components/StarBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-white-500">
      <StarBackground />
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-200/50 text-gray-800 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Scott Dixon | Software Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;