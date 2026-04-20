import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-card"
      >
        <h2 className="h-display contact-title">Ready to Transform?</h2>
        <p className="contact-desc">
          Drop your details — a coach will reach out within 24 hrs.
        </p>
        {sent ? (
          <p className="contact-success" role="status">
            ✓ Thanks! We'll be in touch.
          </p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="contact-form"
          >
            <input required aria-label="Name" placeholder="Your name" className="contact-input" />
            <input required type="email" aria-label="Email" placeholder="Email" className="contact-input" />
            <textarea
              aria-label="Message"
              placeholder="Goals / Questions"
              rows={3}
              className="contact-input contact-textarea"
            />
            <button className="contact-submit">Send Message</button>
          </form>
        )}
      </motion.div>
    </section>
  );
}