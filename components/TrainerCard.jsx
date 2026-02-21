"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFireAlt, FaHeartbeat, FaDumbbell, FaUserTie } from "react-icons/fa";

export default function TrainerCard({
  name,
  role,
  experience,
  specialties,
  slug,
  image,
  showIcon = false,
}) {
  // Ən etibarlı yol: Slug-a görə ikonu daxildə təyin etmək
  const iconMap = {
    "elvin-memmedov": FaFireAlt,
    "aysel-huseynova": FaHeartbeat,
    "murad-huseynov": FaDumbbell,
    "nigar-rzayeva": FaUserTie,
  };

  const Icon = iconMap[slug];

  return (
    <div className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full shadow-2xl">
      <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="w-full aspect-[4/4] bg-neutral-800 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-[400px] md:h-[350px] transition-transform duration-500 group-hover:scale-105"
          priority={slug === "elvin-memmedov"} // LCP optimizasiyası
        />
      </div>

      <div className="p-6 flex flex-col flex-1 text-center relative z-10">
        {showIcon && Icon ? (
          <div className="flex justify-center items-center gap-2 text-emerald-500 text-sm mb-1">
            <Icon className="animate-pulse" />
            {experience}
          </div>
        ) : (
          <div className="text-sm text-neutral-400 mb-1">{experience}</div>
        )}

        <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-emerald-500 transition-colors">
          {name}
        </h3>
        <p className="text-neutral-400 text-sm">{role}</p>

        <ul className="mt-3 text-neutral-400 text-sm space-y-1 flex-1">
          {specialties.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <motion.div whileTap={{ scale: 0.95 }} className="mt-6">
          <Link
            href={`/trainers/${slug}`}
            className="block w-full bg-neutral-800 group-hover:bg-emerald-500 text-white group-hover:text-neutral-950 font-bold py-3 rounded-xl transition-all duration-300 text-sm tracking-wide shadow-md"
          >
            Profilə bax
          </Link>
        </motion.div>
      </div>
    </div>
  );
}