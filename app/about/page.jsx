"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaHeartbeat,
  FaLeaf,
  FaChalkboardTeacher,
  FaDumbbell,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

// Animasiya variantları
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AboutPage() {
  // Viewport ayarı: animasiyaların 40% scroll zamanı açılması üçün
  const viewportSettings = { once: true, amount: 0.4 };

  return (
    <main className="bg-neutral-950 text-neutral-100 overflow-hidden">
      
      {/* HERO INTRO */}
      <section className="relative pt-40 pb-24 px-4">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter"
            >
              Sağlam bədən <br />
              <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                güclü xarakterdir
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl"
            >
              FitZone — Bakı şəhərində fəaliyyət göstərən modern fitness mərkəzi
              olaraq, sağlam həyat tərzini hər kəs üçün əlçatan edir. Bizimlə limitlərini aş.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
          >
            <Image
              src="/gallery/about-1.webp"
              alt="FitZone Gym Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-neutral-900/30 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "500+", label: "Aktiv Üzv" },
            { value: "10+", label: "Ekspert Məşqçi" },
            { value: "100+", label: "Modern Avadanlıq" },
            { value: "18+", label: "Gündəlik Saat" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-emerald-500 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Nə təklif edirik və necə fərqlənirik?
            </h2>
            <p className="mt-6 text-neutral-400 text-lg">
              Sadəcə idman zalı yox, nəticə verən sistemli yanaşma və motivasiya mühiti.
            </p>
          </motion.div>

          {/* Kartlar üçün Stagger animasiyası */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            <InfoCard icon={FaUserFriends} title="Fərdi Məşqlər" text="Sertifikatlı məşqçilərlə sizə özəl hədəf və qidalanma planları." />
            <InfoCard icon={FaHeartbeat} title="Cardio Zonası" text="Ən son texnologiyalı qaçış və velosiped aparatları ilə dözümlülük." />
            <InfoCard icon={FaLeaf} title="Premium Mühit" text="Yüksək səviyyəli təmizlik, havalandırma və komfortlu duş otaqları." />
            <InfoCard icon={FaChalkboardTeacher} title="Peşəkar Dəstək" text="Hər addımda hərəkətlərin düzgün icrasına nəzarət edən komanda." />
            <InfoCard icon={FaDumbbell} title="Güc Mərkəzi" text="Ağır çəkilər və funksional məşqlər üçün geniş sərbəst zona." />
            <InfoCard icon={FaChartLine} title="Nəticə Analizi" text="İnkişafınızı izləyən və sizi hədəfə aparan proqramlar." />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-4 border-t border-white/5 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={viewportSettings}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Niyə FitZone?</h2>
            <div className="space-y-6">
              {[
                "Təcrübəli və beynəlxalq sertifikatlı məşqçi heyəti",
                "Müasir texnologiyalı ən son model trenajorlar",
                "Hər kəsə özəl yanaşma və aylıq inkişaf dəyərləndirməsi",
                "Geniş və fərah məşq sahələri, 24/7 havalandırma"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-neutral-300 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={viewportSettings}
            className="relative aspect-square rounded-full border-[12px] border-emerald-500/10 overflow-hidden"
          >
            <Image
              src="/gallery/about-2.webp"
              alt="Fitness Training"
              fill
              className="object-cover scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div className="text-left">
              <h3 className="text-3xl font-bold text-white">Harada yerləşirik?</h3>
              <p className="mt-2 text-neutral-400 text-lg">Bakı, 65-123 Xaqani Küçəsi — Səni gözləyirik!</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-xl font-bold shadow-lg shadow-white/5"
            >
              Yol xəritəsi aç
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportSettings}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-[450px] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grayscale invert contrast-125 opacity-80 hover:grayscale-0 hover:invert-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?..." 
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div 
      variants={fadeInUp} // Parent-dəki staggerContainer ilə koordinasiyalı işləyir
      whileHover={{ y: -8 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      className="group bg-neutral-900/50 cursor-pointer backdrop-blur-md border border-white/5 rounded-3xl p-10 transition-all duration-300 hover:bg-emerald-500/5 hover:border-emerald-500/40"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-neutral-800 text-emerald-500 text-3xl group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-500">
        <Icon />
      </div>
      <h4 className="mt-8 text-2xl font-bold text-white tracking-tight">{title}</h4>
      <p className="mt-4 text-neutral-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}