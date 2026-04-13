import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';
import { trainers } from '../data/mockData';
import { FaCheckCircle, FaHeart, FaBolt, FaGlobe } from 'react-icons/fa';

const values = [
  { icon: FaHeart, title: 'Passion', description: 'We live and breathe fitness. Our passion fuels everything we do.' },
  { icon: FaBolt, title: 'Excellence', description: 'We never settle. Every detail is crafted for the best experience.' },
  { icon: FaGlobe, title: 'Community', description: 'We build connections. Fitness is better when shared together.' },
  { icon: FaCheckCircle, title: 'Integrity', description: 'We are transparent, honest, and committed to your success.' },
];

const milestones = [
  { year: '2014', title: 'Founded', desc: 'JERAI FITNESS opened its first location with a vision to redefine gym culture.' },
  { year: '2016', title: 'Expansion', desc: 'Grew to 3 locations, serving 2,000+ active members across the city.' },
  { year: '2019', title: '24/7 Access', desc: 'Introduced round-the-clock access and smart entry systems for members.' },
  { year: '2022', title: 'Award Winning', desc: 'Named "Best Fitness Center" by City Health & Wellness Awards.' },
  { year: '2024', title: '5000+ Members', desc: 'Reached 5,000 active members with a 95% satisfaction rate.' },
];

const About = () => {
  return (
    <section id="about">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/about.png)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-950/80" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
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
              <div className="glass-card overflow-hidden rounded-2xl">
                <img
                  src="/about.png"
                  alt="JERAI FITNESS community training together"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
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

      {/* Timeline */}
      <section className="section-padding bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Our Journey" subtitle="A decade of growth, grit, and greatness" />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-800" aria-hidden="true" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-royal-500 border-4 border-gray-950 z-10 mt-1.5" aria-hidden="true" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 hover:border-royal-500/30 transition-all duration-300">
                      <span className="text-royal-400 font-bold text-sm">{item.year}</span>
                      <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Meet Our Trainers" subtitle="Expert coaches dedicated to your success" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="glass-card p-6 text-center group hover:border-royal-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-500 to-royal-800 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                  {trainer.initials}
                </div>
                <h3 className="text-white font-semibold text-lg">{trainer.name}</h3>
                <p className="text-royal-400 text-sm font-medium mb-2">{trainer.role}</p>
                <p className="text-gray-500 text-sm">{trainer.speciality}</p>
                <div className="mt-3 text-gray-600 text-xs">{trainer.experience} experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-900/30 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                  <value.icon className="text-royal-400 text-2xl" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
