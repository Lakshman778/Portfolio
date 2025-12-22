import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="space-y-3">
            <a
              href="mailto:nimmagaddalakshmankumar@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>nimmagaddalakshmankumar@gmail.com</span>
            </a>
            <a
              href="tel:+919381803663"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span>+91 9381803663</span>
            </a>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Built by Nimmagadda Lakshman Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
