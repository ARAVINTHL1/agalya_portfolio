import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FolderOpen, Github, Globe, Layers3 } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectModal } from './ProjectModal';
import { fadeUp, stagger } from '../lib/animations';
import type { Project } from '../types';

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeProject]);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Chapter 03"
          eyebrow="Projects"
          title="Selected Projects"
          description="Representative work spanning full stack development, mobile thinking, and concept-driven design."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group glass-panel section-shell rounded-[2rem] p-6 sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-rose-200/75">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] tracking-[0.22em] text-slate-200">
                      <FolderOpen size={12} />
                      {project.category}
                    </span>
                    <span>{project.technologies.join(' / ')}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 transition hover:bg-white/10"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-4 py-2.5 text-sm text-rose-50 transition hover:bg-rose-300/15"
                    >
                      <Globe size={15} />
                      Live Demo
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-rose-100"
                  >
                    View Details
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-rose-100">
                  <Layers3 size={18} />
                </span>
                <span>Case study modal included for deeper project context.</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </AnimatePresence>
    </section>
  );
}