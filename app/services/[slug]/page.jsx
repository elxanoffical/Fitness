import { FaMale, FaFemale, FaCheckCircle, FaClock } from "react-icons/fa";


export const servicesData = {
  "fitness-zali-uzvluyu": {
    title: "Fitness Zalı Üzvlüyü",
    description:
      "Karabakh Fitness üzvlüyü ilə müasir avadanlıqlar, rahat mühit və professional dəstək əldə edin.",
    features: [
      "Cardio və güc zonalarına tam giriş",
      "Locker və duş otaqları",
      "Təmiz və təhlükəsiz məşq mühiti",
      "Geniş iş saatları (06:30 – 00:00)",
    ],
    pricing: {
      kisi: [
        { duration: "1 ay", price: "150 AZN" },
        { duration: "3 ay", price: "350 AZN" },
        { duration: "6 ay", price: "650 AZN" },
        { duration: "12 ay", price: "900 AZN" },
      ],
      qadin: [
        { duration: "1 ay", price: "100 AZN" },
        { duration: "3 ay", price: "250 AZN" },
        { duration: "6 ay", price: "450 AZN" },
        { duration: "12 ay", price: "700 AZN" },
      ],
    },
  },
  "ferdi-meshq": {
    title: "Fərdi Məşq Proqramları",
    description: "Bədən quruluşuna və məqsədinizə uyğun fərdi planlar.",
    features: [
      "Fərdi məşq proqramı",
      "Hədəfə uyğun planlama",
      "Məşqçi tərəfindən davamlı nəzarət",
      "Maksimum nəticə üçün optimallaşdırılmış məşqlər",
    ],
    pricing: {
      kisi: [
        { duration: "1 ay", price: "150 AZN" },
        { duration: "3 ay", price: "350 AZN" },
        { duration: "6 ay", price: "650 AZN" },
        { duration: "12 ay", price: "900 AZN" },
      ],
      qadin: [
        { duration: "1 ay", price: "100 AZN" },
        { duration: "3 ay", price: "250 AZN" },
        { duration: "6 ay", price: "450 AZN" },
        { duration: "12 ay", price: "700 AZN" },
      ],
    },
  },
  "qrup-meshq": {
    title: "Qrup Məşqləri",
    description: "Enerjili və motivasiyalı qrup fitness dərsləri.",
    features: [
      "Motivasiya dolu qrup məşqləri",
      "Fərdi yanaşma ilə qrup təlimi",
      "İntizam və davamlılıq təminatı",
      "Cardio və strength zonalarına giriş",
    ],
    pricing: {
      kisi: [
        { duration: "1 ay", price: "70 AZN" },
        { duration: "3 ay", price: "200 AZN" },
        { duration: "6 ay", price: "350 AZN" },
        { duration: "12 ay", price: "600 AZN" },
      ],
      qadin: [
        { duration: "1 ay", price: "50 AZN" },
        { duration: "3 ay", price: "150 AZN" },
        { duration: "6 ay", price: "250 AZN" },
        { duration: "12 ay", price: "450 AZN" },
      ],
    },
  },
  "cardio-zona": {
    title: "Cardio Zonası",
    description: "Yağ yandırma və dözümlülük üçün cardio avadanlıqları.",
    features: ["Cardio trenajorları", "Fərdi və qrup məşqlərinə daxil olmaq"],
    pricing: {
      kisi: [{ duration: "Üzvlük daxilində", price: "-" }],
      qadin: [{ duration: "Üzvlük daxilində", price: "-" }],
    },
  },
  "guc-zonasi": {
    title: "Güc (Strength) Zonası",
    description: "Əzələ inkişafı üçün professional trenajorlar.",
    features: [
      "Təhlükəsiz məşq mühiti",
      "Professional trenajorlar",
      "Gücləndirici məşqlər",
    ],
    pricing: {
      kisi: [{ duration: "Üzvlük daxilində", price: "-" }],
      qadin: [{ duration: "Üzvlük daxilində", price: "-" }],
    },
  },
  funksional: {
    title: "Funksional Məşqlər",
    description: "Balans, çeviklik və bədən nəzarəti məşqləri.",
    features: [
      "Bütün bədən məşqləri",
      "Davamlı balans və çeviklik",
      "Maksimum nəticə üçün planlaşdırılmış proqram",
    ],
    pricing: {
      kisi: [{ duration: "Üzvlük daxilində", price: "-" }],
      qadin: [{ duration: "Üzvlük daxilində", price: "-" }],
    },
  },
  stretching: {
    title: "Stretching & Recovery",
    description: "Bərpa, rahatlama və zədələrin qarşısının alınması.",
    features: [
      "Rahatlama və gərilmə məşqləri",
      "Zədələrin qarşısının alınması",
      "Üzvlük daxilində istifadə",
    ],
    pricing: {
      kisi: [{ duration: "Üzvlük daxilində", price: "-" }],
      qadin: [{ duration: "Üzvlük daxilində", price: "-" }],
    },
  },
  "qida-konsultasiya": {
    title: "Qidalanma Konsultasiyası",
    description: "Sağlam həyat üçün düzgün qida planı.",
    features: [
      "Fərdi qida planı",
      "Məşq və bədən tərkibi ilə uyğunlaşdırılmış",
      "Uzunmüddətli sağlamlıq dəstəyi",
    ],
    pricing: {
      kisi: [{ duration: "1 konsultasiya", price: "50 AZN" }],
      qadin: [{ duration: "1 konsultasiya", price: "50 AZN" }],
    },
  },
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white">
            Üzvlüyə daxildir
          </h2>

          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-neutral-400">
            {service.features.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-10">
            Üzvlük Paketləri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* KISI */}
            <PricingCard
              title="Kişilər üçün"
              icon={FaMale}
              data={service.pricing.kisi}
            />

            {/* QADIN */}
            <PricingCard
              title="Qadınlar üçün"
              icon={FaFemale}
              data={service.pricing.qadin}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded p-10 text-center">
          <FaClock className="mx-auto text-emerald-500 text-3xl" />
          <h3 className="mt-4 text-2xl font-semibold text-white">İndi başla</h3>
          <p className="mt-3 text-neutral-400">
            Qeydiyyat və əlavə məlumat üçün bizimlə əlaqə saxlayın.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold px-8 py-3 rounded transition"
          >
            Əlaqə saxla
          </a>
        </div>
      </section>
    </main>
  );
}

function PricingCard({ title, icon: Icon, data }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-8">
      <div className="flex items-center gap-3 text-white text-xl font-semibold">
        <Icon className="text-emerald-500 text-2xl" />
        {title}
      </div>

      <ul className="mt-6 space-y-4">
        {data.map((item, i) => (
          <li
            key={i}
            className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2"
          >
            <span>{item.duration}</span>
            <span className="text-white font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
