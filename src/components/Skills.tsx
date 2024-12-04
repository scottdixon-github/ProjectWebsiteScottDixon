import React from 'react';
import { skills } from '../data/skills';
import * as Icons from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => {
            const Icon = Icons[skill.icon as keyof typeof Icons];
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {Icon && <Icon className="w-8 h-8 mb-3 text-blue-600" />}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};