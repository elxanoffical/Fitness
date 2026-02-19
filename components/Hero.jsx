"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // professional cubic-bezier
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] w-full bg-neutral-950 overflow-hidden flex">
      
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/HeroTrainers.webp"
          alt="Fitness Image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col justify-center"
      >
        
        <div className="max-w-xl">

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight"
          >
            Sağlam həyat
            <br />
            <span className="text-emerald-500">
              buradan başlayır
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 md:mt-6 text-neutral-200 text-base md:text-lg"
          >
            Peşəkar məşqçilər, müasir avadanlıqlar və balanslı məşq proqramları
            ilə daha güclü və sağlam ol.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 md:mt-10 flex gap-4 flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded transition"
              >
                Qoşul
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/services"
                className="border border-white/30 hover:border-emerald-500 text-white px-6 py-3 rounded transition"
              >
                Paketlər
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
