import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import type { Testimonial } from "../services/portfolioService";

const AVATAR_GRADIENTS = [
  "from-indigo-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-blue-500 to-cyan-500",
];

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<Props> = ({ testimonials }) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const update = () => setCardsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const total = testimonials.length;
    const maxIndex = total - cardsPerView;
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials, cardsPerView]);

  const total = testimonials.length;
  const maxIndex = total - cardsPerView;

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Social Proof" title="What People Say" subtitle="Feedback from colleagues I've had the pleasure of working with" />

        <div>
          <div className="overflow-hidden -mx-3">
            <motion.div
              className="flex select-none cursor-grab active:cursor-grabbing"
              style={{ width: `${(total / cardsPerView) * 100}%` }}
              animate={{ x: `${-testimonialIndex * (100 / total)}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50 || info.velocity.x < -600) setTestimonialIndex((i) => Math.min(i + 1, maxIndex));
                else if (info.offset.x > 50 || info.velocity.x > 600) setTestimonialIndex((i) => Math.max(i - 1, 0));
              }}
            >
              {testimonials.map((t, index) => (
                <div key={index} style={{ width: `${100 / total}%` }} className="px-3">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-700/50 shadow-sm h-full flex flex-col">
                    <SafeIcon icon={FaQuoteLeft} size={28} className="text-indigo-200 dark:text-indigo-700 mb-4" />
                    <p className="text-gray-600 text-left dark:text-gray-300 text-sm sm:text-base leading-relaxed flex-1 mb-6">{t.content}</p>
                    <div>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <SafeIcon key={j} icon={FaStar} size={13} className="text-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-700">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {t.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} · {t.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setTestimonialIndex(i)} className={`rounded-full transition-all duration-300 ${i === testimonialIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
