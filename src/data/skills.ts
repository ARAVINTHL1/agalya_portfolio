import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    code: '01',
    title: 'Languages',
    description: 'Core programming languages used for problem solving and application development.',
    items: [
      { name: 'C', description: 'Structured programming and fundamental problem solving.' },
      { name: 'Java', description: 'Object-oriented application development and academic projects.' },
      { name: 'Python', description: 'Scripting, prototyping, and machine learning workflows.' },
    ],
  },
  {
    id: 'frontend',
    code: '02',
    title: 'Frontend',
    description: 'Interfaces and interaction layers focused on clarity, responsiveness, and usability.',
    items: [
      { name: 'HTML', description: 'Semantic structure and accessible content hierarchy.' },
      { name: 'CSS', description: 'Responsive layouts, motion, and visual systems.' },
      { name: 'JavaScript', description: 'Interactive logic and dynamic user experiences.' },
      { name: 'ReactJS', description: 'Component-driven UI development and state management.' },
    ],
  },
  {
    id: 'database',
    code: '03',
    title: 'Database',
    description: 'Data storage tools used to model and manage application data.',
    items: [
      { name: 'MySQL', description: 'Relational database design and query fundamentals.' },
      { name: 'MongoDB', description: 'Document-based storage for flexible application data.' },
    ],
  },
  {
    id: 'tools',
    code: '04',
    title: 'Tools',
    description: 'Design and development tools supporting collaboration and iteration.',
    items: [
      { name: 'GitHub', description: 'Version control and collaboration workflows.' },
      { name: 'VS Code', description: 'Primary development environment.' },
      { name: 'Figma', description: 'UI design, prototyping, and design systems.' },
      { name: 'Canva', description: 'Visual content and presentation design.' },
    ],
  },
];