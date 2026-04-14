import React from 'react';
import { FaDumbbell, FaArrowRight, FaUsers, FaTrophy, FaClock } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home">
      {/* Hero Section — Premium Ad-Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero.png)' }}
          aria-hidden="true"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-gray-950" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 via-transparent to-gray-950/40" aria-hidden="true" />

        {/* Animated accent glow */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-500/20 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-700/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-royal-500/10 border border-royal-500/20 text-royal-400 text-sm font-medium px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
              <FaDumbbell className="text-xs" />
              <span>#1 Premium Fitness Center in the City</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-6 tracking-tight">
              Transform Your
              <span className="block gradient-text mt-2">Body & Mind</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
              Where world-class equipment meets expert coaching.
              <span className="text-gray-300 font-medium"> Your journey to peak fitness starts here.</span>
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary inline-flex items-center gap-2 text-lg !px-10 !py-4"
              >
                Start Your Journey
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline inline-flex items-center gap-2 text-lg !px-10 !py-4"
              >
                Discover More
              </a>
            </div>

            {/* Floating Stats Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { icon: FaUsers, value: '5,000+', label: 'Active Members' },
                { icon: FaTrophy, value: '10+', label: 'Years of Excellence' },
                { icon: FaClock, value: '24/7', label: 'Always Open' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-2xl px-5 py-3 hover:border-royal-500/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-royal-500/15 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="text-royal-400 text-lg" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-royal-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
