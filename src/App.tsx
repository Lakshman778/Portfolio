import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, Briefcase, Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Image to Speech Converter",
      description: "Engineered an ML-powered system enabling visually impaired users to access printed materials with 95% text recognition accuracy.",
      tech: ["HTML", "Python", "Machine Learning", "Computer Vision", "NLP"],
      impact: "Enhanced independent living for visually impaired users",
      github: "https://github.com/Lakshman778/Image_to_speech_Convertor"
    },
    {
      title: "ODI Player Performance Prediction",
      description: "Leveraged ML algorithms to analyze cricket statistics and predict player performance with 98.48% accuracy.",
      tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis", "Pandas"],
      impact: "Actionable insights for player selection",
      github: "https://github.com/Lakshman778/ODI_Player_Performance_Prediction"
    },
    {
      title: "AI-Powered Job Application Assistant",
      description: "Developed web app using Streamlit, LangChain, and OpenRouter API to generate personalized cover letters from resumes and job descriptions.",
      tech: ["Python", "Streamlit", "LangChain", "OpenRouter API"],
      impact: "Streamlined job application process with PDF parsing and export",
      github: "https://github.com/Lakshman778/AI-Job-Application-Assistant"
    },
    {
      title: "CRM Application for Banquet Hall Booking",
      description: "Built a comprehensive CRM system for managing banquet hall bookings, customer relationships, and event coordination.",
      tech: ["Salesforce", "Apex", "Lightning Web Components", "SOQL"],
      impact: "Streamlined booking management and customer service",
      github: "https://github.com/Lakshman778/A_CRM_Application_For_Banquet_Hall_Booking"
    },
    {
      title: "Energy Theft Detection",
      description: "Developed a machine learning model to detect electricity theft patterns and anomalies in power consumption data.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Anomaly Detection"],
      impact: "Improved energy distribution efficiency and reduced losses",
      github: "https://github.com/Lakshman778/Energy_Theft_Detection"
    },
    {
      title: "UI Remix Portfolio",
      description: "Created a modern, responsive portfolio website showcasing web development skills and design capabilities.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      impact: "Professional online presence with modern UI/UX",
      github: "https://github.com/Lakshman778/Lakshman-Kumar-UIRemix"
    }
  ];

  const experience = [
    {
      role: "Salesforce Developer Intern",
      company: "SmartBridge Educational Services",
      period: "May 2025 – June 2025",
      collaboration: "In collaboration with APSCHE",
      points: [
        "Gained hands-on experience in application development, data modeling, and process automation",
        "Designed custom modules and interactive UI components to enhance system usability",
        "Practiced version control, testing, and deployment using industry-standard tools and workflows"
      ]
    },
    {
      role: "AI Intern",
      company: "SmartBridge Educational Services",
      period: "April 2024 – June 2024",
      collaboration: "In collaboration with APSCHE",
      points: [
        "Gained hands-on experience in Python programming, machine learning, and data analysis",
        "Worked on NLP, computer vision, and recommendation system projects under mentor guidance"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java"],
    "Web Technologies": ["HTML", "CSS", "Streamlit"],
    "Databases": ["MySQL"],
    "ML & AI": ["TensorFlow", "Pandas", "NumPy", "Machine Learning", "NLP"],
    "Tools & Platforms": ["Git", "GitHub", "LangChain", "Salesforce"]
  };

  const certifications = [
    { name: "Kaggle: Python Certification", issuer: "Kaggle" },
    { name: "Introduction to Artificial Intelligence (AI)", issuer: "Coursera" },
    { name: "Python for Everyone — Master the Basics of Programming", issuer: "Udemy" },
    { name: "Program Essentials in Python", issuer: "Cisco Networking Academy" },
    { name: "Databases for Developers — Foundations", issuer: "Oracle" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-8">
                {/* Profile Image - Desktop */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-6"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">LK</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Nimmagadda Lakshman Kumar
                  </h1>
                  <p className="text-2xl md:text-3xl text-blue-200 font-light">
                    AI/ML Developer & Software Engineer
                  </p>
                </div>
              </div>

              {/* Profile Image - Mobile */}
              <div className="md:hidden flex justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-6"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">LK</span>
                  </div>
                </div>
              </div>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Motivated and highly adaptable software professional, eager to apply programming knowledge,
              collaborate effectively, and contribute to impactful solutions in a dynamic work environment.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:nimmagaddalakshmankumar@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg">
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a href="tel:+919381803663" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg">
                <Phone size={20} />
                <span>Call</span>
              </a>
              <a href="https://www.linkedin.com/in/lakshman-kumar-nimmagadda/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Lakshman778" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology in CSE (Artificial Intelligence & Machine Learning)</h3>
                  <p className="text-gray-700 font-medium">Seshadri Rao Gudlavalleru Engineering College</p>
                  <p className="text-gray-500 text-sm mt-1">Gudlavalleru, Andhra Pradesh</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-600 text-sm font-medium mb-2">Oct 2022 – May 2026</p>
                  <p className="text-blue-600 text-lg font-bold">CGPA: 8.49</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Intermediate in MPC</h3>
                  <p className="text-gray-700 font-medium">Narayana Junior College</p>
                  <p className="text-gray-500 text-sm mt-1">Vijayawada, Andhra Pradesh</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-600 text-sm font-medium mb-2">Aug 2020 – May 2022</p>
                  <p className="text-blue-600 text-lg font-bold">Percentage: 90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="max-w-4xl space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-700 mb-1 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 italic">{exp.collaboration}</p>
                  </div>
                  <span className="text-blue-700 bg-blue-100 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-blue-200">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          </div>

          <div className="max-w-6xl grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{project.description}</p>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wide">Impact</p>
                  <p className="text-gray-600 text-sm">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Github size={18} />
                  View Repository
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          </div>

          <div className="max-w-5xl grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-white border-2 border-blue-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-400 hover:shadow-md transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-blue-600" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
          </div>

          <div className="max-w-4xl grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="text-blue-600 flex-shrink-0" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1 leading-snug">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center space-y-3">
          <p className="text-lg font-medium">
            © 2025 Nimmagadda Lakshman Kumar
          </p>
          <p className="text-blue-200 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
