import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white border-t border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">AAFCS</h3>
            <p className="text-brand-light/80 text-sm leading-relaxed max-w-xs">
              Asian Australians for Climate Solutions is a registered Australian charity with DGR1 status (ABN: 54670124348).
            </p>
            <div className="flex space-x-4 pt-2">
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-light/70 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#people" className="text-brand-light/70 hover:text-white transition-colors text-sm">Our People</a></li>
              <li><a href="#impact" className="text-brand-light/70 hover:text-white transition-colors text-sm">Our Impact</a></li>
              <li><a href="#advocacy" className="text-brand-light/70 hover:text-white transition-colors text-sm">Advocacy & Policy</a></li>
              <li><a href="#events" className="text-brand-light/70 hover:text-white transition-colors text-sm">Future Events</a></li>
            </ul>
          </div>

          {/* Resources */}
           <div>
            <h3 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-6">Get Involved</h3>
            <ul className="space-y-3">
              <li><a href="#volunteer" className="text-brand-light/70 hover:text-white transition-colors text-sm">Volunteers</a></li>
              <li><a href="#code-of-care" className="text-brand-light/70 hover:text-white transition-colors text-sm">Codes of Care</a></li>
              <li><a href="#donate" className="text-brand-light/70 hover:text-white transition-colors text-sm">Donate</a></li>
              <li><a href="#contact" className="text-brand-light/70 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Acknowledgement */}
          <div>
            <h3 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-6">Acknowledgement of Country</h3>
            <p className="text-brand-light/70 text-xs leading-relaxed">
               We acknowledge all the First Nations and First Nations Peoples. This land is, and always will be, unceded Aboriginal land.
               <br/><br/>
               We recognise that as migrant communities, our opportunities and livelihoods in Australia exist because of colonisation, and with that comes responsibility. We honour the enduring custodianship of First Nations people, who have cared for Country for more than 65,000 years.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-light/50">
          <p>&copy; {new Date().getFullYear()} AAFCS.AU. All rights reserved. Registered Charity.</p>
          <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};