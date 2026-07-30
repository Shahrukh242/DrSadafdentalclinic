"use client";

import { Phone, MapPin, Clock, Shield } from "lucide-react";

// Inline custom SVGs for social brand icons to ensure 100% build reliability
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-accent border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 text-left">
          
          {/* Clinic Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-base">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-tight text-text-dark">
                  Dr. Sadaf
                </span>
                <span className="font-sans text-[10px] tracking-wider text-primary font-bold uppercase">
                  Dental Care
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-text-light leading-relaxed max-w-sm">
              Providing modern, compassionate, and affordable dental services for families and individuals in North Karachi. Your comfort and healthy smile are our highest priorities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-text-light hover:text-primary hover:border-primary/30 flex items-center justify-center transition-all duration-300 shadow-premium-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-text-light hover:text-primary hover:border-primary/30 flex items-center justify-center transition-all duration-300 shadow-premium-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-text-dark border-l-2 border-primary pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-text-light">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleScroll(e, "#why-choose-us")} className="hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")} className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleScroll(e, "#faqs")} className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services Index Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-text-dark border-l-2 border-primary pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-text-light">
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  Root Canal Treatment
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-primary transition-colors">
                  Children's Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-text-dark border-l-2 border-primary pl-2.5">
              Contact Info
            </h4>
            <ul className="space-y-3 font-sans text-xs text-text-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Shop#10 Zulfiqar Ave, Sector 11-B, North Karachi, Karachi 75850, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+923171288862" className="hover:text-primary transition-colors">
                  +92 317 1288862
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Mon – Sat: 11:00 AM – 9:00 PM <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Sadaf Dental Care. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-1.5 text-[11px] text-text-muted">
            <Shield className="w-3.5 h-3.5 text-primary-light" />
            <span>Sterilization and Patient Safety Assured.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
