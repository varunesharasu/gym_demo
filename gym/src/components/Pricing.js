import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { packages } from '../data/mockData';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-950 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            <span className="text-white">Simple, Transparent </span>
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to achieve your fitness goals. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`fade-in-section relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                pkg.popular
                  ? 'md:scale-105 border-2 border-accent-500 shadow-2xl shadow-accent-500/30'
                  : 'border border-primary-500/30 hover:border-primary-500/50'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Background */}
              <div className={`absolute inset-0 ${pkg.popular ? 'bg-slate-900/80' : 'bg-slate-900/50'} backdrop-blur-md`}></div>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center py-2 font-bold text-sm">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full pt-12">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-black gradient-text">${pkg.monthlyPrice}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                  <p className="text-sm text-gray-500 mt-2">
                    or ${pkg.yearlyPrice}/year (save 20%)
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-xl hover:shadow-accent-500/50'
                      : 'border-2 border-primary-500/50 text-white hover:border-primary-500 hover:bg-primary-500/10'
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Features</p>
                  {pkg.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <FaCheck className="text-primary-400 text-sm mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}

                  {/* Not Included */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="pt-6 border-t border-primary-500/20">
                      {pkg.notIncluded.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 text-gray-500 text-sm mb-2 opacity-60">
                          <span className="text-gray-600 mt-1">✕</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison CTA */}
        <div className="text-center fade-in-section">
          <p className="text-gray-400 mb-4">
            All plans include 24/7 gym access, free fitness assessment, and community support
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-primary-400 font-semibold hover:text-accent-400 transition-colors"
          >
            <span>Have Questions? Talk to our team</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
