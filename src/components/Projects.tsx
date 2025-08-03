import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Database } from 'lucide-react';

const Projects = () => {
  const project = {
    title: "Smart Campus Management System",
    description:
      "A modern, full-stack web dashboard designed for universities and colleges, streamlining and digitizing academic administration for admins, faculty, and students.",
    technologies: ["ReactJS", "TailwindCSS", "JavaScript", "Vite"],
    link: "https://campus-core-gamma.vercel.app/",
    image:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Admin Dashboard for comprehensive management",
      "Faculty interface for course and student management",
      "Student portal for academic information",
      "Responsive design for all devices",
      "Modern UI/UX with intuitive navigation",
    ],
  };

  return (
    <section
      id="projects"
      className="py-20 relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Background accent blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <div className="about-card bg-slate-800/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/60 shadow-2xl transition-all duration-300 hover:shadow-[0_10px_40px_8px_rgba(139,92,246,0.4)] hover:border-purple-500 cursor-default">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Project Image */}
              <div className="relative group rounded-2xl overflow-hidden border border-slate-600/40 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-80 group-hover:opacity-100 transition-all duration-300"></div>
                <img
                  src="/cam.jpg"
                  alt={project.title}
                  className="w-full h-92 object-cover rounded-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent rounded-2xl z-20"></div>
                <div className="absolute bottom-5 left-5 right-5 z-30">
                  <div className="flex items-center space-x-3 text-white/80">
                    <Monitor size={18} />
                    <Smartphone size={18} />
                    <Database size={18} />
                    <span className="text-sm font-medium">
                      Full-Stack Web Application
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-8 text-left">
                <h3 className="text-3xl font-extrabold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 transition-colors duration-300 hover:bg-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0 shadow-md" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-tr from-cyan-400 to-purple-500 hover:from-pink-500 hover:to-cyan-400 text-white rounded-2xl font-extrabold shadow-lg transition-transform duration-300 transform hover:scale-105 border border-slate-700"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon */}
          <div className="text-center mt-20">
            <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/40 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-5">
                More Projects Coming Soon!
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm continuously working on exciting new projects that showcase
                different aspects of web development and data science.
              </p>
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
          box-shadow: 0 12px 50px 8px rgba(139,92,246,0.4);
          border-color: rgba(139,92,246,0.7);
          transform: translateY(-8px);
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default Projects;
