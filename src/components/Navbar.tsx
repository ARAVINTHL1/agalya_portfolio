import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Moon, SunMedium, X } from 'lucide-react';

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export function Navbar({ isDark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`nav-blur glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-5 ${
          scrolled ? 'py-2 shadow-glow' : 'py-3'
        }`}
      >
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.22em] text-rose-100">
            A
          </span>
          <span>AGALYA.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-100 transition hover:bg-white/10"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl px-1 lg:hidden"
          >
            <div className="glass-panel rounded-[1.6rem] border border-white/10 p-3">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}