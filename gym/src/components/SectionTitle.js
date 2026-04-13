import React from 'react';
import ScrollReveal from './ScrollReveal';

const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <ScrollReveal
          containerClassName="max-w-2xl mx-auto"
          textClassName="text-gray-400 text-lg md:text-xl"
          baseOpacity={0.15}
          baseRotation={2}
          blurStrength={3}
        >
          {subtitle}
        </ScrollReveal>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-royal-500 to-royal-700 rounded-full ${
          center ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionTitle;
