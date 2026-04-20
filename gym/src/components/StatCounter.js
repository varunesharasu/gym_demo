import React from 'react';
import CountUp from './CountUp';

const StatCounter = ({ value, suffix = '', label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black mb-2">
        <span className="gradient-text">
          <CountUp
            to={value}
            separator="," 
            className="inline-block"
            duration={2}
          />
        </span>
        <span className="text-primary-400">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
