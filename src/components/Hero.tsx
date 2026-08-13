import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';

type Props = {
  onWorkClick: () => void;
  onConnectClick: () => void;
};

export function Hero({ onWorkClick, onConnectClick }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pt-8 sm:px-6 lg:px-8">
      <div className="hero-orb absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-70" />
      <div className="hero-grid absolute inset-0 opacity-35 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent_90%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-rose-100">
            <span className="h-2 w-2 rounded-full bg-rose-200 shadow-[0_0_16px_rgba(244,114,182,0.4)]" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.32em] text-rose-200/70">Hi, I&apos;m Agalya.</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
            <span className="text-gradient block">Building Digital Experiences</span>
            <span className="mt-3 block text-slate-100">That Solve Real Problems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Computer Science Engineering student passionate about software development, frontend development, and UI/UX design.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onWorkClick}
              className="panel-pop group inline-flex items-center justify-center gap-2 rounded-full bg-rose-50 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              View My Work
              <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={onConnectClick}
              className="panel-pop inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Let&apos;s Connect
            </button>
            <a
              href="/Agalya_S_Resume.pdf"
              download="Agalya_Saravanan_Resume.pdf"
              className="panel-pop inline-flex items-center justify-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-6 py-3.5 text-sm font-semibold text-rose-50 transition hover:bg-rose-300/15"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="panel-pop relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-glow lg:max-w-[460px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-rose-300/18 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-8 bottom-16 h-24 w-24 rounded-full bg-amber-200/10 blur-3xl"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.8 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,167,161,0.12),transparent_36%),linear-gradient(180deg,rgba(8,12,22,0.1),rgba(8,12,22,0.44))]" />
      <img
        src="/agalya.png"
        alt="Portrait of Agalya Saravanan"
        className="h-full w-full object-cover object-top"
        loading="eager"
        decoding="async"
      />
      <motion.div
        className="absolute inset-0 border border-white/5"
        animate={{ opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(7,11,20,0),rgba(7,11,20,0.72))]" />
      <motion.div
        className="absolute bottom-4 left-4 right-4 rounded-[1.35rem] border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl"
        initial={false}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <p className="text-xs uppercase tracking-[0.26em] text-slate-300">Profile</p>
        <p className="mt-2 text-sm leading-6 text-slate-100">Agalya Saravanan</p>
        <p className="text-xs text-slate-400">Software Developer • Frontend Developer • UI/UX Designer</p>
      </motion.div>
    </motion.div>
  );
}
