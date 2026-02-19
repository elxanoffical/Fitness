"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrainerCard({
  name,
  role,
  experience,
  specialties,
  slug,
  image,
  icon: Icon,        
  showIcon = false,
}) {
  return (
    <div className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full shadow-2xl">
      
      {/* Services-dəki kimi Hover Glow Effekti */}
      <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* IMAGE - Orijinal ölçülər saxlanıldı */}
      <div className="w-full aspect-[4/4] bg-neutral-800 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-[400px] md:h-[350px] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1 text-center relative z-10">
        
        {/* Təcrübə + İkon Yanıb-Sönmə Animasiyası */}
        {showIcon && Icon ? (
          <div className="flex justify-center items-center gap-2 text-emerald-500 text-sm mb-1">
            <Icon className="animate-pulse" /> 
            {experience}
          </div>
        ) : (
          <div className="text-sm text-neutral-400 mb-1">{experience}</div>
        )}

        {/* Ad və rol */}
        <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-emerald-500 transition-colors">
          {name}
        </h3>
        <p className="text-neutral-400 text-sm">{role}</p>

        {/* İxtisaslar */}
        <ul className="mt-3 text-neutral-400 text-sm space-y-1 flex-1">
          {specialties.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        {/* Keçid düyməsi - Services stili: bg-neutral-800 -> emerald-500 */}
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