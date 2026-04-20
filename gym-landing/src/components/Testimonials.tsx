import { motion } from "framer-motion";
import "./Testimonials.css";

const items = [
  { name: "Alex R.", text: "Lost 20 lbs in 3 months. Best trainers, hands down.", role: "Member since 2023" },
  { name: "Sara K.", text: "The energy here is unmatched. I actually look forward to workouts.", role: "Pro Plan" },
  { name: "Mike T.", text: "Elite coaching changed how I lift. PRs every week.", role: "Elite Plan" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="t-head">
        <p className="brand-eyebrow">TESTIMONIALS</p>
        <h2 className="h-display t-title">Real Results. Real People.</h2>
      </div>
      <div className="t-grid">
        {items.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="t-card"
          >
            <p className="t-text">"{t.text}"</p>
            <footer className="t-footer">
              <div className="t-name">{t.name}</div>
              <div className="t-role">{t.role}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}