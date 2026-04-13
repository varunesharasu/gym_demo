import React from 'react';
import CountUp from './CountUp';

const StatCounter = ({ value, suffix = '', label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        <CountUp
          to={value}
          separator="," 
          className="inline-block"
          duration={2}
        />
        {suffix}
      </div>
      <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
