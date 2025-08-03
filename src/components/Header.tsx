import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.6)]'
          : 'bg-slate-900/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with gradient text */}
          <div
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer select-none"
            onClick={() => scrollToSection('#home')}
            aria-label="Go to home section"
          >
            Sanjana
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative font-medium text-gray-300 transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={`Scroll to ${item.name}`}
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-1 bg-slate-900/95 backdrop-blur-md border-t border-purple-600 shadow-lg rounded-b-lg">
            <div className="px-6 py-5 space-y-4 text-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full font-medium text-gray-300 hover:text-pink-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-400 hover:to-pink-500 rounded-md py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={`Scroll to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
