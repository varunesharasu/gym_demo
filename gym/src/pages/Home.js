import React from 'react';
import { FaDumbbell, FaArrowRight } from 'react-icons/fa';
import HeroCarousel from '../components/HeroCarousel';
import StatCounter from '../components/StatCounter';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';
import { stats, testimonials, whyChooseUs, getIcon } from '../data/mockData';

const Home = () => {
  const featuredReview = testimonials[0];

  return (
    <section id="home">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero.png)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-royal-500/10 border border-royal-500/20 text-royal-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <FaDumbbell className="text-xs" />
                <span>#1 Premium Fitness Center</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Unleash Your
                <span className="block gradient-text">Inner Strength</span>
              </h1>
              <ScrollReveal
                containerClassName="max-w-lg mb-8"
                textClassName="text-gray-400 text-lg md:text-xl leading-relaxed"
                baseOpacity={0.14}
                baseRotation={2}
                blurStrength={3}
              >
                Transform your body. Elevate your mind. Join the most premium
                fitness experience in the city with world-class trainers and
                state-of-the-art equipment.
              </ScrollReveal>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary inline-flex items-center gap-2">
                  Book Free Trial
                  <FaArrowRight className="text-sm" />
                </a>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-outline inline-flex items-center gap-2">
                  View Plans
                </a>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <HeroCarousel />
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

      {/* Stats Section */}
      <section className="relative py-16 md:py-20 border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Experience the difference that sets us apart from every other gym"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="glass-card p-6 text-center group hover:border-royal-500/50 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                    <Icon className="text-royal-400 text-2xl" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-outline inline-flex items-center gap-2">
              Explore All Services <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="What Members Say"
            subtitle="Hear from our thriving community of fitness enthusiasts"
          />
          <TestimonialCard {...featuredReview} />
          <div className="text-center mt-8">
            <a href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-royal-400 hover:text-royal-300 font-medium inline-flex items-center gap-2 transition-colors">
              Read All Reviews <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900 via-royal-800 to-royal-950 opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-500/20 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-royal-200/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of members who have already transformed their lives.
            Your first session is on us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95 shadow-lg">
              Get Started Today
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
