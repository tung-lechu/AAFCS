import React from 'react';
import { Globe, Users, Leaf, Megaphone, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Communities', value: '50+' },
  { label: 'Languages', value: '25+' },
  { label: 'Volunteers', value: '500+' },
];

const pillars = [
  {
    name: 'Community Engagement',
    description: 'Culturally sensitive workshops empowering diverse communities on climate resilience.',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Advocacy & Policy',
    description: 'Direct government engagement ensuring multicultural voices shape national climate policy.',
    icon: Megaphone,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Grassroots Action',
    description: 'Local greening initiatives and renewable energy adoption in Asian-Australian households.',
    icon: Leaf,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Global Solidarity',
    description: 'Connecting Australian action with climate challenges in the Asia-Pacific region.',
    icon: Globe,
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-brand-surface relative overflow-hidden">
      
      {/* Floating Background Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Stats Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-3">Our Impact</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-primary leading-tight mb-6">
              Driving Real Change.
            </h3>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              We take a holistic approach to climate action, ensuring no community is left behind. Our work spans from living rooms to parliament house.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-secondary/10 text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-brand-dark/50 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.name} className="group bg-white p-8 rounded-3xl shadow-sm border border-brand-secondary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${pillar.color} transition-transform group-hover:scale-110`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                {pillar.name}
              </h4>
              <p className="text-brand-dark/60 text-sm leading-relaxed mb-8">
                {pillar.description}
              </p>
              
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-6 h-6 text-brand-secondary" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};