"use client";

import TrainerCard from "@/components/TrainerCard";
import { FaFireAlt, FaHeartbeat, FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";

const trainers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    image: "/trainers/trainer-1new.jpg",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    specialties: ["Güc məşqləri", "Bədən quruluşu"],
    slug: "elvin-memmedov",
    icon: FaFireAlt,
  },
  {
    id: 2,
    name: "Aysel Hüseynova",
    image: "/trainers/trainer-2-new.jpg",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    specialties: ["Cardio", "Yağ yandırma"],
    slug: "aysel-huseynova",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    name: "Murad Hüseynov",
    image: "/trainers/trainer-3-new.jpg",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
    slug: "murad-huseynov",
    icon: FaDumbbell,
  },
];

// Məşqçi kartları üçün animasiya variantı
const trainerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  },
};

export default function TrainersSection() {
  return (
    <section className="py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Başlıq Animasiyası */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Peşəkar <span className="text-emerald-500">Məşqçilərimiz</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Təcrübəli və peşəkar komandamız səni məqsədlərinə daha tez çatdıracaq.
          </p>
        </motion.div>

        {/* Məşqçi Kartları Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {trainers.map((t) => (
            <motion.div
              key={t.id}
              variants={trainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }} // Kartın 40-50%-i görünəndə çıxsın
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <TrainerCard {...t} showIcon={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}