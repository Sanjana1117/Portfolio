import React from 'react';
import { Code2, Zap, Target } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-500' },
    { name: 'ReactJS', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-300 to-yellow-500' },
    { name: 'TailwindCSS', icon: '🎨', color: 'from-teal-400 to-cyan-500' },
    { name: 'MySQL', icon: '🗄️', color: 'from-blue-400 to-indigo-500' },
    { name: 'C++', icon: '⚡', color: 'from-purple-400 to-pink-500' },
    { name: 'Excel', icon: '📊', color: 'from-green-400 to-emerald-500' },
    { name: 'Vite', icon: '⚡', color: 'from-yellow-400 to-pink-500' }
  ];

  const learningSkills = [
    { name: 'Spring Boot', icon: '🍃', status: 'Building REST APIs' },
    { name: 'Node.js', icon: '🟢', status: 'Server-side development' },
    { name: 'Firebase', icon: '🔥', status: 'Real-time databases' },
    { name: 'Angular', icon: '🅰️', status: 'Frontend framework' }
  ];

  return (
    <section
      id="skills"
      className="py-20 relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Background accent blobs */}
      <div className="absolute -top-36 -left-36 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Core Skills */}
            <div className="relative group">
              {/* Overlay gradient for subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>

              <div className="about-card relative bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-slate-700/60 shadow-2xl hover:border-cyan-400/50 transition-all duration-300 cursor-default">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-5 shadow-lg">
                    <Code2 className="text-white" size={26} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-green-400 tracking-wide">Core Technologies</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {coreSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center justify-between rounded-xl p-5 bg-slate-900/50 border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 shadow-lg border border-slate-600/30 bg-gradient-to-br from-slate-700/50 to-slate-600/50 group-hover:shadow-purple-400/70 transition-shadow duration-300`}
                        >
                          <span className="text-2xl">{skill.icon}</span>
                        </div>
                        <span className="text-white font-semibold text-xl">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Skills */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>

              <div className="about-card relative bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-slate-700/60 shadow-2xl hover:border-orange-400/50 transition-all duration-300 cursor-default">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mr-5 shadow-lg">
                    <Zap className="text-white" size={26} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-green-400 tracking-wide">Currently Learning</h3>
                </div>

                <div className="space-y-8">
                  {learningSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/learning rounded-2xl p-7 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/40 shadow-lg hover:shadow-xl hover:border-orange-400/60 transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mr-5 shadow-lg transition-all duration-300 ${
                              skill.color ? skill.color : 'from-indigo-400 to-purple-500'
                            }`}
                          >
                            <span className="text-2xl">{skill.icon}</span>
                          </div>
                          <div>
                            <span className="text-white font-bold text-xl block">{skill.name}</span>
                            <span className="text-orange-300 text-base font-semibold">{skill.status}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
                          <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-10 p-7 bg-gradient-to-br from-slate-900/90 to-slate-800/70 rounded-2xl border border-slate-600/40 backdrop-blur-sm shadow-xl">
                    <h4 className="text-white font-extrabold mb-6 flex items-center text-xl">
                      <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <Target className="text-white" size={18} />
                      </div>
                      Exploring Next:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['Bootstrap', 'AWS', 'MongoDB', 'TypeScript'].map((tech) => (
                        <div
                          key={tech}
                          className="px-5 py-4 bg-gradient-to-br from-slate-700/70 to-slate-600/50 hover:from-pink-600/40 hover:to-violet-600/40 text-gray-200 hover:text-pink-300 rounded-xl text-base font-bold transition-all duration-300 text-center border border-slate-600/50 hover:border-pink-400/60 shadow-md hover:shadow-lg transform hover:scale-105 cursor-default"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-card {
          border-radius: 1.5rem;
          transition-property: border, box-shadow, transform;
          transition-timing-function: cubic-bezier(.16,1,.32,1);
          transition-duration: 0.3s;
        }
        .about-card:hover {
          box-shadow: 0 12px 50px 8px rgba(139,92,246,0.40);
          border-color: rgba(139,92,246,0.7);
          transform: translateY(-8px);
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default Skills;
