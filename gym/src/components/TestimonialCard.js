import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import BorderGlow from './BorderGlow';

const TestimonialCard = ({ name, rating, message, membership, initials }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <BorderGlow
      className="h-full rounded-3xl"
      edgeSensitivity={32}
      glowColor="40 80 80"
      backgroundColor="#060010"
      borderRadius={24}
      glowRadius={34}
      glowIntensity={1}
      coneSpread={24}
      colors={['#7c3aed', '#ec4899', '#0ea5e9']}
      fillOpacity={0.42}
    >
      <div className="glass-card p-6 md:p-8 hover:border-royal-500/50 transition-all duration-300 group hover:-translate-y-1 h-full">
        <FaQuoteLeft className="text-royal-500/30 text-3xl mb-4 group-hover:text-royal-500/60 transition-colors" />
        <p className="text-gray-300 mb-6 leading-relaxed">{message}</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-500 to-royal-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-gray-500 text-sm truncate">{membership}</p>
          </div>
          <div className="flex gap-0.5 flex-shrink-0">
            {renderStars(rating)}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
};

export default TestimonialCard;
