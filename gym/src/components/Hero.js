import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { stats } from '../data/mockData';
import StatCounter from './StatCounter';

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-section space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></div>
                <span className="text-sm font-semibold text-primary-300">Transform Your Body Today</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight text-balance">
                <span className="text-white">Power Your </span>
                <span className="gradient-text">Potential</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg text-pretty">
                Join thousands of members transforming their lives. Expert training, cutting-edge facilities, and a community that pushes you to exceed your limits.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('services')}
                className="px-8 py-4 border-2 border-primary-500/50 text-white font-bold rounded-xl hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPlay className="text-sm" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-500/20">
              {stats.slice(0, 2).map((stat) => (
                <StatCounter key={stat.id} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-primary-500/30 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
              <img
                src="/hero.png"
                alt="Athlete training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md border border-primary-500/30 rounded-xl p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-300">Latest Achievement</p>
                  <p className="text-lg font-bold text-primary-400">500+ Transformations</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
