import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

export function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Chapter 07"
          eyebrow="Education"
          title="Academic Background"
          description="A straightforward snapshot of current and past education milestones."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4"
        >
          {education.map((item) => (
            <motion.article key={item.period + item.institution} variants={fadeUp} className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-rose-100">
                    <GraduationCap size={18} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/75">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.institution}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.program}</p>
                </div>
                {item.metric ? <p className="text-sm text-slate-300 sm:max-w-xs sm:text-right">{item.metric}</p> : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}