"use client";

import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    reset();
  };

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT CTA */}
        <div>
          <h2 className="text-3xl font-semibold text-white">
            Bizimlə əlaqə saxla
          </h2>
          <p className="mt-4 text-neutral-400 max-w-md">
            Sualların var? Paketlər və məşq proqramları haqqında ətraflı məlumat
            almaq üçün formu doldur, komandamız səninlə əlaqə saxlasın.
          </p>

          <div className="mt-8 space-y-4 text-neutral-300">
            <p>📍 Bakı, Füzuli Əliyev küçəsi</p>
            <p>📞 +994 XX XXX XX XX</p>
            <p>⏰ 06:30 – 24:00</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutral-900 border border-neutral-800 rounded p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Ad Soyad
            </label>
            <input
              type="text"
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              {...register("name", { required: "Ad soyad tələb olunur" })}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              {...register("phone", {
                required: "Telefon nömrəsi tələb olunur",
                minLength: {
                  value: 9,
                  message: "Telefon düzgün deyil",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">Mesaj</label>
            <textarea
              rows="4"
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              {...register("message")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white py-3 rounded transition"
          >
            {isSubmitting ? "Göndərilir..." : "Göndər"}
          </button>
        </form>
      </div>
    </section>
  );
}
