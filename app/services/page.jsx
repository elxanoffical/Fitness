import Link from "next/link";
import {
  FaDumbbell,
  FaUsers,
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
  FaFireAlt,
  FaSpa,
} from "react-icons/fa";

export const metadata = {
  title: "Xidmətlər – Karabakh Fitness",
  description:
    "Karabakh Fitness — fərdi və qrup məşqləri, cardio, strength, diet və recovery proqramları.",
};

const services = [
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
  {
    id: 4,
    title: "Cardio Zonası",
    price: "Üzvlük daxilində",
    slug: "cardio-zona",
    icon: FaRunning,
    features: [
      "Cardio trenajorları (velosiped, treadmill, stepper)",
      "Yağ yandırma və dözümlülük artımı",
    ],
  },
  {
    id: 5,
    title: "Güc (Strength) Zonası",
    price: "Üzvlük daxilində",
    slug: "guc-zonasi",
    icon: FaFireAlt,
    features: [
      "Əzələ inkişafı üçün ağırlıq avadanlıqları",
      "Compound hərəkətlər üçün sərbəst zonalar",
    ],
  },
  {
    id: 6,
    title: "Funksional Məşqlər",
    price: "Üzvlük daxilində",
    slug: "funksional",
    icon: FaHeartbeat,
    features: [
      "Balans və koordinasiya inkişafı",
      "TRX, kettlebell, plyo box ilə məşqlər",
    ],
  },
  {
    id: 7,
    title: "Stretching & Recovery",
    price: "Üzvlük daxilində",
    slug: "stretching",
    icon: FaSpa,
    features: [
      "Bərpa və rahatlama texnikaları",
      "Zədələrin qarşısını alma məşqləri",
    ],
  },
  {
    id: 8,
    title: "Qidalanma Konsultasiyası",
    price: "50 AZN / konsultasiya",
    slug: "qida-konsultasiya",
    icon: FaAppleAlt,
    features: [
      "Fərdi qida planlaması",
      "Arıqlama və ya kütlə artırma dəstəyi",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Xidmətlərimiz
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Sağlamlıq, güc və balans üçün tam fitness həlləri.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-4 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>
    </main>
  );
}

function ServiceCard({ title, price, slug, icon: Icon, features }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-emerald-500 transition">
      <div>
        <div className="w-12 h-12 flex items-center justify-center rounded bg-emerald-500/10 text-emerald-500 text-2xl">
          <Icon />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>

        <ul className="mt-4 space-y-2 text-neutral-400 text-sm">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-emerald-500 font-medium">{price}</p>
        <Link
          href={`/services/${slug}`}
          className="mt-3 inline-block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold py-2 rounded transition"
        >
          Daha ətraflı
        </Link>
      </div>
    </div>
  );
}
