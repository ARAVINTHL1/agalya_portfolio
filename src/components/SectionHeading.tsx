import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';

type Props = {
  chapter: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ chapter, eyebrow, title, description }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-3xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">{chapter}</p>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-200/75">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </motion.div>
  );
}