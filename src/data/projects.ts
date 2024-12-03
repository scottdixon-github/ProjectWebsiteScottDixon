import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://task-app.demo',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'Generate unique artwork using machine learning algorithms',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    link: 'https://ai-art-generator.demo',
    github: 'https://github.com/username/ai-art',
  },
  {
    id: 4,
    title: 'Real-time Chat Platform',
    description: 'Instant messaging app with end-to-end encryption',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/chat-app',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Interactive weather forecasting with data visualization',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind CSS'],
    link: 'https://weather-dashboard.demo',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Personal workout and nutrition tracking application',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/fitness-tracker',
    link: 'https://fitness-tracker.demo',
  }
];