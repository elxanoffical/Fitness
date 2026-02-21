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
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* SOL TƏRƏF - INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Bizimlə <span className="text-emerald-500">Əlaqə</span> Saxla
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full mb-6" />

          <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
            Sualların var? Paketlər və məşq proqramları haqqında ətraflı məlumat
            almaq üçün formu doldur, komandamız səninlə əlaqə saxlasın.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { icon: FaMapMarkerAlt, text: "Bakı, 65-123 Xaqani Küçəsi" },
              { icon: FaPhoneAlt, text: "+994 XX XXX XX XX" },
              { icon: FaEnvelope, text: "info@FitZone.az" },
              { icon: FaClock, text: "İş saatları: 06:30 – 00:00", highlight: "06:30 – 00:00" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <span className="text-neutral-300 font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SAĞ TƏRƏF - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Form Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-30" />
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
          >
            <div className="grid gap-6">
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Adınız
                </label>
                <input
                  {...register("name", { required: "Ad mütləqdir" })}
                  placeholder="Ad Soyad"
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500/80 text-xs mt-2 ml-1 italic">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Telefon
                </label>
                <input
                  {...register("phone", { required: "Telefon mütləqdir" })}
                  placeholder="+994 XX XXX XX XX"
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
                {errors.phone && (
                  <p className="text-red-500/80 text-xs mt-2 ml-1 italic">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Mesaj mütləqdir" })}
                  placeholder="Mesajınızı bura yazın..."
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-500/80 text-xs mt-2 ml-1 italic">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Mesajı Göndər</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}