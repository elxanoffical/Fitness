import Image from "next/image";
import Link from "next/link";

export default function Trainers() {
  const trainers = [
    {
      name: "Elvin Məmmədov",
      role: "Fitness üzrə məşqçi",
      image: "/trainers/trainer-1.jpg",
    },
    {
      name: "Aysel Əliyeva",
      role: "Cardio & Wellness",
      image: "/trainers/trainer-2.jpg",
    },
    {
      name: "Murad Hüseynov",
      role: "Personal Trainer",
      image: "/trainers/trainer-3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">Məşqçilərimiz</h2>
          <p className="mt-4 text-neutral-400">
            Təcrübəli və peşəkar komandamız səni məqsədlərinə daha tez
            çatdıracaq.
          </p>
        </div>

        {/* Trainer cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/4] bg-neutral-800 flex items-center justify-center text-neutral-600">
                <Image
                  src={trainer.image}
                  alt="Fitness Image"
                  width={400}
                  height={500}
                  className=" object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-white">
                  {trainer.name}
                </h3>
                <p className="mt-2 text-neutral-400">{trainer.role}</p>

                <Link
                  href="/trainers"
                  className="inline-block mt-4 text-emerald-500 hover:text-emerald-400 transition text-sm"
                >
                  Daha ətraflı
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
