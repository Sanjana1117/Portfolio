import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 border-t border-slate-800 py-8 overflow-hidden">
      {/* Background colorful blurred blobs matching Hero */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl opacity-50 pointer-events-none" />
      <div className="absolute top-10 right-10 w-44 h-44 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0 text-gray-400">
            <p className="flex items-center justify-center md:justify-start text-sm md:text-base select-text">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                © 2025 Sanjana.
              </span>
              <span className="mx-2">Made with</span>
              <Heart
                className="text-red-400 mx-1 transition-transform duration-300 hover:scale-110 hover:text-pink-500 cursor-default"
                size={18}
                fill="currentColor"
                aria-label="love"
              />
              <span>and lots of coffee.</span>
            </p>
          </div>

          <div className="text-gray-400 text-xs md:text-sm text-center md:text-right select-text">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm italic select-text max-w-xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
