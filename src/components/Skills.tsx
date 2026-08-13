import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skills } from '../data/skills';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Interactive Skill Landscape"
          description="A focused set of technical and creative tools grouped by how they support product thinking and implementation."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          {skills.map((category) => (
            <motion.article key={category.id} variants={fadeUp} className="glass-panel group rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-200/75">{category.code}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-rose-100 transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  <Sparkles size={18} />
                </div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{category.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 transition duration-300 group-hover:bg-white/7"
                  >
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}