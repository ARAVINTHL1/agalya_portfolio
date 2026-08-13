import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/achievements';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Chapter 05"
          eyebrow="Achievements"
          title="Selected Recognition"
          description="Milestones that reflect participation, preparation, and the ability to present ideas in competitive settings."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {achievements.map((achievement) => (
            <motion.article key={achievement.title} variants={fadeUp} className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-300/10 text-rose-100">
                <Trophy size={18} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{achievement.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}