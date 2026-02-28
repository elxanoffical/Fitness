"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] w-full bg-neutral-950 overflow-hidden flex items-center">
      
      {/* BACKGROUND IMAGE - Şəkli daha aydın görmək üçün opacity artırıldı */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/HeroTrainers.webp"
          alt="FitZone Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top "
        />
        
        {/* Overlay - Şəffaflıq artırıldı ki, şəkil rahat görünsün */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
      >
        <div className="max-w-2xl">
          
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Sağlam həyat
            <br />
            <span className="text-emerald-500 drop-shadow-md">
              buradan başlayır
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-neutral-200 text-base md:text-xl leading-relaxed max-w-lg"
          >
            Peşəkar məşqçilər və müasir avadanlıqlar ilə xəyalındakı bədənə qovuş.
          </motion.p>

          {/* BUTTONS - Mobile-da yanaşı durması üçün flex-row və gap tənzimləndi */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-row items-center gap-3 md:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-emerald-500 text-neutral-950 px-5 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg shadow-emerald-500/20"
              >
                Qoşul
                <FaArrowRight className="group-hover:translate-x-1 transition-transform hidden sm:block" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/services"
                className="bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 text-white px-5 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all"
              >
                Paketlər
              </Link>
            </motion.div>
          </motion.div>
          
          {/* STATS */}
          <motion.div 
            variants={item}
            className="mt-12 flex gap-6 md:gap-8 items-center border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">500+</p>
              <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-widest">Aktiv Üzv</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">15+</p>
              <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-widest">Ekspert Məşqçi</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}