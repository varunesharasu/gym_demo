import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import BorderGlow from '../components/BorderGlow';
import CountUp from '../components/CountUp';
import { testimonials } from '../data/mockData';
import { FaStar, FaPen } from 'react-icons/fa';

const Reviews = () => {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section id="reviews">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-royal-950/30 to-gray-950" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Customer <span className="gradient-text">Reviews</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — hear what our members have to say about their
            experience at JERAI FITNESS.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-4 glass-card px-6 py-4 mt-8">
            <div className="text-4xl font-extrabold gradient-text">
              <CountUp to={Number(avgRating)} duration={1.25} startWhen={true} />
            </div>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-700'}
                  />
                ))}
              </div>
                <p className="text-gray-500 text-sm">
                  Based on <CountUp to={testimonials.length} duration={1.25} className="inline-block" /> reviews
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="What Our Members Say"
            subtitle="Real stories from real people who transformed their lives"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review) => (
              <BorderGlow
                key={review.id}
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
                <TestimonialCard {...review} />
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="section-padding bg-gray-900/30 border-t border-gray-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-royal-500/10 flex items-center justify-center mx-auto mb-6">
            <FaPen className="text-royal-400 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Share Your Experience
          </h2>
          <p className="text-gray-500 mb-8">
            We'd love to hear about your fitness journey at JERAI FITNESS. Your feedback
            helps us improve and inspires others.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            <FaPen className="text-sm" />
            Write a Review
          </button>
        </div>
      </section>
    </section>
  );
};

export default Reviews;
