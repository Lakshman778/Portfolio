import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in CSE (Artificial Intelligence & Machine Learning)',
    institution: 'Seshadri Rao Gudlavalleru Engineering College',
    location: 'Gudlavalleru, Andhra Pradesh',
    period: 'Oct 2022 – May 2026',
    grade: 'CGPA: 8.49'
  },
  {
    degree: 'Intermediate in MPC',
    institution: 'Narayana Junior College',
    location: 'Vijayawada, Andhra Pradesh',
    period: 'Aug 2020 – May 2022',
    grade: 'Percentage: 90%'
  }
];

export default function Education() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                    <span>{edu.degree}</span>
                  </h3>
                  <p className="text-lg text-slate-700 font-medium mb-2 ml-11">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-slate-600 ml-11">
                    <MapPin size={16} />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-sm text-slate-600 font-medium mb-1">{edu.period}</p>
                  <p className="text-lg font-bold text-blue-600">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
