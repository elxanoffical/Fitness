"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaCertificate,
  FaClock,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

const trainersData = {
  "elvin-memmedov": {
    name: "Elvin Məmmədov",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    image: "/trainers/trainer-1new.jpg",
    shortBio: "Güc məşqləri və bədən quruluşu üzrə ixtisaslaşmış peşəkar məşqçi.",
    bio: "Elvin Məmmədov uzun illərdir fitness sahəsində fəaliyyət göstərir. Onun əsas məqsədi üzvlərə yalnız fiziki güc deyil, intizamlı həyat tərzi qazandırmaqdır.",
    specialties: ["Güc və kütlə artırma proqramları", "Fərdi məşq planları", "Bədən kompozisiyasının yaxşılaşdırılması", "Zədəsiz və təhlükəsiz məşq"],
    certifications: ["IFBB Certified Trainer", "Strength & Conditioning Specialist"],
    services: ["Fitness Zalı Üzvlüyü", "Fərdi Məşq Proqramları", "Güc (Strength) Zonası"],
  },
  "aysel-huseynova": {
    name: "Aysel Hüseynova",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    image: "/trainers/trainer-2-new.jpg",
    shortBio: "Cardio və yağ yandırma proqramları üzrə ixtisaslaşmış fitness məşqçisi.",
    bio: "Aysel xanım qadınlar üçün effektiv və balanslı fitness proqramları hazırlayır. Onun məşqləri həm sağlamlıq, həm də forma üçün idealdır.",
    specialties: ["Cardio proqramları", "Yağ yandırma", "Qrup məşqləri", "Stretching & Recovery"],
    certifications: ["Group Fitness Instructor", "Cardio Training Certificate"],
    services: ["Fitness Zalı Üzvlüyü", "Qrup Məşqləri", "Stretching & Recovery"],
  },
  "murad-huseynov": {
    name: "Murad Hüseynov",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    image: "/trainers/trainer-3-new.jpg",
    shortBio: "Fərdi proqramlar və funksional məşqlər üzrə ixtisaslaşmış məşqçi.",
    bio: "Murad Hüseynov fərdi yanaşmaya üstünlük verir və üzvlərinin məqsədlərinə çatmaları üçün motivasiyalı proqramlar hazırlayır.",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər", "Bədən balansı və çeviklik", "Zədələrin qarşısının alınması"],
    certifications: ["Personal Training Certificate", "Functional Fitness Trainer"],
    services: ["Fərdi Məşq Proqramları", "Funksional Məşqlər", "Stretching & Recovery"],
  },
  "nigar-rzayeva": {
    name: "Nigar Rzayeva",
    role: "Qrup məşqləri üzrə mütəxəssis",
    experience: "4 il təcrübə",
    image: "/trainers/trainer-4.jpg",
    shortBio: "Qrup məşqləri və stretching sahəsində ixtisaslaşmış mütəxəssis.",
    bio: "Nigar xanım müxtəlif yaş və səviyyələrə uyğun qrup dərsləri ilə tanınır. O, xüsusilə bərpa və çeviklik üzrə proqramlarla fərqlənir.",
    specialties: ["Qrup məşqləri", "Stretching", "Rahatlama texnikaları", "Qadın fitness proqramları"],
    certifications: ["Group Fitness Specialist", "Stretching Instructor Certificate"],
    services: ["Qrup Məşqləri", "Stretching & Recovery"],
  },
};

export default function TrainerDetailPage({ params }) {
  const unwrappedParams = React.use(params);
  const trainer = trainersData[unwrappedParams.slug];

  if (!trainer) {
    return (
      <main className="min-h-screen pt-40 text-center bg-neutral-950 text-neutral-400">
        Məşqçi tapılmadı
      </main>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen pb-24 relative">
      {/* BACKGROUND DECORATION */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 pt-32 px-4 max-w-7xl mx-auto">
        <Link href="/trainers" className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-500 transition-colors mb-12 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Məşqçilərə qayıt
        </Link>

        {/* Vacib qeyd: Grid konteynerinə 'items-start' əlavə etdik ki, 
            sol tərəf bütün hündürlüyü tutmağa çalışmasın və sticky işləsin.
        */}
        <div className="grid lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT: IMAGE STICKY */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Header */}
            <motion.div variants={fadeInUp}>
              <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-sm">
                {trainer.role}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 tracking-tighter leading-tight">
                {trainer.name}
              </h1>
              <div className="flex items-center gap-3 mt-6 py-2 px-4 bg-emerald-500/10 rounded-full w-fit border border-emerald-500/20 text-emerald-400">
                <FaClock />
                <span className="font-medium">{trainer.experience}</span>
              </div>
              <p className="mt-8 text-xl text-neutral-400 leading-relaxed italic border-l-2 border-emerald-500 pl-6">
                {trainer.shortBio}
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div variants={fadeInUp} className="p-8 bg-neutral-900/40 backdrop-blur-md rounded-[2rem] border border-white/5 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Məşqçi haqqında</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">{trainer.bio}</p>
            </motion.div>

            {/* Specialties & Certs Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-8 bg-neutral-900/30 rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-500" /> İxtisaslar
                </h3>
                <ul className="space-y-3">
                  {trainer.specialties.map((item, i) => (
                    <li key={i} className="text-neutral-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-8 bg-neutral-900/30 rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCertificate className="text-emerald-500" /> Sertifikatlar
                </h3>
                <ul className="space-y-3">
                  {trainer.certifications.map((cert, i) => (
                    <li key={i} className="text-neutral-400 flex items-start gap-2 italic">
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services CTA */}
            <motion.div variants={fadeInUp} className="relative p-10 bg-emerald-500 rounded-[2.5rem] overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950 tracking-tight">Məşqlərə başla</h2>
                  <p className="mt-2 font-medium text-neutral-900/80 max-w-sm">
                    {trainer.name} ilə hədəflərinə daha yaxınsan. İndi müraciət et.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-neutral-950 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl"
                >
                  Əlaqə saxla
                </Link>
              </div>
              <FaDumbbell className="absolute -bottom-6 -right-6 text-neutral-950/10 text-9xl -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </motion.div>
            
          </motion.div>
        </div>
      </section>
    </main>
  );
}