import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'TypeScript', level: 'Core / Proficient', category: 'frontend', tags: ['Language', 'Type-Safety'] },
  { name: 'React 18+', level: 'Core / Proficient', category: 'frontend', tags: ['Hooks', 'Router', 'Context'] },
  { name: 'Tailwind CSS', level: 'Core / Proficient', category: 'frontend', tags: ['Responsive', 'Design Systems'] },
  { name: 'HTML5 & Modern CSS', level: 'Core / Proficient', category: 'frontend', tags: ['Semantic', 'Flex/Grid', 'A11y'] },
  { name: 'Next.js', level: 'Familiar / Comfortable', category: 'frontend', tags: ['SSR', 'App Router'] },

  // Backend
  { name: 'Node.js', level: 'Core / Proficient', category: 'backend', tags: ['Runtime', 'Async I/O'] },
  { name: 'Express.js', level: 'Core / Proficient', category: 'backend', tags: ['RESTful APIs', 'Middleware'] },
  { name: 'NestJS', level: 'Exploring / Learning', category: 'backend', tags: ['Enterprise', 'Architecture'] },

  // Database
  { name: 'PostgreSQL', level: 'Familiar / Comfortable', category: 'database', tags: ['Relational', 'SQL', 'Indexes'] },
  { name: 'MongoDB', level: 'Core / Proficient', category: 'database', tags: ['NoSQL', 'Aggregation', 'Mongoose'] },
  { name: 'Redis', level: 'Exploring / Learning', category: 'database', tags: ['Caching', 'PubSub'] },

  // Tools & DevOps
  { name: 'Git & GitHub', level: 'Core / Proficient', category: 'tools', tags: ['Version Control', 'GitHub Actions'] },
  { name: 'Vite', level: 'Core / Proficient', category: 'tools', tags: ['Bundler', 'HMR', 'Performance'] },
  { name: 'Docker', level: 'Familiar / Comfortable', category: 'tools', tags: ['Containers', 'Compose'] },
  { name: 'Linux / Bash', level: 'Familiar / Comfortable', category: 'tools', tags: ['CLI', 'Server Management'] },
  
  // Computer Science & Concepts
  { name: 'Data Structures & Algorithms', level: 'Core / Proficient', category: 'concepts', tags: ['CS Fundamentals'] },
  { name: 'OOP & Clean Code', level: 'Core / Proficient', category: 'concepts', tags: ['SOLID', 'Design Patterns'] },
  { name: 'Web Accessibility (a11y)', level: 'Familiar / Comfortable', category: 'concepts', tags: ['ARIA', 'WCAG'] },
];
