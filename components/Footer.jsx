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

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-12">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Logo & About - Daha geniş yer ayırırıq */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              FIT<span className="text-emerald-500">ZONE</span>
            </Link>
            <p className="mt-6 text-neutral-400 leading-relaxed max-w-sm">
              Sağlam həyat tərzi, peşəkar məşqçilər və müasir avadanlıqlarla
              məqsədlərinə çatmağın ən doğru ünvanı. Bədənini və həyatını bizimlə dəyiş.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hızlı Keçidlər */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Menu</h4>
            <ul className="space-y-4">
              {[
                { name: "Ana səhifə", href: "/#" },
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
                    <span className="w-0 group-hover:w-2 h-[1px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə Məlumatları */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Məlumat</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Ünvan</span>
                <span className="text-neutral-300">Bakı, 65-123 Xaqani Küçəsi</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Telefon</span>
                <span className="text-neutral-300">+994 XX XXX XX XX</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">İş Saatları</span>
                <span className="text-neutral-300 font-medium text-emerald-500/90">06:30 – 00:00 (Hər gün)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-500 tracking-wider">
            © {currentYear} FITZONE GYM & FITNESS. BÜTÜN HÜQUQLAR QORUNUR.
          </p>

          <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-widest">
            <span>Developed by</span>
            <a 
              href="#" 
              className="text-white hover:text-emerald-500 transition-colors font-bold"
            >
              Elxan Məhərrəmli
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}