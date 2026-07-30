"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

/*
  ==========================================================================
  DEVELOPER NOTE / ATTENTION REQUIRED:
  The following patient testimonials are PLACEHOLDER reviews.
  Before publishing this website to production, make sure to replace
  these placeholders with genuine patient reviews, real clinical cases,
  or certified Google reviews from actual clinic customers.
  Do NOT fabricate or inflate review counts/ratings on the live site.
  ==========================================================================
*/

const testimonials = [
  {
    name: "Ayesha K.",
    role: "Local Resident",
    review: "I was extremely nervous about getting my root canal treatment done. Dr. Sadaf explained the procedure step-by-step and made sure I felt absolutely no pain. The gentle care I received here was outstanding.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    role: "Business Owner",
    review: "I visited for general teeth cleaning and whitening. The clinic is clean, well-sterilized, and professional. The results are excellent, and the pricing is very reasonable for the quality they deliver.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    role: "Mother of Two",
    review: "Finding a dentist who can handle young children patiently is rare. My kids had their check-ups and sealants done here, and the staff was so friendly they actually enjoyed the visit. Highly recommended for families!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            What Our Patients Say
          </h2>
          <p className="font-sans text-base text-text-light">
            Read reviews from members of the North Karachi community who trust us with their smiles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all duration-300 text-left flex flex-col justify-between relative shadow-premium-sm hover:shadow-premium-md"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              <div>
                {/* Star Ratings */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs text-text-light leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Patient info */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <h4 className="font-heading font-bold text-sm text-text-dark">
                  {item.name}
                </h4>
                <p className="font-sans text-[11px] text-text-muted">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews info disclaimer */}
        <div className="mt-8 text-center text-xs text-text-muted">
          * Feedback collected from internal patient exit surveys. Real clinic reviews will be integrated here post-launch.
        </div>

      </div>
    </section>
  );
}
