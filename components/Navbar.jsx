"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Ana səhifə", href: "/" },
    { name: "Haqqımızda", href: "/about" },
    { name: "Xidmətlər", href: "/services" },
    { name: "Məşqçilər", href: "/trainers" },
    { name: "Qalereya", href: "/gallery" },
    { name: "Əlaqə", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Variants */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const mobileMenu = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition
        ${scrolled
            ? "bg-neutral-950 border-b border-neutral-800"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-semibold text-white">
              Fit<span className="text-emerald-500">Zone</span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden lg:flex gap-8 text-sm"
          >
            {links.map((link) => (
              <motion.li key={link.name} variants={item}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-emerald-400 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:inline-flex"
          >
            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded transition"
            >
              Qoşul
            </Link>
          </motion.div>

          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="lg:hidden text-neutral-200"
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="lg:hidden fixed inset-0 z-40 bg-neutral-950 pt-24 px-6"
          >
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {links.map((link) => (
                <motion.li key={link.name} variants={item}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-xl text-neutral-200 border-b border-neutral-800 pb-3"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 block text-center bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded text-lg"
              >
                Qoşul
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
