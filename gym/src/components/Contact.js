import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { contactInfo } from '../data/mockData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);

      // Clear message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            <span className="text-white">Start Your </span>
            <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of members already achieving their fitness goals. Let's get you started today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: FaPhone,
              label: 'Phone',
              values: contactInfo.phone
            },
            {
              icon: FaEnvelope,
              label: 'Email',
              values: contactInfo.email
            },
            {
              icon: FaMapMarkerAlt,
              label: 'Location',
              values: [contactInfo.address]
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="fade-in-section glass-card-glow border border-primary-500/30 rounded-xl p-8 text-center hover:border-accent-500/50 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-2xl text-primary-400" />
              </div>
              <h3 className="font-bold text-white mb-3">{item.label}</h3>
              <div className="space-y-2">
                {item.values.map((value, vidx) => (
                  <p key={vidx} className="text-gray-300 text-sm">{value}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto fade-in-section">
          <div className="glass-card-glow border border-primary-500/30 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-primary-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-primary-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-primary-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-primary-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-primary-500/20 border border-primary-500/50 rounded-lg">
                  <p className="text-primary-300 font-semibold text-center">
                    ✓ Message sent successfully! We'll be in touch soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-accent-500/20 border border-accent-500/50 rounded-lg">
                  <p className="text-accent-300 font-semibold text-center">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Text */}
        <div className="text-center mt-12 fade-in-section">
          <p className="text-gray-400 mb-4">
            Or reach out directly through phone or email. Our team is available 24/7!
          </p>
        </div>
      </div>
    </section>
  );
}
