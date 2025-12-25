export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Sağlam həyat
            <br />
            <span className="text-emerald-500">buradan başlayır</span>
          </h1>

          <p className="mt-6 text-neutral-400 text-lg max-w-md">
            Peşəkar məşqçilər, müasir avadanlıqlar və balanslı məşq proqramları ilə
            daha güclü və sağlam ol.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded transition"
            >
              Qoşul
            </a>

            <a
              href="/services"
              className="border border-neutral-700 hover:border-emerald-500 text-neutral-300 px-6 py-3 rounded transition"
            >
              Paketlər
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:block">
          <div className="aspect-[4/5] bg-neutral-900 rounded flex items-center justify-center text-neutral-600">
            {/* Buraya image/video gələcək */}
            Fitness Image
          </div>
        </div>

      </div>
    </section>
  );
}
