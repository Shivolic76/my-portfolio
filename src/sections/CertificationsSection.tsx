import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tag } from "antd";
import { FaCode, FaTrophy } from "react-icons/fa";
import { SiHtml5, SiReact } from "react-icons/si";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import type { Certification } from "../services/portfolioService";

const CERT_ICONS: Record<string, React.ReactNode> = {
  Html5Outlined:       <SafeIcon icon={SiHtml5} size={30} />,
  CodeOutlined:        <SafeIcon icon={FaCode} size={30} />,
  ThunderboltOutlined: <SafeIcon icon={SiReact} size={30} />,
  AppstoreAddOutlined: <SafeIcon icon={FaCode} size={30} />,
  TrophyOutlined:      <SafeIcon icon={FaTrophy} size={30} />,
};

interface Props {
  certifications: Certification[];
}

const CertificationsSection: React.FC<Props> = ({ certifications }) => {
  const [certIndex, setCertIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [certCardsPerView, setCertCardsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
      setCertCardsPerView(w < 550 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => { setCertIndex(0); }, [certCardsPerView]);

  const total = certifications.length;
  const isMobile = cardsPerView === 1;
  const maxIndex = Math.max(0, total - certCardsPerView);

  const certCard = (cert: Certification) => {
    const inner = (
      <div className={`bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-slate-700/50 text-center transition-all duration-300 hover:-translate-y-0.5 h-full ${cert.url ? "hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-700/50 cursor-pointer" : "hover:shadow-md"}`}>
        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: cert.color }}>
          {CERT_ICONS[cert.icon] || <SafeIcon icon={FaCode} size={22} />}
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 leading-snug">{cert.title}</h4>
        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{cert.issuer}</p>
        <Tag color="green" className="text-xs">{cert.date}</Tag>
      </div>
    );
    return cert.url ? (
      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block no-underline h-full">{inner}</a>
    ) : inner;
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Credentials" title="Certifications" subtitle="Continuous learning — formal courses and certifications" />

        {isMobile ? (
          <div>
            <div className="overflow-hidden -mx-3">
              <motion.div
                className="flex select-none cursor-grab active:cursor-grabbing"
                style={{ width: `${(total / certCardsPerView) * 100}%` }}
                animate={{ x: `${-certIndex * (100 / total)}%` }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50 || info.velocity.x < -600) setCertIndex((i) => Math.min(i + 1, maxIndex));
                  else if (info.offset.x > 50 || info.velocity.x > 600) setCertIndex((i) => Math.max(i - 1, 0));
                }}
              >
                {certifications.map((cert, index) => (
                  <div key={index} style={{ width: `${100 / total}%` }} className="px-3">{certCard(cert)}</div>
                ))}
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCertIndex(i)} className={`rounded-full transition-all duration-300 ${i === certIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {certifications.map((cert, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                {certCard(cert)}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
