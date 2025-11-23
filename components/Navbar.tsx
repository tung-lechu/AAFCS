import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our People', href: '#people' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Advocacy', href: '#advocacy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <img 
                src="/Asians.png" 
                alt="AAFCS Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                   <span className="font-bold text-xl tracking-tight text-brand-primary leading-none">Asians</span>
                   <span className="font-serif italic text-lg text-brand-secondary leading-none">for</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-brand-primary leading-none">Climate Solutions</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-primary hover:text-brand-secondary font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-md text-sm uppercase tracking-wide border border-transparent hover:shadow-lg"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-primary hover:text-brand-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-brand-light absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-primary hover:bg-brand-light hover:text-brand-secondary border-b border-slate-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#donate"
                className="block w-full text-center mt-6 bg-brand-primary text-white px-3 py-4 rounded-full font-bold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};