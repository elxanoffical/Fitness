import Link from "next/link";
import { FaDumbbell, FaHeartbeat, FaUsers } from "react-icons/fa";

export default function ServicesPreview() {
  const featuredServices = [
    {
      id: 1,
      title: "Fitness Zalı Üzvlüyü",
      price: "100–900 AZN",
      slug: "fitness-zali-uzvluyu",
      icon: FaDumbbell,
      features: [
        "Cardio və güc zonalarına tam giriş",
        "Locker və duş otaqları",
        "Təmiz və təhlükəsiz məşq mühiti",
      ],
    },
    {
      id: 2,
      title: "Fərdi Məşq Proqramları",
      price: "200–1200 AZN",
      slug: "ferdi-meshq",
      icon: FaHeartbeat,
      features: [
        "Bədən quruluşuna uyğun fərdi məşq",
        "Peşəkar məşqçi dəstəyi",
      ],
    },
    {
      id: 3,
      title: "Qrup Məşqləri",
      price: "50–350 AZN",
      slug: "qrup-meshq",
      icon: FaUsers,
      features: [
        "Motivasiyalı və enerjili qrup dərsləri",
        "Üzvlük daxilində cardio & strength sahələri",
      ],
    },
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">
            Xidmətlər və Paketlər
          </h2>
          <p className="mt-4 text-neutral-400">
            Öz məqsədinə uyğun paketi seç və sağlam həyatına bu gün başla.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="rounded border border-neutral-800 bg-neutral-900 p-8 flex flex-col justify-between hover:border-emerald-500 transition"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded bg-emerald-500/10 text-emerald-500 text-2xl">
                  <service.icon />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-emerald-500 font-medium">{service.price}</p>

                <ul className="mt-4 space-y-2 text-neutral-400">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-3 rounded transition"
              >
                Daha ətraflı
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
