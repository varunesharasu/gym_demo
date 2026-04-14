import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import { testimonials, faqItems } from '../data/mockData';
import { FaStar, FaPen, FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ item, isOpen, onToggle }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="border-b border-gray-800/40 last:border-0">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left group transition-all duration-200 hover:bg-gray-800/20 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:ring-inset rounded-xl"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className={`font-medium text-sm md:text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-royal-300' : 'text-gray-300 group-hover:text-white'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-royal-500/20 rotate-180' : 'bg-gray-800/50 group-hover:bg-gray-800'
        }`}>
          <FaChevronDown className={`text-xs transition-colors ${isOpen ? 'text-royal-400' : 'text-gray-500'}`} />
        </div>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="reviews">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-royal-950/30 to-gray-950" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Customer <span className="gradient-text">Reviews</span>
          </h1>
          <ScrollReveal
            containerClassName="max-w-2xl mx-auto"
            textClassName="text-gray-400 text-lg md:text-xl leading-relaxed"
            baseOpacity={0.14}
            baseRotation={2}
            blurStrength={3}
          >
            Don't just take our word for it — hear what our members have to say about their
            experience at JERAI FITNESS.
          </ScrollReveal>

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
              <TestimonialCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />

          <BorderGlow
            className="rounded-2xl"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#060010"
            borderRadius={22}
            glowRadius={26}
            glowIntensity={1}
            coneSpread={24}
            colors={['#7c3aed', '#ec4899', '#0ea5e9']}
            fillOpacity={0.38}
          >
            <div className="glass-card overflow-hidden divide-y divide-gray-800/30">
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openFAQ === item.id}
                  onToggle={() => toggleFAQ(item.id)}
                />
              ))}
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="section-padding">
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
