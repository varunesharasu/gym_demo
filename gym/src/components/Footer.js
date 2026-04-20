import React from 'react';
import { FaDumbbell, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Strength Training',
    'Cardio Programs',
    'Personal Training',
    'Group Classes',
    'Nutrition Guidance',
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaFacebookF, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
  ];

  const handleNavClick = (href) => {
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-primary-500/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2 mb-4 group"
              aria-label="FITPULSE"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-500/50 transition-all duration-300">
                <FaDumbbell className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">FIT</span>
                <span className="gradient-text">PULSE</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transform your body and elevate your mind with world-class equipment, expert trainers,
              and a thriving community. Your transformation starts today.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-accent-500/20 hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-gray-300 block font-medium">Phone:</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span className="text-gray-300 block font-medium">Email:</span>
                info@fitpulse.com
              </li>
              <li>
                <span className="text-gray-300 block font-medium">Hours:</span>
                Open 24/7, 365 Days
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} FITPULSE. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-accent-500 text-xs" /> for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
