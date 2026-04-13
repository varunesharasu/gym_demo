import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Personal Training',
    'Group Classes',
    'Nutrition Planning',
    'Swimming Pool',
    'Yoga & Meditation',
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaFacebookF, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group" aria-label="JERAI FITNESS">
              <FaDumbbell className="text-royal-500 text-2xl group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-extrabold">
                <span className="text-white">JERAI</span>
                <span className="gradient-text ml-1">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Transform your body and mind with world-class equipment, expert trainers,
              and a motivating community. Your fitness journey starts here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-royal-500 hover:text-white transition-all duration-300"
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
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-royal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
                  <span className="text-gray-500 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <span className="text-gray-400 block">Phone:</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span className="text-gray-400 block">Email:</span>
                info@jeraifitness.com
              </li>
              <li>
                <span className="text-gray-400 block">Address:</span>
                123 Iron Avenue, Fitness District, NY 10001
              </li>
              <li>
                <span className="text-gray-400 block">Hours:</span>
                Open 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} JERAI FITNESS. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-royal-500 text-xs" /> for fitness lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
