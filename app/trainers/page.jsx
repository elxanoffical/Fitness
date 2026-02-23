"use client";

import { motion } from "framer-motion";
import TrainerCard from "@/components/TrainerCard";

const trainers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    image: "/trainers/trainer-1new.jpg",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    specialties: ["Güc məşqləri", "Bədən quruluşu"],
    slug: "elvin-memmedov",
  },
  {
    id: 2,
    name: "Aysel Hüseynova",
    image: "/trainers/trainer-2-new.jpg",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    specialties: ["Cardio", "Yağ yandırma"],
    slug: "aysel-huseynova",
  },
  {
    id: 3,
    name: "Murad Hüseynov",
    image: "/trainers/trainer-3-new.jpg",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
    slug: "murad-huseynov",
  },
  {
    id: 4,
    name: "Nigar Rzayeva",
    image: "/trainers/trainer-4.jpg",
    role: "Qrup məşqləri üzrə mütəxəssis",
    experience: "4 il təcrübə",
    specialties: ["Qrup fitness", "Stretching"],
    slug: "nigar-rzayeva",
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function TrainersPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-32">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Peşəkar <span className="text-emerald-500">Heyətimiz</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Sənin hədəfin bizim missiyamızdır. Bakının ən təcrübəli mütəxəssisləri ilə 
            limitləri bərabər aşaq.
          </motion.p>
        </motion.div>
      </section>

      {/* TRAINERS GRID */}
      <section className="px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {trainers.map((t) => (
            <motion.div key={t.id}
                        variants={trainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }} // Kartın 40-50%-i görünəndə çıxsın
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}>
              <TrainerCard {...t} showIcon={true} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}