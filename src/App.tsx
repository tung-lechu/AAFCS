import React from 'react';
// 👇 THESE ARE THE CORRECTED LINES
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-primary selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        
        {/* Mission / Intro Section */}
        <section className="py-24 px-4 bg-brand-light" id="about">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary mb-8 leading-tight">
                    Mobilising the power of Australia's diversity for a safe climate.
                </h2>
                <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 rounded-full"></div>
                <p className="text-lg md:text-xl text-brand-grey leading-relaxed font-light">
                    AAFCS is the leading network for Asian-Australians committed to climate action. 
                    We recognise that the impacts of climate change are felt disproportionately in our region, 
                    and that our diverse communities hold the key to innovative, resilient solutions.
                </p>
            </div>
        </section>

        <Features />
        <Team />

        {/* Advocacy Banner */}
        <section className="bg-brand-primary py-24 relative overflow-hidden" id="advocacy">
            <div className="absolute inset-0 opacity-10">
                 <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                 </svg>
            </div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">Advocacy & Policy Influence</h2>
                <p className="max-w-3xl mx-auto text-xl text-brand-light mb-10 leading-relaxed font-light">
                    We work directly with policymakers to ensure climate legislation reflects the needs of multicultural communities. 
                    Our submissions have shaped policy at local, state, and federal levels.
                </p>
                <a href="#reports" className="inline-block px-8 py-4 bg-transparent border-2 border-brand-accent text-brand-accent font-bold rounded-full hover:bg-brand-accent hover:text-brand-primary transition-all duration-300">
                    Read Our Reports
                </a>
            </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;