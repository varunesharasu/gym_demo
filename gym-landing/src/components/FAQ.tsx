import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqs = [
  { q: "Is there a free trial?", a: "Yes, 7 days free on any plan." },
  { q: "Can I freeze my membership?", a: "Absolutely — up to 60 days a year." },
  { q: "Do you offer personal training?", a: "Elite plan includes weekly 1-on-1 sessions." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section faq">
      <h2 className="h-display faq-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-q"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{f.q}</span>
              <ChevronDown className={`faq-chevron ${open === i ? "rotated" : ""}`} />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="faq-a-wrap"
                >
                  <p className="faq-a">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}