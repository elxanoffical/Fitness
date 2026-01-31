import { FaImages } from "react-icons/fa";

export const metadata = {
  title: "Qalereya – Karabakh Fitness",
  description:
    "Karabakh Fitness zalından görüntülər: məşq sahələri, avadanlıqlar və məşq anları.",
};

const galleryItems = [
  { id: 1, type: "image", label: "Güc Zonası", image: "/galleryPage/gallery1.jpg" },
  { id: 2, type: "image", label: "Cardio Sahəsi", image: "/galleryPage/gallery2.jpg" },
  { id: 3, type: "image", label: "Fərdi Məşq", image: "/galleryPage/gallery3.jpg" },
  { id: 4, type: "image", label: "Qrup Məşqi", image: "/galleryPage/gallery4.jpg" },
  { id: 5, type: "image", label: "Avadanlıqlar", image: "/galleryPage/gallery5.jpg" },
  { id: 6, type: "image", label: "Zal Ümumi Görünüş", image: "/galleryPage/gallery6.jpg" },
  { id: 7, type: "image", label: "Stretching", image: "/galleryPage/gallery7.jpg" },
  { id: 8, type: "image", label: "Locker & Duş", image: "/galleryPage/gallery8.jpg" },
  { id: 9, type: "image", label: "Motivasiya Atmosferi",image: "/galleryPage/gallery9.jpg",},
];

export default function GalleryPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Qalereya
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Karabakh Fitness-in müasir mühiti, avadanlıqları və məşq atmosferi.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="px-4 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} label={item.label} image={item.image} />
        ))}
      </section>
    </main>
  );
}

import Image from "next/image";

function GalleryCard({ label, image }) {
  return (
    <div className="group relative aspect-square bg-neutral-900 border border-neutral-800 rounded overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={label}
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <span className="text-white font-medium">{label}</span>
      </div>
    </div>
  );
}
