import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Leading the strategic vision of AAFCS with 15 years of experience in climate policy and environmental law.',
  },
  {
    name: 'James Nguyen',
    role: 'Community Engagement Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about grassroots organising and ensuring culturally diverse voices are central to the climate conversation.',
  },
  {
    name: 'Priya Sharma',
    role: 'Policy Advisor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in federal climate policy and renewable energy transition strategies for diverse communities.',
  },
  {
    name: 'David Kim',
    role: 'Partnerships Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Building strong alliances across corporate, government, and non-profit sectors to amplify our impact.',
  },
];

export const Team: React.FC = () => {
  return (
    <div id="people" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-primary sm:text-4xl">Our People</h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-grey mx-auto">
            A diverse team of experts, advocates, and community leaders dedicated to a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group relative bg-brand-light rounded-none border-b-4 border-brand-secondary/20 hover:border-brand-primary transition-all duration-300">
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden h-64 bg-slate-200">
                 <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    src={member.image}
                    alt={member.name}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                     <div className="flex space-x-3 text-white">
                         <a href="#" className="hover:text-brand-accent"><Linkedin className="w-5 h-5"/></a>
                         <a href="#" className="hover:text-brand-accent"><Mail className="w-5 h-5"/></a>
                     </div>
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-sm text-brand-grey leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};