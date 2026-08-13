import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { experienceItems } from '../data/experience';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Chapter 04"
          eyebrow="Experience"
          title="Experience & Activities"
          description="A concise timeline of internships, training, and student involvement that shaped the way I approach product work."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4"
        >
          {experienceItems.map((item) => (
            <motion.article key={item.period + item.title} variants={fadeUp} className="glass-panel rounded-[1.9rem] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-[0.2em] text-rose-200/75">
                    <BriefcaseBusiness size={12} />
                    {item.period}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}