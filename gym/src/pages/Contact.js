import React, { useState } from 'react';
import { contactInfo } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPaperPlane
} from 'react-icons/fa';

const socialIcons = {
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-950 via-gray-950 to-gray-950" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <ScrollReveal
            containerClassName="max-w-2xl mx-auto"
            textClassName="text-gray-400 text-lg md:text-xl leading-relaxed"
            baseOpacity={0.14}
            baseRotation={2}
            blurStrength={3}
          >
            Have questions? Want to book a tour? We'd love to hear from you.
            Reach out through any of the channels below.
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                <FaPhone className="text-royal-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              {contactInfo.phone.map((num, i) => (
                <a
                  key={i}
                  href={`tel:${num.replace(/\D/g, '')}`}
                  className="block text-gray-400 text-sm hover:text-royal-400 transition-colors"
                >
                  {num}
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                <FaEnvelope className="text-royal-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              {contactInfo.email.map((email, i) => (
                <a
                  key={i}
                  href={`mailto:${email}`}
                  className="block text-gray-400 text-sm hover:text-royal-400 transition-colors"
                >
                  {email}
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                <FaMapMarkerAlt className="text-royal-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">{contactInfo.address}</p>
            </div>

            {/* Hours */}
            <div className="glass-card p-6 text-center group hover:border-royal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-royal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-500/20 transition-colors">
                <FaClock className="text-royal-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Hours</h3>
              <p className="text-gray-400 text-sm">{contactInfo.hours.weekdays}</p>
              <p className="text-gray-500 text-xs mt-1">365 days a year</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-16">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-3">
              {contactInfo.social.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-royal-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form + Map Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
              {submitted && (
                <div className="mb-6 p-4 bg-royal-500/10 border border-royal-500/30 rounded-xl text-royal-400 text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-gray-400 text-sm mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-royal-500/50 focus:ring-1 focus:ring-royal-500/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-gray-400 text-sm mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-royal-500/50 focus:ring-1 focus:ring-royal-500/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-gray-400 text-sm mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-royal-500/50 focus:ring-1 focus:ring-royal-500/30 transition-all resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-800/30 flex items-center justify-center min-h-[300px] relative">
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg, transparent, transparent 40px, rgba(37,99,235,0.1) 40px, rgba(37,99,235,0.1) 41px
                    ), repeating-linear-gradient(
                      90deg, transparent, transparent 40px, rgba(37,99,235,0.1) 40px, rgba(37,99,235,0.1) 41px
                    )`
                  }} />
                </div>
                <div className="text-center z-10">
                  <FaMapMarkerAlt className="text-royal-500 text-5xl mx-auto mb-4 animate-bounce" />
                  <h4 className="text-white font-semibold mb-1">JERAI FITNESS</h4>
                  <p className="text-gray-500 text-sm max-w-xs">
                    123 Iron Avenue, Fitness District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gray-900/50 border-t border-gray-800/50">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-400 text-sm hover:text-royal-300 transition-colors font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
