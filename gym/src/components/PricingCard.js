import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getIcon, featureIcons } from '../data/mockData';
import CountUp from './CountUp';

const PricingCard = ({ name, price, period, popular, features, notIncluded }) => {
  return (
    <div
      className={`relative glass-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal-500/20 overflow-hidden ${
        popular
          ? 'border-royal-500 shadow-2xl shadow-royal-500/20 animate-pulse-glow scale-105'
          : 'hover:border-gray-700'
      }`}
    >
      {/* Glow effect on hover */}
      {!popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-royal-500/0 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
      )}
      
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-royal-500 to-royal-700 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-royal-500/30">
            🌟 Most Popular
          </span>
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>

        <div className="mb-6">
          <span className="text-5xl font-extrabold gradient-text">$
            <CountUp to={price} separator="," className="inline-block" duration={1.5} />
          </span>
          <span className="text-gray-500 ml-2">/{period}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => {
            const iconName = featureIcons[feature];
            const Icon = iconName ? getIcon(iconName) : FaCheck;
            return (
              <li key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-500/20 flex items-center justify-center mt-0.5 group-hover:bg-royal-500/40 transition-colors">
                  <Icon className="text-royal-400 text-xs" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
              </li>
            );
          })}
          {notIncluded.map((feature, index) => (
            <li key={`no-${index}`} className="flex items-start gap-3 opacity-40 group">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-700/20 flex items-center justify-center mt-0.5">
                <FaTimes className="text-gray-600 text-xs" />
              </div>
              <span className="text-gray-500 line-through group-hover:text-gray-600 transition-colors text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 ${
            popular
              ? 'btn-primary hover:scale-105'
              : 'btn-outline hover:scale-105'
          }`}
          aria-label={`Choose ${name} plan at $${price} per ${period}`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
