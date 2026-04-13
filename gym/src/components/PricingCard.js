import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingCard = ({ name, price, period, popular, features, notIncluded }) => {
  return (
    <div
      className={`relative glass-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
        popular
          ? 'border-royal-500 shadow-2xl shadow-royal-500/20 animate-pulse-glow scale-105'
          : 'hover:border-gray-700'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-royal-500 to-royal-700 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>

      <div className="mb-6">
        <span className="text-5xl font-extrabold gradient-text">${price}</span>
        <span className="text-gray-500 ml-2">/{period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheck className="text-royal-500 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
        {notIncluded.map((feature, index) => (
          <li key={`no-${index}`} className="flex items-start gap-3 opacity-40">
            <FaTimes className="text-gray-600 mt-1 flex-shrink-0" />
            <span className="text-gray-500 line-through">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 ${
          popular
            ? 'btn-primary'
            : 'btn-outline'
        }`}
        aria-label={`Choose ${name} plan at $${price} per ${period}`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
