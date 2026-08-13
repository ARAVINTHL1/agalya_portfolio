import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { certifications } from '../data/certifications';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications"
          description="Certificates that can be expanded with links later without changing the component structure."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {certifications.map((certificate) => (
            <motion.article key={certificate.name} variants={fadeUp} className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-300/10 text-rose-100">
                    <BadgeCheck size={18} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{certificate.name}</h3>
                  {certificate.issuer ? <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p> : null}
                  {certificate.year ? <p className="mt-1 text-sm text-slate-400">{certificate.year}</p> : null}
                </div>

                {certificate.certificateUrl ? (
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
                  >
                    View Certificate
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
                    Link unavailable
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}