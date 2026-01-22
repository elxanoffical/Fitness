"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

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

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition
    ${
      scrolled ? "bg-neutral-950 border-b border-neutral-800" : "bg-transparent"
    }`}
      >
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-white">
            Karabakh<span className="text-emerald-500 ">Fitness</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-emerald-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded transition"
          >
            Qoşul
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-200 focus:outline-none"
            aria-label="Menu"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-neutral-950 pt-24 px-6">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-xl text-neutral-200 border-b border-neutral-800 pb-3"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 block text-center bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded text-lg transition"
          >
            Qoşul
          </Link>
        </div>
      )}
    </>
  );
}
