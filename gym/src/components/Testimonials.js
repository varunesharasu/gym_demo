import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const itemsPerView = window.innerWidth < 768 ? 1 : 3;
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Members Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real people who transformed their lives at FITPULSE
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="fade-in-section glass-card-glow border border-primary-500/30 rounded-xl p-8 group hover:border-accent-500/50 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent-400 text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="border-t border-primary-500/20 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.membership}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-lg border border-primary-500/30 hover:border-accent-500/50 hover:bg-accent-500/10 text-primary-300 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx >= currentIndex && idx < currentIndex + 3
                      ? 'bg-accent-500 w-8'
                      : 'bg-primary-500/50 hover:bg-primary-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-lg border border-primary-500/30 hover:border-accent-500/50 hover:bg-accent-500/10 text-primary-300 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
