"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt, FaTimes } from "react-icons/fa";

const galleryItems = [
  { id: 1, label: "Güc Zonası", image: "/galleryPage/gallery1.jpg" },
  { id: 2, label: "Cardio Sahəsi", image: "/galleryPage/gallery2.jpg" },
  { id: 3, label: "Fərdi Məşq", image: "/galleryPage/gallery3.jpg" },
  { id: 4, label: "Qrup Məşqi", image: "/galleryPage/gallery4.jpg" },
  { id: 5, label: "Avadanlıqlar", image: "/galleryPage/gallery5.jpg" },
  { id: 6, label: "Zal Ümumi Görünüş", image: "/galleryPage/gallery6.jpg" },
  { id: 7, label: "Stretching", image: "/galleryPage/gallery7.jpg" },
  { id: 8, label: "Locker & Duş", image: "/galleryPage/gallery8.jpg" },
  { id: 9, label: "Motivasiya Atmosferi", image: "/galleryPage/gallery9.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen pb-32">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4">
        {/* Background glow - Trainers və Services ilə eyni stil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Zalımızdan <span className="text-emerald-500">Görüntülər</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Karabakh Fitness-in müasir mühiti, peşəkar avadanlıqları və 
            ilhamverici məşq atmosferi ilə tanış olun.
          </p>
        </motion.div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square cursor-pointer border border-neutral-800 rounded-[2rem] overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-emerald-500/50"
            >
              {/* Zoom Overlay */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="bg-emerald-500 text-neutral-950 p-4 rounded-full shadow-xl mb-4"
                >
                  <FaExpandAlt size={24} />
                </motion.div>
                <span className="text-white font-bold text-xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </span>
              </div>

              {/* Image */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX (Zoomed Image) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-lg p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-emerald-500 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={40} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Şəkil üzərinə klikləyəndə bağlanmasın
            >
              <div className="relative w-full h-[70vh] md:h-[80vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.label}
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white text-2xl md:text-3xl font-bold mt-8"
              >
                {selectedImage.label}
              </motion.h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}