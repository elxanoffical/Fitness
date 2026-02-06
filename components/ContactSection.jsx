"use client";

import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className=" bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE INFO */}
        <div>
          <h2 className="text-3xl font-semibold text-white">
            Bizimlə əlaqə saxla
          </h2>

          <p className="mt-4 text-neutral-400 max-w-md">
            Sualların var? Paketlər və məşq proqramları haqqında ətraflı məlumat
            almaq üçün formu doldur, komandamız səninlə əlaqə saxlasın.
          </p>

          <ul className="mt-8 space-y-5 text-neutral-400">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-500 text-xl" />
              Bakı, Füzuli Əliyev küçəsi 14D
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-500 text-xl" />
              +994 XX XXX XX XX
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-500 text-xl" />
              info@karabakhfitness.az
            </li>
          </ul>

          <p className="mt-6 text-neutral-400">
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
                placeholder="Ad Soyad"
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500"
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
                placeholder="+994 XX XXX XX XX"
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Mesajınız
              </label>
              <textarea
                rows={5}
                {...register("message")}
                placeholder="Mesajınızı yazın..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-3 rounded transition disabled:opacity-50"
            >
              <FaPaperPlane />
              {isSubmitting ? "Göndərilir..." : "Göndər"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
