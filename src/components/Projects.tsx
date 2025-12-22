import { Code2, TrendingUp, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Image to Speech Converter',
    icon: Code2,
    description: 'Engineered an image-to-speech conversion system using machine learning, enabling visually impaired users to access printed materials with 95% accuracy in text recognition and translation, enhancing independent living.',
    tags: ['Machine Learning', 'NLP', 'Accessibility'],
    accuracy: '95%'
  },
  {
    title: 'ODI Player Performance Prediction',
    icon: TrendingUp,
    description: 'Leveraged machine learning algorithms to analyze player statistics and predict cricket performance with 98.48% accuracy, providing actionable insights for better player selection.',
    tags: ['Machine Learning', 'Data Analysis', 'Sports Analytics'],
    accuracy: '98.48%'
  },
  {
    title: 'AI-Powered Job Application Assistant',
    icon: FileText,
    description: 'Developed an AI-powered web app using Streamlit, LangChain, and OpenRouter API to generate personalized cover letters from resumes and job descriptions, featuring PDF parsing/export and a user-friendly interface.',
    tags: ['AI', 'NLP', 'Web Development'],
    accuracy: null
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  {project.accuracy && (
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {project.accuracy} accuracy
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
