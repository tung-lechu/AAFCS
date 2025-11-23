import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow only when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our People', href: '#people' },
    { name: 'Impact', href: '#impact' },
    { name: 'Advocacy', href: '#advocacy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-brand-secondary/10 py-2' 
        : 'bg-white py-4 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <img 
              src="/Asians.png" 
              alt="AAFCS Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
               <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-xl tracking-tight text-brand-primary leading-none">Asians</span>
                  <span className="font-serif italic text-lg text-brand-secondary leading-none">for</span>
               </div>
               <span className="font-bold text-xl tracking-tight text-brand-primary leading-none">Climate Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-dark/80 hover:text-brand-secondary font-medium transition-colors duration-200 text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-primary hover:bg-brand-surface focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-brand-surface shadow-xl animate-fade-in-up">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-brand-primary hover:bg-brand-surface hover:text-brand-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#donate"
                className="block w-full text-center mt-6 bg-brand-primary text-white px-4 py-4 rounded-lg font-bold shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};