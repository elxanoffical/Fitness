"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt, FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/gallery/img-1.jpg",
    "/gallery/img-2.jpg",
    "/gallery/img-3.jpg",
    "/gallery/img-4.jpg",
    "/gallery/img-5.jpg",
    "/gallery/img-6.jpg",
  ];

  // Şəkillərin sırayla çıxması üçün variantlar
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  return (
    <section className="py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Başlıq Bölməsi */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Zalımızdan <span className="text-emerald-500">Görüntülər</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Məşq atmosferini və peşəkar avadanlıqlarımızı kəşf edin.
          </p>
        </motion.div>

        {/* Qalereya Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square cursor-pointer border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-emerald-500/50"
            >
              {/* Zoom Overlay (Hover zamanı çıxan ikon) */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-emerald-500 text-neutral-950 p-3 rounded-full shadow-xl"
                >
                  <FaExpandAlt size={20} />
                </motion.div>
              </div>

              {/* Əsas Şəkil */}
              <Image
                src={img}
                alt={`Gym image ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Düyməsi */}
        <div className="mt-16 text-center">
          <Link href="/gallery">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-neutral-700 hover:border-emerald-500 text-neutral-300 hover:text-emerald-500 px-8 py-3 rounded-xl transition-all duration-300 font-bold tracking-wide"
            >
              Bütün şəkillərə bax
            </motion.div>
          </Link>
        </div>

        {/* Zoomed Image Overlay (Lightbox) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
            >
              {/* Bağla Düyməsi */}
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-emerald-500 transition-colors z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={32} />
              </button>

              {/* Böyüdülmüş Şəkil */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                className="relative max-w-5xl w-full h-full max-h-[85vh] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Full Gym View"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;