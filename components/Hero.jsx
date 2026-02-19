  import Image from "next/image";
  import Link from "next/link";

  export default function Hero() {
    return (
      <section className="relative min-h-[100svh] w-full bg-neutral-950 overflow-hidden flex">
        
        {/* BACKGROUND IMAGE */}
        <Image
          src="/HeroTrainers.webp"
          alt="Fitness Image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
          
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
              Sağlam həyat
              <br />
              <span className="text-emerald-500">
                buradan başlayır
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-neutral-200 text-base md:text-lg">
              Peşəkar məşqçilər, müasir avadanlıqlar və balanslı məşq proqramları
              ilə daha güclü və sağlam ol.
            </p>

            <div className="mt-8 md:mt-10 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded transition"
              >
                Qoşul
              </Link>

              <Link
                href="/services"
                className="border border-white/30 hover:border-emerald-500 text-white px-6 py-3 rounded transition"
              >
                Paketlər
              </Link>
            </div>
          </div>

        </div>
      </section>
    );
  }
