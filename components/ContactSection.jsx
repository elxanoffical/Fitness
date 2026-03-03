"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();

      toast.success("Mesaj uğurla göndərildi 👍");
      reset();
    } catch (error) {
      toast.error("Xəta baş verdi. Yenidən yoxlayın.");
    }
  };

  return (
   <section className="relative pt-12 md:pt-24 pb-24 bg-neutral-950 overflow-hidden">
      
      {/* Background Glow - Digər səhifələrlə eyni (Trainers/Gallery) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* SOL TƏRƏF - INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-4" // Yazıların bir az daha aşağıdan başlaması üçün
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
            Bizimlə <span className="text-emerald-500">Əlaqə</span> Saxla
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mt-6 rounded-full mb-8" />

          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-md">
            Sualların var? Komandamız sənə kömək etməyə hazırdır. 
            Formu doldur, ən qısa zamanda geri dönək.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { icon: FaMapMarkerAlt, text: "Bakı, FitZone Fitness Center" },
              { icon: FaPhoneAlt, text: "+994 50 123 45 67" },
              { icon: FaEnvelope, text: "info@fitzonefitness.az" },
              { icon: FaClock, text: "Hər gün: 07:00 – 23:00" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-500">
                  <item.icon size={20} />
                </div>
                <span className="text-neutral-300 font-medium text-lg">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SAĞ TƏRƏF - FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 md:mt-0"
        >
          {/* Form Glow Effect */}
          <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50" />
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-neutral-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-500 mb-2 ml-1">ADINIZ</label>
                <input
                  {...register("name", { required: "Ad mütləqdir" })}
                  placeholder="Məs: Elvin Məmmədov"
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-500 mb-2 ml-1">TELEFON</label>
                <input
                  {...register("phone", { required: "Telefon mütləqdir" })}
                  placeholder="+994"
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-500 mb-2 ml-1">MESAJINIZ</label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Mesaj mütləqdir" })}
                  placeholder="Sualınız və ya qeydiniz..."
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 mt-2"
              >
                {isSubmitting ? "Göndərilir..." : "Mesajı Göndər"}
                {!isSubmitting && <FaPaperPlane className="text-sm" />}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}