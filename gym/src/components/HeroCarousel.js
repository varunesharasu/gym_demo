import React, { useState, useEffect, useCallback } from 'react';
import { offers } from '../data/mockData';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % offers.length);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Special offers carousel"
      aria-live="polite"
    >
      {/* Slides */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="min-w-full p-8 md:p-10 glass-card border-royal-500/30"
              aria-hidden={offers.indexOf(offer) !== current}
            >
              <div className="inline-block bg-royal-500/20 text-royal-400 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                {offer.discount}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {offer.title}
              </h3>
              <p className="text-royal-300 font-medium mb-3">{offer.subtitle}</p>
              <p className="text-gray-400 mb-6">{offer.description}</p>
              <button className="btn-primary" aria-label={offer.cta}>
                {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6" role="tablist">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-royal-500'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to offer ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
