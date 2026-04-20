import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import DumbbellModel from "./DumbbellModel";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000')",
        }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <p className="brand-eyebrow">#FORGE YOUR BODY</p>
          <h1 className="hero-title h-display">
            Unleash <span className="text-brand">Strength</span>
            <br />
            Inside You
          </h1>
          <p className="hero-desc">
            State-of-the-art equipment, elite trainers, and programs engineered
            to transform you — starting today.
          </p>
          <div className="hero-ctas">
            <a href="#pricing" className="btn-primary">
              Start Free Trial <ArrowRight size={18} />
            </a>
            <a href="#programs" className="btn-outline">
              <Play size={16} /> Explore Programs
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">15K+</div>
              <div className="stat-label">Members</div>
            </div>
            <div>
              <div className="stat-num">50+</div>
              <div className="stat-label">Trainers</div>
            </div>
            <div>
              <div className="stat-num">24/7</div>
              <div className="stat-label">Access</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-3d"
        >
          <DumbbellModel />
        </motion.div>
      </div>
    </section>
  );
}