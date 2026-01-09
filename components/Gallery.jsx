import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const images = [
    "/gallery/img-1.jpg",
    "/gallery/img-2.jpg",
    "/gallery/img-3.jpg",
    "/gallery/img-4.jpg",
    "/gallery/img-5.jpg",
    "/gallery/img-6.jpg",
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">Qalereya</h2>
          <p className="mt-4 text-neutral-400">
            Zalımızdan görüntülər və məşq atmosferi.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square bg-neutral-900 border border-neutral-800 rounded overflow-hidden flex items-center justify-center text-neutral-600"
            >
              <Image
                src={img}
                alt="Gallery Image"
                width={400}
                height={400}
                className=" object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block border border-neutral-700 hover:border-emerald-500 text-neutral-300 px-6 py-3 rounded transition"
          >
            Bütün şəkillərə bax
          </Link>
        </div>
      </div>
    </section>
  );
}
