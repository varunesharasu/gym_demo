import React from 'react';
import { FaDumbbell, FaRunning, FaFire, FaHeartbeat } from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Strength Training',
    description: 'Build muscle and power with expert-led programs designed to maximize gains',
    icon: FaDumbbell,
    color: 'from-primary-600 to-primary-400',
  },
  {
    id: 2,
    name: 'Cardio & Conditioning',
    description: 'Boost endurance and cardiovascular health with high-intensity workouts',
    icon: FaRunning,
    color: 'from-accent-600 to-accent-400',
  },
  {
    id: 3,
    name: 'HIIT Training',
    description: 'Intense interval training to torch calories and improve athletic performance',
    icon: FaFire,
    color: 'from-energy-600 to-energy-400',
  },
  {
    id: 4,
    name: 'Wellness & Recovery',
    description: 'Yoga, flexibility work, and recovery sessions for optimal body maintenance',
    icon: FaHeartbeat,
    color: 'from-primary-600 to-accent-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-950 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive training programs tailored to your fitness goals and lifestyle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="fade-in-section group relative rounded-xl overflow-hidden border border-primary-500/30 hover:border-accent-500/50 bg-slate-900/40 backdrop-blur-md p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20"
              >
                {/* Gradient Icon Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-accent-500/30 transition-all duration-300`}>
                    <Icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <button className="inline-flex items-center space-x-2 text-primary-400 font-semibold hover:text-accent-400 transition-colors group/btn">
                    <span>Learn More</span>
                    <span className="transform group-hover/btn:translate-x-2 transition-transform">→</span>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gradient-to-r from-primary-500/50 to-accent-500/50"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-section">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300"
          >
            View Full Schedule →
          </button>
        </div>
      </div>
    </section>
  );
}
