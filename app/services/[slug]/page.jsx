"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMale, FaFemale, FaCheckCircle, FaClock, FaArrowLeft } from "react-icons/fa";
import { servicesData } from "@/data/servicesData"; 

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
    transition: { staggerChildren: 0.1 }
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = servicesData[slug];

  if (!service) return <div className="py-40 text-center">Xidmət tapılmadı.</div>;

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24">
        
        {/* BACK BUTTON */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-500 transition-colors mb-12 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Xidmətlərə qayıt
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-neutral-400 max-w-3xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </motion.section>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* FEATURES - Left Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8">
              Üzvlüyə daxildir
            </motion.h2>
            <ul className="space-y-5">
              {service.features.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-center gap-4 text-neutral-300 bg-neutral-900/40 p-4 rounded-2xl border border-white/5"
                >
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* PRICING - Right Side */}
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8"
            >
              Üzvlük Paketləri
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <PricingCard
                title="Kişilər üçün"
                icon={FaMale}
                data={service.pricing.kisi}
                delay={0.1}
              />
              <PricingCard
                title="Qadınlar üçün"
                icon={FaFemale}
                data={service.pricing.qadin}
                delay={0.3}
              />
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-32 relative group"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-neutral-900 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
               <FaClock size={200} />
            </div>
            
            <FaClock className="mx-auto text-emerald-500 text-4xl mb-6" />
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">İndi başlamaq vaxtıdır</h3>
            <p className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto">
              Sənə ən uyğun paketi seçdikdən sonra məşqçilərimizlə əlaqə saxlayaraq ilk addımı ata bilərsən.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Bizimlə əlaqə
              </Link>
              <Link
                href="/trainers"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-10 py-4 rounded-2xl transition-all"
              >
                Məşqçilərlə tanış ol
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function PricingCard({ title, icon: Icon, data, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, }}
      whileHover={{ y: -8 }}
      className="bg-neutral-900/50 backdrop-blur-md border cursor-pointer border-white/10 rounded-[2.5rem] p-10 hover:border-emerald-500/30 transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 text-2xl">
          <Icon />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors group"
          >
            <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors font-medium">{item.duration}</span>
            <span className="text-emerald-500 font-bold text-lg">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}