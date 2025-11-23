import React from 'react';
import { Globe, Users, Leaf, Megaphone } from 'lucide-react';

const stats = [
  { id: 1, name: 'Communities Engaged', value: '50+' },
  { id: 2, name: 'Languages Spoken', value: '25+' },
  { id: 3, name: 'Policy Submissions', value: '100+' },
  { id: 4, name: 'Active Volunteers', value: '500+' },
];

const pillars = [
  {
    name: 'Community Engagement',
    description: 'We run culturally sensitive workshops and events to educate and empower diverse communities on climate resilience and adaptation.',
    icon: Users,
  },
  {
    name: 'Advocacy & Policy',
    description: 'Ensuring multicultural voices are heard in national climate policy conversations through direct government engagement.',
    icon: Megaphone,
  },
  {
    name: 'Grassroots Action',
    description: 'Supporting local greening initiatives, renewable energy adoption, and sustainable practices within Asian-Australian households.',
    icon: Leaf,
  },
  {
    name: 'Global Solidarity',
    description: 'Building bridges between Australian climate action and the climate challenges faced by our neighbors in the Asia-Pacific region.',
    icon: Globe,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="impact" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/50 skew-x-12 -z-10"></div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-brand-primary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Abstract organic shapes for background */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
             
             <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.id}>
                        <div className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-2">{stat.value}</div>
                        <div className="text-brand-light/80 text-sm font-medium tracking-wide uppercase">{stat.name}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-secondary font-bold tracking-wider uppercase mb-2">Our Work</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-primary">
            Driving Change Through Three Key Pillars
          </p>
          <p className="mt-4 max-w-2xl text-lg text-brand-grey mx-auto">
            We take a holistic approach to climate action, ensuring no community is left behind in the transition to a sustainable future.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="flex flex-col md:flex-row gap-6 p-8 bg-brand-light rounded-2xl border border-transparent hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white text-brand-primary shadow-sm ring-1 ring-brand-secondary/20 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                        <pillar.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-3">{pillar.name}</h3>
                    <p className="text-brand-grey leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};