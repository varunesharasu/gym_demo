import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaDumbbell, FaChevronDown, FaCalculator } from 'react-icons/fa';
import { fitnessCalculators } from '../data/mockData';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#preferences', label: 'Preferences' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);
  const resourcesTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close resources dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResourcesEnter = () => {
    clearTimeout(resourcesTimeout.current);
    setResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimeout.current = setTimeout(() => setResourcesOpen(false), 200);
  };

  const handleResourcesKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setResourcesOpen(!resourcesOpen);
    } else if (e.key === 'Escape') {
      setResourcesOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-gray-800/50'
          : 'bg-gray-950/0 border-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
          aria-label="JERAI FITNESS home"
        >
          <FaDumbbell className="text-royal-500 text-2xl group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-white">JERAI</span>
            <span className="gradient-text ml-1">FITNESS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-royal-400 bg-royal-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Resources Dropdown */}
          <li
            className="relative"
            ref={resourcesRef}
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 ${
                resourcesOpen
                  ? 'text-royal-400 bg-royal-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onKeyDown={handleResourcesKeyDown}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              id="resources-menu-button"
            >
              Resources
              <FaChevronDown className={`text-xs transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full right-0 mt-2 w-64 transition-all duration-200 origin-top-right ${
                resourcesOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
              role="menu"
              aria-labelledby="resources-menu-button"
            >
              <div className="bg-gray-900/98 backdrop-blur-xl border border-gray-800/60 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden p-2">
                <div className="px-3 py-2 border-b border-gray-800/50 mb-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fitness Calculators</p>
                </div>
                {fitnessCalculators.map((calc) => (
                  <a
                    key={calc.name}
                    href={calc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-royal-500/10 transition-all duration-150 group"
                    role="menuitem"
                    tabIndex={resourcesOpen ? 0 : -1}
                  >
                    <div className="w-8 h-8 rounded-lg bg-royal-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-500/20 transition-colors">
                      <FaCalculator className="text-royal-400 text-xs" />
                    </div>
                    <span>{calc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-950/98 backdrop-blur-md border-t border-gray-800/50 px-4 py-4 space-y-1 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 min-h-[44px] flex items-center ${
                activeSection === link.href
                  ? 'text-royal-400 bg-royal-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Resources Accordion */}
          <div className="border-t border-gray-800/30 pt-2 mt-2">
            <button
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 min-h-[44px]"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              aria-expanded={mobileResourcesOpen}
            >
              <span>Resources</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-1 pb-2">
                <p className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Fitness Calculators</p>
                {fitnessCalculators.map((calc) => (
                  <a
                    key={calc.name}
                    href={calc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-royal-500/10 transition-all duration-150"
                  >
                    <FaCalculator className="text-royal-400 text-xs" />
                    <span>{calc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
