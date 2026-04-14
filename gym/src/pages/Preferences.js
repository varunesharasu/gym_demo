import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import PricingCard from '../components/PricingCard';
import { preferences, packages, getIcon } from '../data/mockData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Preferences = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section id="preferences">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-950 via-gray-950 to-gray-950" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h1>
          <ScrollReveal
            containerClassName="max-w-2xl mx-auto"
            textClassName="text-gray-400 text-lg md:text-xl leading-relaxed"
            baseOpacity={0.14}
            baseRotation={2}
            blurStrength={3}
          >
            Whether you're a beginner or a seasoned athlete, JERAI FITNESS has been
            designed with you in mind. Discover why thousands trust us with their fitness journey.
          </ScrollReveal>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Built for Everyone"
            subtitle="Tailored experiences for every fitness level and lifestyle"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {preferences.audiences.map((audience) => {
              const Icon = getIcon(audience.icon);
              return (
                <BorderGlow
                  key={audience.id}
                  className="h-full rounded-2xl"
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor="#060010"
                  borderRadius={22}
                  glowRadius={26}
                  glowIntensity={1}
                  coneSpread={24}
                  colors={['#7c3aed', '#ec4899', '#0ea5e9']}
                  fillOpacity={0.38}
                >
                  <div className="glass-card p-6 md:p-8 group hover:border-royal-500/50 hover:-translate-y-1 transition-all duration-300 text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-royal-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-royal-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-royal-400 text-3xl" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">{audience.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{audience.description}</p>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions — Expanded */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="What You Get"
            subtitle="Benefits that make your membership truly worthwhile"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {preferences.valueProps.map((prop, index) => (
              <BorderGlow
                key={index}
                className="h-full rounded-2xl"
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={22}
                glowRadius={26}
                glowIntensity={1}
                coneSpread={24}
                colors={['#7c3aed', '#ec4899', '#0ea5e9']}
                fillOpacity={0.38}
              >
                <div className="flex items-center gap-4 glass-card p-5 hover:border-royal-500/30 transition-all duration-300 h-full">
                  <FaCheckCircle className="text-royal-500 text-lg flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{prop}</span>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 border-t border-royal-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Convinced Yet?
          </h2>
          <p className="text-royal-200/70 text-lg mb-8">
            Your first session is completely free. No commitments, no pressure — just results.
          </p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary inline-flex items-center gap-2 text-lg">
            Book Your Free Trial <FaArrowRight />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Preferences;
