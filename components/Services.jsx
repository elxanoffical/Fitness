"use client";

import Link from "next/link";
import { FaDumbbell, FaHeartbeat, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const featuredServices = [
  {
    id: 1,
    title: "Fitness Zalı Üzvlüyü",
    price: "100–900 AZN",
    slug: "fitness-zali-uzvluyu",
    icon: FaDumbbell,
    features: [
      "Cardio və güc zonalarına tam giriş",
      "Locker və duş otaqları",
      "Təmiz və təhlükəsiz məşq mühiti",
    ],
  },
  {
    id: 2,
    title: "Fərdi Məşq Proqramları",
    price: "200–1200 AZN",
    slug: "ferdi-meshq",
    icon: FaHeartbeat,
    features: [
      "Bədən quruluşuna uyğun fərdi məşq",
      "Peşəkar məşqçi dəstəyi",
    ],
  },
  {
    id: 3,
    title: "Qrup Məşqləri",
    price: "50–350 AZN",
    slug: "qrup-meshq",
    icon: FaUsers,
    features: [
      "Motivasiyalı və enerjili qrup dərsləri",
      "Üzvlük daxilində cardio & strength sahələri",
    ],
  },
];

// Kart animasiyası
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  },
};

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Başlıq Animasiyası */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Xidmətlər və <span className="text-emerald-500">Paketlər</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-neutral-400 text-lg">
            Öz məqsədinə uyğun paketi seç və sağlam həyatına bu gün başla.
          </p>
        </motion.div>

        {/* Kartlar Konteyneri */}
        <div className="grid gap-8 md:grid-cols-3">
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 flex flex-col justify-between transition-colors hover:border-emerald-500/50 hover:bg-neutral-900 shadow-2xl"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 text-3xl mb-6"
                >
                  <service.icon />
                </motion.div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xl font-bold text-emerald-500">
                  {service.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8">
                <Link href={`/services/${service.slug}`} className="block">
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    className="w-full text-center bg-neutral-800 hover:bg-emerald-500 text-white hover:text-neutral-950 font-bold py-4 rounded-xl transition-all duration-300"
                  >
                    Daha ətraflı
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}