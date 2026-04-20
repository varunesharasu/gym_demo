import { Dumbbell, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <Dumbbell className="logo-icon" /> IRONFORGE
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} IronForge Gym. All rights reserved.
        </p>
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
        </div>
      </div>
    </footer>
  );
}