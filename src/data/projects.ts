import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'job-portal',
    name: 'Job Portal',
    description:
      'A job application portal that helps professionals and beginners apply for jobs and freelancing opportunities, while also allowing companies to post openings.',
    technologies: ['MongoDB', 'Node.js', 'React', 'Express'],
    category: 'Full Stack Development',
    caseStudy: {
      problem: 'Job seekers and hiring teams need a single place to connect without a heavy process.',
      solution: 'A portal that centralizes applications, postings, and role-based navigation for users and companies.',
      role: 'Project development and interface implementation.',
      technology: 'MongoDB, Node.js, React, Express',
      designProcess: 'Focused on application flow clarity, recruiter-side actions, and a straightforward user journey.',
      keyFeatures: 'Job browsing, application flow, company postings, and a clean interface for multiple user types.',
      challenges: 'Keeping the experience simple for both beginners and professionals while supporting different workflows.',
      outcome: 'Documented as a full stack project concept ready for further iteration and deployment.',
    },
  },
  {
    id: 'aqua-live',
    name: 'Aqua Live',
    description:
      'An application designed to predict underground water levels with an Indian map for easier location selection and graphical visualization of water regeneration timing.',
    technologies: ['Python', 'Random Forest', 'Expo', 'Figma'],
    category: 'Machine Learning / Mobile Application',
    caseStudy: {
      problem: 'Users need a practical way to understand underground water-level behavior for a chosen location.',
      solution: 'A predictive concept combining machine learning, map selection, and data visualization.',
      role: 'Project concept development and interface planning.',
      technology: 'Python, Random Forest, Expo, Figma',
      designProcess: 'Explored map-first interaction and visual outputs to keep the model output understandable.',
      keyFeatures: 'Location selection, prediction output, graphical visualization, and regeneration timing guidance.',
      challenges: 'Presenting predictive information in a way that feels usable on mobile screens.',
      outcome: 'Structured as a mobile-first concept focused on environmental insight and usability.',
    },
  },
  {
    id: 'kec-events',
    name: 'KEC Events',
    description:
      'A web application for event registration at Kongu Engineering College that also supports hall booking to reduce manual work.',
    technologies: ['MongoDB', 'Node.js', 'React', 'Figma'],
    category: 'Full Stack / UI Design',
    caseStudy: {
      problem: 'Event registration and hall booking often involve repetitive manual coordination.',
      solution: 'A streamlined web app for registrations and hall bookings in one flow.',
      role: 'Full stack and UI design contribution.',
      technology: 'MongoDB, Node.js, React, Figma',
      designProcess: 'Designed around quick registration and clear booking states to reduce friction.',
      keyFeatures: 'Event registration, hall booking, and information flow that supports college operations.',
      challenges: 'Balancing operational detail with a clean interface for multiple event types.',
      outcome: 'Presented as a productivity-focused college web application.',
    },
  },
  {
    id: 'medical-vending-machine',
    name: 'Medical Vending Machine',
    description:
      'A medical vending machine concept designed to dispense medicines during critical times when medical shops are unavailable, especially at night or in rural areas.',
    technologies: ['Concept Design', 'UI Planning'],
    category: 'Social Impact / Innovation',
    caseStudy: {
      problem: 'Access to basic medicines can be difficult in emergencies or remote areas.',
      solution: 'A vending machine concept intended to improve medicine availability during urgent situations.',
      role: 'Concept development and presentation.',
      technology: 'Concept design and interface planning.',
      designProcess: 'Focused on scenario mapping, access convenience, and responsible product framing.',
      keyFeatures: 'Emergency access, rural utility, and a self-service delivery concept.',
      challenges: 'Designing for reliability, safety, and public trust without overcomplicating the idea.',
      outcome: 'Documented as a social-impact innovation concept.',
    },
  },
  {
    id: 'dharani-jewellery',
    name: 'Dharani Jewellery Mobile Application',
    description:
      'A mobile application for jewellery shop owners and workers that simplifies inventory, sales, customer, loan, and pricing management in one system.',
    technologies: ['Mobile Application Design'],
    category: 'Mobile Application / Business Management',
    caseStudy: {
      problem: 'Jewellery businesses manage multiple operational tasks that benefit from one organized system.',
      solution: 'A mobile application concept that brings business operations into a single workflow.',
      role: 'Concept design and application planning.',
      technology: 'Mobile application design.',
      designProcess: 'Identified business tasks and grouped them into a simpler mobile-first structure.',
      keyFeatures: 'Inventory, sales, customer, loan, and pricing management.',
      challenges: 'Keeping business actions easy to navigate for everyday users.',
      outcome: 'Developed as a business-management mobile application concept.',
    },
  },
];