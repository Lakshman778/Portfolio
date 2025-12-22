import { Award } from 'lucide-react';

const certifications = [
  { provider: 'Kaggle', title: 'Python Certification' },
  { provider: 'Coursera', title: 'Introduction to Artificial Intelligence (AI)' },
  { provider: 'Udemy', title: 'Python for Everyone — Master the Basics of Programming' },
  { provider: 'Cisco Networking Academy', title: 'Program Essentials in Python' },
  { provider: 'Oracle', title: 'Databases for Developers — Foundations' }
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600 mb-1">{cert.provider}</p>
                  <p className="text-slate-800 font-medium leading-tight">{cert.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
