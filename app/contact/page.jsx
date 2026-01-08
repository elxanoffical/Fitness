"use client";

import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";


export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Sonradan mail / API inteqrasiyası əlavə olunacaq
    reset();
  };

  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Əlaqə
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Qeydiyyat, üzvlük paketləri və suallar üçün bizimlə əlaqə saxla.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Bizimlə əlaqə
          </h2>

          <ul className="space-y-5 text-neutral-400">
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-500 text-xl" />
              +994 XX XXX XX XX
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-500 text-xl" />
              info@karabakhfitness.az
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-500 text-xl" />
              Bakı, Füzuli Əliyev küçəsi 14D
            </li>
          </ul>

          <p className="mt-8 text-neutral-400">
            İş saatları: <span className="text-white">06:30 – 00:00</span>
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutral-900 border border-neutral-800 rounded p-8"
        >
          <div className="grid gap-6">
            {/* NAME */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Adınız
              </label>
              <input
                {...register("name", { required: "Ad mütləqdir" })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Ad Soyad"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Telefon
              </label>
              <input
                {...register("phone", { required: "Telefon mütləqdir" })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="+994"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Mesajınız
              </label>
              <textarea
                {...register("message", { required: "Mesaj mütləqdir" })}
                rows={5}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Mesajınızı yazın..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-3 rounded transition"
            >
              <FaPaperPlane />
              Göndər
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
