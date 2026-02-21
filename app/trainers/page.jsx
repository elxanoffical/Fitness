import TrainerCard from "@/components/TrainerCard";

export const metadata = {
  title: "Məşqçilər – Karabakh Fitness",
  description: "Karabakh Fitness-in peşəkar və sertifikatlı məşqçiləri ilə tanış olun.",
};

const trainers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    image: "/trainers/trainer-1new.jpg",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    specialties: ["Güc məşqləri", "Bədən quruluşu"],
    slug: "elvin-memmedov",
  },
  {
    id: 2,
    name: "Aysel Hüseynova",
    image: "/trainers/trainer-2-new.jpg",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    specialties: ["Cardio", "Yağ yandırma"],
    slug: "aysel-huseynova",
  },
  {
    id: 3,
    name: "Murad Hüseynov",
    image: "/trainers/trainer-3-new.jpg",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
    slug: "murad-huseynov",
  },
  {
    id: 4,
    name: "Nigar Rzayeva",
    image: "/trainers/trainer-4.jpg",
    role: "Qrup məşqləri üzrə mütəxəssis",
    experience: "4 il təcrübə",
    specialties: ["Qrup fitness", "Stretching"],
    slug: "nigar-rzayeva",
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Məşqçilərimiz
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Təcrübəli, sertifikatlı və motivasiya verən komanda ilə məqsədlərinə çat.
        </p>
      </section>

      <section className="px-4 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((t) => (
          <TrainerCard key={t.id} {...t} showIcon={true} />
        ))}
      </section>
    </main>
  );
}