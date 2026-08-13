import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '../types';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="glass-panel scrollbar-thin relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 p-6 sm:p-8"
            initial={{ y: 30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-rose-200/75">Case Study</p>
                <h3 id="project-modal-title" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="Close project case study"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ['Problem', project.caseStudy.problem],
                ['Solution', project.caseStudy.solution],
                ['My Role', project.caseStudy.role],
                ['Technology', project.caseStudy.technology],
                ['Design Process', project.caseStudy.designProcess],
                ['Key Features', project.caseStudy.keyFeatures],
                ['Challenges', project.caseStudy.challenges],
                ['Outcome', project.caseStudy.outcome],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/75">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}