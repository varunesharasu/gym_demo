import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import BorderGlow from '../components/BorderGlow';
import { packages, amenities, whyChooseUs, trainers, getIcon } from '../data/mockData';

const Services = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section id="services">
      {/* ============ ENHANCED HERO ============ */}
      <section className="relative py-20 md:py-32 overflow-hidden group/hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/services.png)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-500/10 via-gray-950/85 to-gray-950/90" aria-hidden="true" />
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30 group-hover/hero:opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.4) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="animate-[fade-in_0.8s_ease-out_forwards] mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-royal-500/20 border border-royal-500/40 text-royal-300 text-sm font-semibold">
              ✨ Premium Fitness Experience
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-[slide-up_0.8s_ease-out_forwards]">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From beginner-friendly programs to advanced athletic training — discover
            packages, amenities, and everything that makes us the best choice for your fitness journey.
          </p>
        </div>
      </section>

      {/* ============ PRICING PACKAGES WITH TOGGLE ============ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-12">
            <SectionTitle
              title="Membership Packages"
              subtitle="Choose the plan that fits your goals and lifestyle"
            />
            
            {/* Billing Toggle */}
            <div className="flex items-center gap-4 bg-gray-900/50 border border-gray-800/50 rounded-full p-2 backdrop-blur">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-royal-500 to-royal-600 text-white shadow-lg shadow-royal-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingPeriod === 'yearly'
                    ? 'bg-gradient-to-r from-royal-500 to-royal-600 text-white shadow-lg shadow-royal-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly<span className="ml-2 text-xs bg-green-500/30 text-green-300 px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={pkg.id} className={`group animate-[fade-in_0.6s_ease-out_forwards_${idx * 100}ms_backwards]`}>
                <PricingCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PREMIUM AMENITIES ============ */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Premium Amenities"
            subtitle="World-class facilities designed for your comfort and performance"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = getIcon(amenity.icon);
              return (
                <BorderGlow
                  key={amenity.id}
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
                  <div
                    className="glass-card relative overflow-hidden p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-royal-500/50"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-royal-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-royal-400/50 to-transparent opacity-60" />

                    <div className="relative z-10 group">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-royal-500/15 to-royal-700/20 border border-royal-500/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-royal-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner shadow-black/20">
                        <Icon className="text-royal-400 text-xl group-hover:animate-bounce" />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-1">{amenity.name}</h3>
                      <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">{amenity.description}</p>
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose JERAI"
            subtitle="What sets us apart from every other gym in the city"
          />
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
            {/* Decorative dividers */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-royal-500/30 to-transparent -translate-x-1/2 -translate-y-1/2" />
            
            {whyChooseUs.map((item, idx) => {
              const Icon = getIcon(item.icon);
              return (
                <BorderGlow
                  key={item.id}
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
                  <div className="glass-card relative overflow-hidden p-6 md:p-8 flex gap-4 items-start transition-all duration-300 hover:-translate-y-2 hover:border-royal-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-royal-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 h-1 w-20 bg-gradient-to-r from-royal-500/50 to-transparent opacity-70" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-royal-500/15 to-royal-700/25 border border-royal-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-black/15">
                        <Icon className="text-royal-400 text-xl" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ TRAINER SPOTLIGHT ============ */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Trainer Spotlight"
            subtitle="Meet our certified experts ready to transform your fitness journey"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, idx) => (
              <BorderGlow
                key={trainer.id}
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
                <div
                  className={`${'glass-card relative overflow-hidden p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-royal-500/50'} group`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-royal-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-400/60 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg shadow-royal-500/30 ring-1 ring-white/10">
                      {trainer.initials}
                    </div>

                    <h3 className="text-white font-semibold mb-1">{trainer.name}</h3>
                    <p className="text-royal-400 text-sm font-medium mb-2">{trainer.role}</p>

                    <div className="space-y-2 text-sm">
                      <p className="text-gray-500">{trainer.speciality}</p>
                      <p className="text-gray-600 text-xs">{trainer.experience} experience</p>
                      <button className="mt-3 text-royal-400 hover:text-royal-300 text-xs font-semibold transition-colors">
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
};

export default Services;
