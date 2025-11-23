import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-primary overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Australian Landscape and Community"
        />
        {/* New gradient using brand colors */}
        <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Where Culture Meets <br />
            <span className="text-brand-accent">Climate Solutions</span>
          </h1>
          <p className="mt-4 text-xl text-brand-light sm:max-w-xl leading-relaxed font-light mb-10 border-l-4 border-brand-secondary pl-6">
            We empower multicultural communities to lead on climate, from local grassroots actions to advocacy at all levels of government.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-brand-primary bg-brand-accent hover:bg-brand-secondary hover:text-white transition-all duration-300 md:text-lg shadow-lg"
            >
              Join Our Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#donate"
              className="flex items-center justify-center px-8 py-4 border-2 border-brand-accent text-base font-bold rounded-full text-brand-accent hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 md:text-lg backdrop-blur-sm"
            >
              Donate Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};