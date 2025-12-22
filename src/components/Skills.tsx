import { Code, Database, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Java']
  },
  {
    title: 'Web Technologies',
    icon: Layers,
    skills: ['HTML', 'CSS']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL']
  },
  {
    title: 'Libraries & Tools',
    icon: Wrench,
    skills: ['Pandas', 'TensorFlow', 'NumPy', 'Git', 'GitHub']
  }
];

const coreAreas = ['Artificial Intelligence', 'Machine Learning', 'Object Oriented Programming'];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Core Areas</h3>
          <div className="flex flex-wrap gap-3">
            {coreAreas.map((area, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-lg font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
