import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "./Pricing.css";

const plans = [
  { name: "Basic", monthly: 29, annual: 290, perks: ["Gym access", "Locker room", "1 group class/wk"] },
  { name: "Pro", monthly: 59, annual: 590, perks: ["All Basic", "Unlimited classes", "Nutrition guide"], featured: true },
  { name: "Elite", monthly: 99, annual: 990, perks: ["All Pro", "1-on-1 coaching", "Recovery spa"] },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="section pricing">
      <div className="pricing-head">
        <p className="brand-eyebrow">PRICING</p>
        <h2 className="h-display pricing-title">Pick Your Plan</h2>
        <div className="pricing-toggle" role="tablist">
          <button
            role="tab"
            aria-selected={!annual}
            onClick={() => setAnnual(false)}
            className={`toggle-btn ${!annual ? "active" : ""}`}
          >
            Monthly
          </button>
          <button
            role="tab"
            aria-selected={annual}
            onClick={() => setAnnual(true)}
            className={`toggle-btn ${annual ? "active" : ""}`}
          >
            Annual <span className="toggle-badge">-17%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -8 }}
            className={`price-card ${p.featured ? "featured" : ""}`}
          >
            {p.featured && <span className="price-badge">MOST POPULAR</span>}
            <h3 className="h-display price-name">{p.name}</h3>
            <div className="price-amount">
              <span className="price-num">${annual ? p.annual : p.monthly}</span>
              <span className="price-per">/{annual ? "yr" : "mo"}</span>
            </div>
            <ul className="price-perks">
              {p.perks.map((perk) => (
                <li key={perk}>
                  <Check size={16} className="perk-icon" /> {perk}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`${p.featured ? "btn-primary" : "btn-outline"} price-cta`}
            >
              Choose {p.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}