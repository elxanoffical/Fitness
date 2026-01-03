import Link from "next/link";
import {
  FaDumbbell,
  FaHeartbeat,
  FaFireAlt,
  FaUserTie,
} from "react-icons/fa";

export const metadata = {
  title: "Məşqçilər – Karabakh Fitness",
  description:
    "Karabakh Fitness-in peşəkar və sertifikatlı məşqçiləri ilə tanış olun.",
};

const trainers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    specialties: ["Güc məşqləri", "Bədən quruluşu"],
    slug: "elvin-memmedov",
    icon: FaFireAlt,
  },
  {
    id: 2,
    name: "Aysel Hüseynova",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    specialties: ["Cardio", "Yağ yandırma"],
    slug: "aysel-huseynova",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    name: "Kamran Əliyev",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
    slug: "kamran-eliyev",
    icon: FaDumbbell,
  },
  {
    id: 4,
    name: "Nigar Rzayeva",
    role: "Qrup məşqləri üzrə mütəxəssis",
    experience: "4 il təcrübə",
    specialties: ["Qrup fitness", "Stretching"],
    slug: "nigar-rzayeva",
    icon: FaUserTie,
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Məşqçilərimiz
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Təcrübəli, sertifikatlı və motivasiya verən komanda ilə məqsədlərinə çat.
        </p>
      </section>

      {/* TRAINERS GRID */}
      <section className="px-4 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} {...trainer} />
        ))}
      </section>
    </main>
  );
}

function TrainerCard({
  name,
  role,
  experience,
  specialties,
  slug,
  icon: Icon,
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-6 hover:border-emerald-500 transition flex flex-col">
      {/* IMAGE PLACEHOLDER */}
      <div className="w-full aspect-square bg-neutral-800 rounded mb-4 flex items-center justify-center text-neutral-600">
        Photo
      </div>

      <div className="flex items-center gap-2 text-emerald-500 text-sm">
        <Icon />
        {experience}
      </div>

      <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
      <p className="text-neutral-400 text-sm">{role}</p>

      <ul className="mt-3 text-neutral-400 text-sm space-y-1">
        {specialties.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <Link
        href={`/trainers/${slug}`}
        className="mt-6 inline-block text-center bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-2 rounded transition"
      >
        Profilə bax
      </Link>
    </div>
  );
}
