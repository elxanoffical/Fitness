import Image from "next/image";
import Link from "next/link";

export default function TrainersSection() {
  const trainers = [
    {
      id: 1,
      name: "Elvin Məmmədov",
      role: "Baş məşqçi / Strength",
      experience: "8 il təcrübə",
      specialties: ["Güc məşqləri", "Bədən quruluşu"],
      slug: "elvin-memmedov",
      image: "/trainers/trainer-1new.jpg",
    },
    {
      id: 2,
      name: "Aysel Hüseynova",
      role: "Fitness & Cardio məşqçisi",
      experience: "6 il təcrübə",
      specialties: ["Cardio", "Yağ yandırma"],
      slug: "aysel-huseynova",
      image: "/trainers/trainer-2-new.jpg",
    },
    {
      id: 3,
      name: "Murad Hüseynov",
      role: "Fərdi məşqçi",
      experience: "5 il təcrübə",
      specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
      slug: "murad-huseynov",
      image: "/trainers/trainer-3-new.jpg",
    },
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">Məşqçilərimiz</h2>
          <p className="mt-4 text-neutral-400">
            Təcrübəli və peşəkar komandamız səni məqsədlərinə daha tez çatdıracaq.
          </p>
        </div>

        {/* Trainer cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainerCard({ name, role, experience, specialties, slug, image }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden hover:border-emerald-500 transition flex flex-col h-full">
      {/* IMAGE */}
      <div className="w-full aspect-[4/4] bg-neutral-800 flex items-center justify-center text-neutral-600">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-[500px]"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1 text-center">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-neutral-400">{role}</p>
        <div className="text-sm text-neutral-400 mt-1">{experience}</div>

        <ul className="mt-2 text-sm text-neutral-400 space-y-1 flex-1">
          {specialties.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <Link
          href={`/trainers/${slug}`}
          className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-2 px-4 rounded transition text-sm"
        >
          Profilə bax
        </Link>
      </div>
    </div>
  );
}
