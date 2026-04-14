import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import { trainers } from '../data/mockData';
import { FaCheckCircle, FaHeart, FaBolt, FaGlobe, FaChevronDown, FaLanguage, FaBullseye, FaInfoCircle } from 'react-icons/fa';

const values = [
  { icon: FaHeart, title: 'Passion', description: 'We live and breathe fitness. Our passion fuels everything we do.' },
  { icon: FaBolt, title: 'Excellence', description: 'We never settle. Every detail is crafted for the best experience.' },
  { icon: FaGlobe, title: 'Community', description: 'We build connections. Fitness is better when shared together.' },
  { icon: FaCheckCircle, title: 'Integrity', description: 'We are transparent, honest, and committed to your success.' },
];

const TrainerCard = ({ trainer }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (showDetails) setActiveTab(null);
  };

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    } else if (e.key === 'Escape') {
      setShowDetails(false);
      setActiveTab(null);
    }
  };

  const tabs = [
    {
      key: 'language',
      label: 'Languages',
      icon: FaLanguage,
      content: (
        <div className="flex flex-wrap gap-2">
          {trainer.languages?.map((lang) => (
            <span key={lang} className="px-3 py-1 bg-royal-500/10 border border-royal-500/20 rounded-full text-royal-300 text-xs font-medium">
              {lang}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'specialization',
      label: 'Specialization',
      icon: FaBullseye,
      content: <p className="text-gray-400 text-sm leading-relaxed">{trainer.specialization}</p>,
    },
    {
      key: 'overview',
      label: 'Overview',
      icon: FaInfoCircle,
      content: <p className="text-gray-400 text-sm leading-relaxed">{trainer.overview}</p>,
    },
  ];

  return (
    <BorderGlow
      className="h-full rounded-2xl"
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
      <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300 h-full flex flex-col">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-500 to-royal-800 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
          {trainer.initials}
        </div>
        <h3 className="text-white font-semibold text-lg">{trainer.name}</h3>
        <p className="text-royal-400 text-sm font-medium mb-2">{trainer.role}</p>
        <p className="text-gray-500 text-sm">{trainer.speciality}</p>
        <div className="mt-2 text-gray-600 text-xs mb-4">{trainer.experience} experience</div>

        {/* Know More Button */}
        <button
          className="mt-auto mx-auto px-5 py-2 rounded-xl text-sm font-semibold bg-royal-500/10 text-royal-400 hover:bg-royal-500/20 hover:text-royal-300 transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-royal-500/50 focus:ring-offset-2 focus:ring-offset-gray-950 min-h-[44px]"
          onClick={toggleDetails}
          onKeyDown={(e) => handleKeyDown(e, toggleDetails)}
          aria-expanded={showDetails}
          aria-controls={`trainer-details-${trainer.id}`}
        >
          {showDetails ? 'Show Less' : 'Know More'}
          <FaChevronDown className={`text-xs transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
        </button>

        {/* Expandable Details Panel */}
        <div
          id={`trainer-details-${trainer.id}`}
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            showDetails ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
          role="region"
          aria-label={`Details about ${trainer.name}`}
        >
          <div className="border-t border-gray-800/50 pt-4 space-y-2 text-left">
            {tabs.map((tab) => (
              <div key={tab.key} className="rounded-xl overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl min-h-[44px] ${
                    activeTab === tab.key
                      ? 'bg-royal-500/15 text-royal-300'
                      : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
                  }`}
                  onClick={() => toggleTab(tab.key)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleTab(tab.key))}
                  aria-expanded={activeTab === tab.key}
                  aria-controls={`trainer-${trainer.id}-${tab.key}`}
                >
                  <span className="flex items-center gap-2">
                    <tab.icon className="text-xs" />
                    {tab.label}
                  </span>
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${activeTab === tab.key ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={`trainer-${trainer.id}-${tab.key}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTab === tab.key ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="region"
                  aria-labelledby={`trainer-${trainer.id}-${tab.key}-btn`}
                >
                  <div className="px-4 py-3">
                    {tab.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
};

const About = () => {
  return (
    <section id="about">
      {/* Hero — Full Background Image */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url(/about.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        {/* Lighter overlay so image is more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/60 to-gray-950/90" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            More than a gym — we're a movement. Discover the mission, values, and
            people that make JERAI FITNESS the city's premier fitness destination.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Mission" subtitle="" center={false} />
              <ScrollReveal
                containerClassName="mb-6"
                textClassName="text-gray-400 leading-relaxed"
                baseOpacity={0.14}
                baseRotation={2}
                blurStrength={3}
              >
                At JERAI FITNESS, our mission is simple yet powerful: to empower every
                individual to become the strongest, healthiest version of themselves.
                We believe that fitness is not just about physical transformation — it's
                about building mental resilience, fostering community, and creating
                habits that last a lifetime.
              </ScrollReveal>
              <ScrollReveal
                containerClassName="mb-6"
                textClassName="text-gray-400 leading-relaxed"
                baseOpacity={0.14}
                baseRotation={2}
                blurStrength={3}
              >
                Founded in 2014, we've grown from a single gym floor to a
                comprehensive fitness ecosystem. Our approach combines cutting-edge
                equipment, evidence-based training methodologies, and genuine human
                connection.
              </ScrollReveal>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold gradient-text">
                    <CountUp to={10} duration={1.5} />+
                  </div>
                  <div className="text-gray-500 text-sm">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold gradient-text">
                    <CountUp to={5000} duration={1.8} separator="," />+
                  </div>
                  <div className="text-gray-500 text-sm">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold gradient-text">
                    <CountUp to={95} duration={1.4} />%
                  </div>
                  <div className="text-gray-500 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <BorderGlow
                className="rounded-3xl"
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={24}
                glowRadius={32}
                glowIntensity={1}
                coneSpread={24}
                colors={['#7c3aed', '#ec4899', '#0ea5e9']}
                fillOpacity={0.38}
              >
                <div className="glass-card overflow-hidden rounded-2xl">
                <img
                  src="/about.png"
                  alt="JERAI FITNESS community training together"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                </div>
              </BorderGlow>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-royal-500 to-royal-800 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">
                    <CountUp to={10} duration={1.5} />+
                  </div>
                  <div className="text-royal-200 text-xs">Years Strong</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers — with Know More */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Meet Our Trainers" subtitle="Expert coaches dedicated to your success" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <BorderGlow
                key={index}
                className="h-full rounded-2xl"
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
                <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                    <value.icon className="text-royal-400 text-2xl" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
