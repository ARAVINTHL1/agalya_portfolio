import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

type Theme = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('agalya-theme') as Theme | null;
    const nextTheme = storedTheme ?? 'dark';
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('agalya-theme', theme);
  }, [theme]);

  const toggleTheme = useMemo(
    () => () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  );

  useEffect(() => {
    const root = document.body;
    if (reduceMotion) {
      root.classList.add('reduced-motion');
      return;
    }
    root.classList.remove('reduced-motion');
  }, [reduceMotion]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar isDark={theme === 'dark'} onToggleTheme={toggleTheme} />

      <motion.main
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero
          onWorkClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          onConnectClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}