import React from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    {
      href: 'https://github.com/Sanjana1117',
      label: 'GitHub',
      icon: <Github size={32} />,
    },
    {
      href: 'https://www.linkedin.com/in/sanjana-c-413770337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
      icon: <Linkedin size={32} />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Subtle blobs matching your color accents */}
      <div className="absolute -top-36 -left-32 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-2xl opacity-70" />
      <div className="absolute top-1/4 -right-32 w-56 h-56 bg-gradient-to-tl from-pink-400/20 to-purple-400/20 rounded-full blur-xl opacity-70" />
      <div className="absolute -bottom-24 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/10 via-cyan-400/20 to-pink-300/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mt-20 lg:mt-0">
            <h2 className="text-5xl md:text-5xl font-bold mt-20 mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_3px_25px_rgba(139,92,246,0.23)] animate-fade-in">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Sanjana
              </span>
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-delay-1 drop-shadow-[0_2px_10px_rgba(52,211,153,0.10)]">
              Web Developer & Data Science Student
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fade-in-delay-2">
              I’m a web enthusiast passionate about crafting sleek, interactive front-end experiences and exploring the latest tech. With a creative flair for colorful code and curiosity for data science and machine learning, I love turning ideas into eye-catching, impactful digital realities.
            </p>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-8 mb-10 animate-fade-in-delay-2">
              {socials.map(social => (
                <a
                  href={social.href}
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    text-cyan-300 bg-slate-800/50 p-3 rounded-full
                    border border-cyan-400/40 hover:border-pink-400 shadow-xl
                    hover:text-pink-300 hover:bg-slate-700 transition-all duration-200
                    focus:ring-2 focus:ring-purple-400
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Action buttons: Only "View Resume" and "Get In Touch" */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-16 animate-fade-in-delay-3">
              <a
                href="/Sanjana.pdf" // Change this to your actual resume path!
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-10 py-3 bg-gradient-to-tr from-cyan-400 to-purple-500
                  shadow-lg rounded-xl text-white font-bold text-lg
                  hover:from-pink-500 hover:to-cyan-400
                  hover:shadow-pink-400/40
                  transition-all duration-200 transform hover:scale-110
                  border border-slate-700
                  text-center
                "
                aria-label="View Resume"
              >
                View Resume
              </a>
              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="
                  px-10 py-3 bg-gradient-to-tr from-green-300 via-cyan-400 to-purple-300
                  text-white rounded-xl font-bold text-lg
                  shadow-lg hover:from-purple-400 hover:via-cyan-200 hover:to-pink-400
                  transition-all duration-200
                  border border-slate-700
                "
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image (with pop on hover) */}
          <div className="
            flex-shrink-0 mt-20
            w-48 h-48 md:w-64 md:h-64
            rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500 ring-opacity-70
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:ring-pink-400 hover:ring-opacity-80 hover:shadow-pink-400/40
          ">
            <img
              src="/san_profile.jpg"
              alt="Sanjana Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Down arrow */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce mx-auto mt-6 flex items-center justify-center text-cyan-300 hover:text-pink-300 transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
