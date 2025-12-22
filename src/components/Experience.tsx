import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Salesforce Developer Intern',
    company: 'SmartBridge Educational Services',
    collaboration: 'In collaboration with APSCHE',
    period: 'May 2025 – June 2025',
    achievements: [
      'Gained hands-on experience in application development, data modeling, and process automation',
      'Designed custom modules and interactive UI components to enhance system usability',
      'Practiced version control, testing, and deployment using industry-standard tools and workflows'
    ]
  },
  {
    title: 'AI Intern',
    company: 'SmartBridge Educational Services',
    collaboration: 'In collaboration with APSCHE',
    period: 'April 2024 – June 2024',
    achievements: [
      'Gained hands-on experience in Python programming, machine learning, and data analysis',
      'Worked on NLP, computer vision, and recommendation system projects under mentor guidance'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="text-blue-600" size={24} />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-slate-700 mt-2">{exp.company}</p>
                  <p className="text-sm text-slate-600 italic">{exp.collaboration}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
