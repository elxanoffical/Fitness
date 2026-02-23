"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaUsers,
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
  FaFireAlt,
  FaSpa,
  FaCheck
} from "react-icons/fa";

const services = [
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
      "Hədəfə fokuslanmış proqram"
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
      "Yoga, Pilates və HIIT seçimləri",
    ],
  },
  {
    id: 4,
    title: "Cardio Zonası",
    price: "Üzvlük daxilində",
    slug: "cardio-zona",
    icon: FaRunning,
    features: [
      "Müasir qaçış və velosiped aparatları",
      "Yağ yandırma və dözümlülük artımı",
    ],
  },
  {
    id: 5,
    title: "Güc (Strength) Zonası",
    price: "Üzvlük daxilində",
    slug: "guc-zonasi",
    icon: FaFireAlt,
    features: [
      "Əzələ inkişafı üçün ağırlıq avadanlıqları",
      "Compound hərəkətlər üçün sərbəst zonalar",
    ],
  },
  {
    id: 6,
    title: "Funksional Məşqlər",
    price: "Üzvlük daxilində",
    slug: "funksional",
    icon: FaHeartbeat,
    features: [
      "Balans və koordinasiya inkişafı",
      "TRX və kettlebell avadanlıqları",
    ],
  },
  {
    id: 7,
    title: "Stretching & Recovery",
    price: "Üzvlük daxilində",
    slug: "stretching",
    icon: FaSpa,
    features: [
      "Bərpa və rahatlama texnikaları",
      "Zədələrin qarşısını alma məşqləri",
    ],
  },
  {
    id: 8,
    title: "Qidalanma Konsultasiyası",
    price: "50 AZN / konsultasiya",
    slug: "qida-konsultasiya",
    icon: FaAppleAlt,
    features: [
      "Fərdi qida planlaması",
      "Nəticə izləmə və analiz",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-32">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        {/* Dekorativ arxa fon işığı */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Peşəkar <span className="text-emerald-500">Xidmətlərimiz</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Hər kəs üçün fərqli hədəflər, hər hədəf üçün isə professional yanaşma. 
            Sənin üçün ən uyğun olanı seç.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Üst kartlar tez görünsün deyə 0.1
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

function ServiceCard({ title, price, slug, icon: Icon, features }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      
      className="group bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-neutral-900/80 transition-all duration-500"
    >
      <div>
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 text-3xl group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-500">
          <Icon />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white tracking-tight">{title}</h3>

        <ul className="mt-6 space-y-3">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
              <FaCheck className="text-emerald-500 mt-1 flex-shrink-0 text-xs" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-emerald-500 font-bold text-xl">{price}</span>
        </div>
        
        <Link
          href={`/services/${slug}`}
          className="block w-full text-center bg-white hover:bg-emerald-500 text-neutral-950 hover:text-white font-bold py-4 rounded-2xl transition-all duration-300 transform active:scale-95"
        >
          Daha ətraflı
        </Link>
      </div>
    </motion.div>
  );
}