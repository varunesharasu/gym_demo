import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTrophy, FaUsers, FaHeart } from 'react-icons/fa';
import { stats } from '../data/mockData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: FaTrophy, title: 'Excellence', description: 'Premium facilities and expert coaching' },
    { icon: FaUsers, title: 'Community', description: 'Supportive environment that motivates' },
    { icon: FaHeart, title: 'Wellness', description: 'Holistic approach to health & fitness' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">FITPULSE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are committed to delivering exceptional fitness experiences through world-class facilities, expert trainers, and a thriving community.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="relative fade-in-section hidden md:block">
            <div className="relative rounded-2xl overflow-hidden border border-primary-500/30 h-96 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
              <img
                src="/about.png"
                alt="About FITPULSE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="fade-in-section space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Transform Your Life
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                With over 15 years of experience, FITPULSE has helped thousands of members achieve their fitness goals. Our state-of-the-art facility combines cutting-edge equipment with personalized coaching.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {['24/7 Access to Premium Facilities', 'Expert Certified Trainers', 'Customized Workout Programs', 'Nutrition Guidance Included'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300"
            >
              Join Now →
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-12 border-y border-primary-500/20">
          {stats.map((stat) => (
            <div key={stat.id} className="fade-in-section text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                {isVisible && stat.value}
                <span className="text-primary-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="fade-in-section glass-card-glow p-8 rounded-xl border border-primary-500/30 hover:border-accent-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent-500/30 transition-all duration-300">
                <value.icon className="text-2xl text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
