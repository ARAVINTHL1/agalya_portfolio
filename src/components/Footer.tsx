import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const socialLabels = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'GitHub', icon: Github },
  { label: 'Email', icon: Mail },
  { label: 'Instagram', icon: Instagram },
];

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-300">Designed &amp; Built by Agalya Saravanan</p>
              <p className="mt-2 text-sm text-slate-500">© 2026 Agalya Saravanan</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLabels.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Icon size={15} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}