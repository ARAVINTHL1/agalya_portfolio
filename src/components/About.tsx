import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { aboutTimeline } from '../data/experience';
import { fadeUp, stagger } from '../lib/animations';

const interests = ['Software Development', 'Frontend Development', 'UI/UX Design', 'Database Systems'];

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="I am a Computer Science Engineering student focused on building practical software solutions and intuitive digital experiences."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-panel section-shell rounded-[2rem] p-6 sm:p-8"
          >
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              My work sits at the intersection of function and presentation. I enjoy taking ideas from problem statement to prototype and shaping them into experiences that feel clear, useful, and modern.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span key={interest} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4"
          >
            {aboutTimeline.map((item) => (
              <motion.article key={item.period + item.title} variants={fadeUp} className="glass-panel rounded-[1.75rem] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/75">{item.period}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}