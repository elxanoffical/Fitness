import TrainerCard from "@/components/TrainerCard";
import { FaFireAlt, FaHeartbeat, FaDumbbell } from "react-icons/fa";

const trainers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    image: "/trainers/trainer-1new.jpg",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    specialties: ["Güc məşqləri", "Bədən quruluşu"],
    slug: "elvin-memmedov",
    icon: FaFireAlt,
  },
  {
    id: 2,
    name: "Aysel Hüseynova",
    image: "/trainers/trainer-2-new.jpg",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    specialties: ["Cardio", "Yağ yandırma"],
    slug: "aysel-huseynova",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    name: "Murad Hüseynov",
    image: "/trainers/trainer-3-new.jpg",
    role: "Fərdi məşqçi",
    experience: "5 il təcrübə",
    specialties: ["Fərdi proqramlar", "Funksional məşqlər"],
    slug: "murad-huseynov",
    icon: FaDumbbell,
  },
];

export default function TrainersSection() {
  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">Məşqçilərimiz</h2>
          <p className="mt-4 text-neutral-400">
            Təcrübəli və peşəkar komandamız səni məqsədlərinə daha tez çatdıracaq.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {trainers.map((t) => (
            <TrainerCard key={t.id} {...t} showIcon={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
