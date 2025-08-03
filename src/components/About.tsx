import React from 'react';
import { User, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Background blobs (same as Hero) */}
      <div className="absolute -top-36 -left-32 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-2xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-56 h-56 bg-gradient-to-tl from-pink-400/20 to-purple-400/20 rounded-full blur-xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/10 via-cyan-400/20 to-pink-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cards left column */}
            <div className="space-y-8">
              {/* Who I Am */}
              <div className="about-card group transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_10px_30px_6px_rgba(34,211,238,0.3)] hover:border-cyan-400/70">
                <div className="flex items-center mb-4">
                  <User className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Who I Am
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I’m a web enthusiast passionate about crafting sleek, intuitive front-end experiences and exploring the latest web tech. I enjoy diving into data science—learning machine learning with hands-on projects and fresh curiosity. Every build is a chance to experiment, push boundaries, and turn ideas into real-world impact.
                </p>
              </div>

              {/* Education */}
              <div className="about-card group transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_10px_30px_6px_rgba(236,72,153,0.3)] hover:border-pink-400/70">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-green-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing Integrated MTech in Computer Science Engineering with specialization in Data Science at SRM Institute of Science and Technology, DSBS Department.
                </p>
              </div>
            </div>

            {/* My Focus */}
            <div className="about-card group transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_10px_30px_6px_rgba(139,92,246,0.3)] hover:border-purple-400/70">
              <div className="flex items-center mb-6">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  My Focus
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently exploring the intersection of full-stack development and data-driven solutions. I believe in creating technology that makes a meaningful impact on people's lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Data Science & Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Campus Technology Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">User Experience Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for about-card */}
      <style>{`
        .about-card {
          @apply bg-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/60 shadow-xl;
          transition: all 0.3s cubic-bezier(.16,1,.32,1);
        }
        .about-card p {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .about-card:hover {
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default About;
