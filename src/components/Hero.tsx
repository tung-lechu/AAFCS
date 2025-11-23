import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-primary overflow-hidden min-h-[85vh] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Australian Landscape"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-accent text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            <span>Mobilising Australia's Diversity</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Where Culture Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
              Climate Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-surface/90 font-light leading-relaxed mb-10 max-w-2xl">
            We empower multicultural communities to lead on climate, from local actions to advocacy at all levels of government. We are building a more inclusive, resilient, and sustainable future for all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#join"
              className="group flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-primary text-lg font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(203,232,133,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Join Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#donate"
              className="flex items-center justify-center px-8 py-4 border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};