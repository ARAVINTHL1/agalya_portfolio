import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Globe, Linkedin, Mail, MapPinned, Phone, Send } from 'lucide-react';
import { contactLinks } from '../data/contact';
import { SectionHeading } from './SectionHeading';
import { fadeUp, stagger } from '../lib/animations';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const contactIcons = [Mail, Phone, Linkedin, Github, Code2, Code2] as const;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const contactCards = useMemo(
    () =>
      contactLinks.map((item, index) => ({
        ...item,
        icon: contactIcons[index] ?? MapPinned,
      })),
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Chapter 08"
          eyebrow="Contact"
          title="Let's Build Something Together."
          description="Have a project idea, opportunity, or just want to connect? Feel free to reach out."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-4"
          >
            {contactCards.map((item) => (
              <motion.article key={item.label} variants={fadeUp} className="glass-panel rounded-[1.7rem] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-rose-100">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-slate-400">{item.value ?? 'Not shared here'}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                error={errors.name}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                error={errors.email}
              />
            </div>

            <div className="mt-4">
              <Field
                label="Subject"
                value={form.subject}
                onChange={(value) => setForm((current) => ({ ...current, subject: value }))}
                error={errors.subject}
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                rows={6}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-slate-500 transition focus:border-rose-300/40 focus:bg-white/7 focus:outline-none"
                placeholder="Tell me about the opportunity or project idea..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-slate-400">
                No backend is connected yet. This form validates input and is ready to wire into Formspree or EmailJS.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-rose-100"
              >
                Send Message
                <Send size={16} />
              </button>
            </div>

            {submitted ? (
              <div className="mt-5 rounded-3xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm text-rose-100">
                Your message is validated and ready to connect to a delivery service.
              </div>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
};

function Field({ label, value, onChange, type = 'text', error }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition focus:border-rose-300/40 focus:bg-white/7 focus:outline-none"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${label.toLowerCase()}-error` : undefined}
      />
      {error ? <p id={`${label.toLowerCase()}-error`} className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}