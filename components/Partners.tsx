import React from 'react';

const partners = [
  { name: 'Climate Council', color: 'bg-brand-secondary/10 text-brand-primary' },
  { name: 'Diversity Arts', color: 'bg-brand-secondary/10 text-brand-primary' },
  { name: 'Sustainability Vic', color: 'bg-brand-secondary/10 text-brand-primary' },
  { name: 'Local Gov', color: 'bg-brand-secondary/10 text-brand-primary' },
  { name: 'Eco Asia', color: 'bg-brand-secondary/10 text-brand-primary' },
  { name: 'Future Earth', color: 'bg-brand-secondary/10 text-brand-primary' },
];

export const Partners: React.FC = () => {
  return (
    <div className="bg-white py-16 border-y border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-brand-grey uppercase tracking-widest mb-8">
          Trusted by leading organisations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              {/* Placeholder for Logos */}
              <div className={`h-12 w-32 rounded-lg flex items-center justify-center font-bold text-xs ${partner.color}`}>
                  {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};