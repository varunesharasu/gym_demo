import { motion } from "framer-motion";
import { Flame, Heart, Dumbbell, Users } from "lucide-react";
import "./Programs.css";

const programs = [
  { icon: Flame, title: "HIIT Burn", desc: "High-intensity circuits to torch calories fast." },
  { icon: Dumbbell, title: "Strength", desc: "Progressive overload training for raw power." },
  { icon: Heart, title: "Cardio Zone", desc: "Boost stamina with guided endurance sessions." },
  { icon: Users, title: "Group Classes", desc: "Train together, grow together. Community first." },
];

export default function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="programs-head">
        <p className="brand-eyebrow">OUR PROGRAMS</p>
        <h2 className="h-display programs-title">Train Smart. Train Hard.</h2>
      </div>
      <div className="programs-grid">
        {programs.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="program-card"
          >
            <p.icon className="program-icon" size={36} />
            <h3 className="program-name">{p.title}</h3>
            <p className="program-desc">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}