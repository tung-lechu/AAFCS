import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <div id="contact" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-primary sm:text-4xl">Get Involved</h2>
          <p className="mt-4 text-lg text-brand-grey">
            Whether you want to volunteer, partner with us, or share your community's story, we want to hear from you.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-secondary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-16">
                    <form className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-brand-primary mb-2">Full Name</label>
                            <input type="text" id="name" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border bg-slate-50" placeholder="Jane Citizen" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-2">Email Address</label>
                            <input type="email" id="email" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border bg-slate-50" placeholder="jane@example.com" />
                        </div>
                        <div>
                            <label htmlFor="interest" className="block text-sm font-semibold text-brand-primary mb-2">I'm interested in...</label>
                            <select id="interest" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border bg-slate-50">
                                <option>Volunteering</option>
                                <option>Partnership</option>
                                <option>Press / Media</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-brand-primary mb-2">Message</label>
                            <textarea id="message" rows={4} className="block w-full rounded-md border-slate-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border bg-slate-50" placeholder="Tell us how you'd like to help..."></textarea>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-md text-base font-bold rounded-full text-white bg-brand-primary hover:bg-brand-secondary transition-all duration-200 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative bg-brand-primary hidden lg:block">
                     <img 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Community Meeting"
                     />
                     <div className="relative z-10 p-16 flex flex-col justify-center h-full text-white">
                         <h3 className="text-3xl font-bold mb-6 text-brand-accent">Join Us in Person</h3>
                         <p className="mb-8 text-brand-light text-lg leading-relaxed">
                            We host regular town halls and climate cafes across major Australian cities. Check our events calendar for the next gathering near you.
                         </p>
                         <div className="space-y-6 border-t border-brand-secondary pt-8">
                             <div>
                                <p className="font-bold text-brand-accent text-sm uppercase tracking-wider mb-1">Head Office</p>
                                <p className="text-base text-brand-light">Level 3, 123 Sustainability St<br/>Melbourne, VIC 3000</p>
                             </div>
                             <div>
                                <p className="font-bold text-brand-accent text-sm uppercase tracking-wider mb-1">Email</p>
                                <p className="text-base text-brand-light">hello@aafcs.org.au</p>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};