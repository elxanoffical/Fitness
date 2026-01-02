import Link from "next/link";
import {
  FaDumbbell,
  FaUsers,
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
  FaChild,
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
    title: "Fərdi Məşq Proqramları",
    description: "Bədən quruluşunuza və məqsədinizə uyğun fərdi planlar.",
    price: "100 AZN / ay",
    slug: "ferdi-meshq",
    icon: FaDumbbell,
  },
  {
    title: "Qrup Məşqləri",
    description: "Motivasiyalı və enerjili qrup fitness dərsləri.",
    price: "70 AZN / ay",
    slug: "qrup-meshq",
    icon: FaUsers,
  },
  {
    title: "Cardio Zonası",
    description: "Yağ yandırma və dözümlülük üçün cardio avadanlıqları.",
    price: "Üzvlük daxilində",
    slug: "cardio-zona",
    icon: FaRunning,
  },
  {
    title: "Güc (Strength) Zonası",
    description: "Əzələ kütləsinin artırılması üçün professional trenajorlar.",
    price: "Üzvlük daxilində",
    slug: "guc-zonasi",
    icon: FaFireAlt,
  },
  {
    title: "Funksional Məşqlər",
    description: "Bütün bədən üçün balans və çeviklik məşqləri.",
    price: "80 AZN / ay",
    slug: "funksional",
    icon: FaHeartbeat,
  },
  {
    title: "Qidalanma Konsultasiyası",
    description: "Sağlam həyat üçün düzgün qida planı.",
    price: "50 AZN / konsultasiya",
    slug: "qida-konsultasiya",
    icon: FaAppleAlt,
  },
  {
    title: "Uşaq Fitness Proqramları",
    description: "Uşaqlar üçün təhlükəsiz və əyləncəli fiziki aktivlik.",
    price: "60 AZN / ay",
    slug: "usaq-fitness",
    icon: FaChild,
  },
  {
    title: "Stretching & Recovery",
    description: "Bərpa, rahatlama və zədələrin qarşısının alınması.",
    price: "40 AZN / ay",
    slug: "stretching",
    icon: FaSpa,
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
          <ServiceCard key={service.slug} {...service} />
        ))}
      </section>
    </main>
  );
}

function ServiceCard({ title, description, price, slug, icon: Icon }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-emerald-500 transition">
      <div>
        <div className="w-12 h-12 flex items-center justify-center rounded bg-emerald-500/10 text-emerald-500 text-2xl">
          <Icon />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-neutral-400 text-sm">{description}</p>
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
