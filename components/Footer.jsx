"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaWhatsapp, href: "#", label: "Whatsapp" },
    { icon: FaYoutube, href: "#", label: "Youtube" },
  ];

  // Konteyner animasiyası (içindəkiləri ardıcıl işə salır)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Hər bir elementin fərdi animasiyası
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Footer bir dəfə gəlsin bəsdir
        className="max-w-6xl mx-auto px-4 pt-20 pb-12"
      >
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Logo & About */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter group">
              FIT<span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">ZONE</span>
            </Link>
            <p className="mt-6 text-neutral-400 leading-relaxed max-w-sm">
              Sağlam həyat tərzi, peşəkar məşqçilər və müasir avadanlıqlarla
              məqsədlərinə çatmağın ən doğru ünvanı. Bədənini və həyatını bizimlə dəyiş.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Hızlı Keçidlər */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Menu</h4>
            <ul className="space-y-4">
              {[
                { name: "Ana səhifə", href: "/" },
                { name: "Xidmətlər", href: "/services" },
                { name: "Məşqçilər", href: "/trainers" },
                { name: "Qalereya", href: "/gallery" },
                { name: "Əlaqə", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <motion.span 
                      className="w-0 group-hover:w-2 h-[1px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Əlaqə Məlumatları */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Məlumat</h4>
            <ul className="space-y-5 text-sm">
              {[
                { label: "Ünvan", value: "Bakı, 65-123 Xaqani Küçəsi" },
                { label: "Telefon", value: "+994 XX XXX XX XX" },
                { label: "İş Saatları", value: "06:30 – 00:00 (Hər gün)", color: "text-emerald-500/90" }
              ].map((info, idx) => (
                <li key={idx} className="flex flex-col gap-1">
                  <span className="text-neutral-500 text-[10px] uppercase tracking-widest">{info.label}</span>
                  <span className={`text-neutral-300 ${info.color || ""}`}>{info.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] md:text-xs text-neutral-500 tracking-wider">
            © {currentYear} FITZONE GYM & FITNESS. BÜTÜN HÜQUQLAR QORUNUR.
          </p>

          <div className="flex items-center gap-2 text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
            <span>Developed by</span>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05, color: "#10b981" }}
              className="text-white transition-colors font-bold"
            >
              Elxan Məhərrəmli
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}