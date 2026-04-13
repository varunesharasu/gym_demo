import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import { packages, amenities, whyChooseUs, getIcon } from '../data/mockData';

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/services.png)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-950/80" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From beginner-friendly programs to advanced athletic training — discover
            packages, amenities, and everything that makes us the best choice for your fitness journey.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Membership Packages"
            subtitle="Choose the plan that fits your goals and lifestyle"
          />
          <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PricingCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Premium Amenities"
            subtitle="World-class facilities designed for your comfort and performance"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity) => {
              const Icon = getIcon(amenity.icon);
              return (
                <div
                  key={amenity.id}
                  className="glass-card p-6 text-center group hover:border-royal-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-royal-500/20 transition-colors">
                    <Icon className="text-royal-400 text-xl" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{amenity.name}</h3>
                  <p className="text-gray-500 text-xs">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose JERAI"
            subtitle="What sets us apart from every other gym in the city"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="glass-card p-6 md:p-8 flex gap-4 items-start group hover:border-royal-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-royal-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-500/20 transition-colors">
                    <Icon className="text-royal-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
