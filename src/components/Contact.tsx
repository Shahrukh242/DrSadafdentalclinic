"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
            Contact & Bookings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            Schedule Your Visit Today
          </h2>
          <p className="font-sans text-base text-text-light">
            Fill out the form below to request an appointment, or contact our clinic directly via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Clinic Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-text-dark">
                Dr. Sadaf Dental Care
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-primary border border-slate-100 mt-0.5 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-text-muted uppercase tracking-wider">Address</h4>
                    <p className="font-sans text-xs sm:text-sm text-text-light leading-relaxed mt-0.5">
                      Shop#10 Zulfiqar Ave, Sector 11-B, <br />
                      North Karachi, Karachi 75850, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-primary border border-slate-100 mt-0.5 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-text-muted uppercase tracking-wider">Phone</h4>
                    <p className="font-sans text-xs sm:text-sm text-text-light leading-relaxed mt-0.5">
                      <a href="tel:+923171288862" className="hover:text-primary transition-colors">
                        +92 317 1288862
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start space-x-3.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-primary border border-slate-100 mt-0.5 shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-text-muted uppercase tracking-wider">Clinic Hours</h4>
                    <p className="font-sans text-xs sm:text-sm text-text-light leading-relaxed mt-0.5">
                      Monday – Saturday: 11:00 AM – 9:00 PM <br />
                      Sunday: Closed (Emergency Cases Only)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (Styled representation) */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-100 shadow-premium-md bg-slate-50 group">
              {/* 
                ========================================================================
                DEVELOPER TIP:
                To embed a live Google Map:
                1. Go to Google Maps, search for "Dr. Sadaf Dental Care Zulfiqar Ave Karachi"
                2. Click "Share" -> "Embed a map" -> Copy HTML
                3. Replace this placeholder div with the iframe below:
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                ========================================================================
              */}
              
              {/* Premium Vector Placeholder Graphics */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-teal-50/40 via-white to-slate-50">
                {/* SVG representation of a grid map */}
                <svg className="absolute inset-0 w-full h-full text-slate-100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M-10,80 Q200,60 500,200" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                  <path d="M100,-10 Q160,200 120,500" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                  <circle cx="150" cy="140" r="10" fill="#E2E8F0" />
                </svg>
                
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3 shadow-premium-sm"
                >
                  <MapPin className="w-5 h-5 fill-primary/30" />
                </motion.div>
                <h4 className="relative z-10 font-heading font-extrabold text-xs text-text-dark tracking-wide uppercase">
                  Dr. Sadaf Dental Care Map
                </h4>
                <p className="relative z-10 font-sans text-[10px] text-text-light max-w-xs mt-1">
                  Shop#10 Zulfiqar Ave, Sector 11-B, North Karachi.
                </p>
                <a
                  href="https://maps.google.com/?q=Dr.+Sadaf+Dental+Care+North+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-4 bg-white hover:bg-slate-50 text-primary border border-slate-200 font-sans text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 shadow-premium-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Request Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-accent p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-premium-lg relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2 text-left">
                      <h3 className="font-heading font-extrabold text-xl text-text-dark">
                        Request Appointment
                      </h3>
                      <p className="font-sans text-xs text-text-light">
                        Leave your contact details and we will call/message you to confirm your slot.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="name" className="font-heading font-bold text-xs text-text-dark uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Ayesha Khan"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-light transition-all shadow-premium-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="phone" className="font-heading font-bold text-xs text-text-dark uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="0317 1288862"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-light transition-all shadow-premium-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="email" className="font-heading font-bold text-xs text-text-dark uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ayesha@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-light transition-all shadow-premium-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="message" className="font-heading font-bold text-xs text-text-dark uppercase tracking-wider">
                        Message / Treatment Area
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Please describe your dental concern (e.g., teeth cleaning, wisdom tooth pain, dental crown request)."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-light transition-all shadow-premium-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-sans text-xs sm:text-sm font-semibold py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-premium-md hover:shadow-premium-xl disabled:opacity-75 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Request Appointment"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-premium-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-xl text-text-dark">
                        Request Received!
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-text-light max-w-sm">
                        Thank you for reaching out. A representative from Dr. Sadaf Dental Care will call or message you shortly to confirm your appointment details.
                      </p>
                    </div>

                    <p className="font-sans text-[11px] text-text-muted">
                      Need urgent help? Call us at <a href="tel:+923171288862" className="text-primary font-semibold hover:underline">+92 317 1288862</a>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
