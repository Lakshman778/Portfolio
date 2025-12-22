import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Nimmagadda Lakshman Kumar
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
            AI & Machine Learning Engineer
          </p>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Motivated and highly adaptable software professional, eager to apply programming knowledge,
            collaborate effectively, and contribute to impactful solutions in a dynamic work environment.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:nimmagaddalakshmankumar@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+919381803663"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
