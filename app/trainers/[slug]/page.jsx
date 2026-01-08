import {
  FaDumbbell,
  FaCertificate,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const trainersData = {
  "elvin-memmedov": {
    name: "Elvin Məmmədov",
    role: "Baş məşqçi / Strength",
    experience: "8 il təcrübə",
    shortBio:
      "Güc məşqləri və bədən quruluşu üzrə ixtisaslaşmış peşəkar məşqçi.",
    bio: `
      Elvin Məmmədov uzun illərdir fitness sahəsində fəaliyyət göstərir.
      Onun əsas məqsədi üzvlərə yalnız fiziki güc deyil, intizamlı həyat tərzi qazandırmaqdır.
    `,
    specialties: [
      "Güc və kütlə artırma proqramları",
      "Fərdi məşq planları",
      "Bədən kompozisiyasının yaxşılaşdırılması",
      "Zədəsiz və təhlükəsiz məşq",
    ],
    certifications: [
      "IFBB Certified Trainer",
      "Strength & Conditioning Specialist",
    ],
    services: [
      "Fitness Zalı Üzvlüyü",
      "Fərdi Məşq Proqramları",
      "Güc (Strength) Zonası",
    ],
  },

  "aysel-huseynova": {
    name: "Aysel Hüseynova",
    role: "Fitness & Cardio məşqçisi",
    experience: "6 il təcrübə",
    shortBio:
      "Cardio və yağ yandırma proqramları üzrə ixtisaslaşmış fitness məşqçisi.",
    bio: `
      Aysel xanım qadınlar üçün effektiv və balanslı fitness proqramları hazırlayır.
      Onun məşqləri həm sağlamlıq, həm də forma üçün idealdır.
    `,
    specialties: [
      "Cardio proqramları",
      "Yağ yandırma",
      "Qrup məşqləri",
      "Stretching & Recovery",
    ],
    certifications: ["Group Fitness Instructor", "Cardio Training Certificate"],
    services: [
      "Fitness Zalı Üzvlüyü",
      "Qrup Məşqləri",
      "Stretching & Recovery",
    ],
  },
};

export default async function TrainerDetailPage({ params }) {
  const { slug } = await params;
  const trainer = trainersData[slug];

  if (!trainer) {
    return (
      <main className="pt-32 text-center bg-neutral-950 text-neutral-400">
        Məşqçi tapılmadı
      </main>
    );
  }

  return (
    <main className="bg-neutral-950 text-neutral-100 pb-24">
      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center text-neutral-600">
            Trainer Photo
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {trainer.name}
            </h1>
            <p className="mt-2 text-emerald-500">{trainer.role}</p>

            <div className="mt-4 flex items-center gap-3 text-neutral-400">
              <FaClock className="text-emerald-500" />
              {trainer.experience}
            </div>

            <p className="mt-6 text-lg text-neutral-400">{trainer.shortBio}</p>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white">Məşqçi haqqında</h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">{trainer.bio}</p>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6">
            İxtisas sahələri
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-neutral-400">
            {trainer.specialties.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Sertifikatlar
          </h2>

          <ul className="space-y-3 text-neutral-400">
            {trainer.certifications.map((cert, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCertificate className="text-emerald-500" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Bu məşqçi ilə mövcud xidmətlər
          </h2>

          <ul className="space-y-3 text-neutral-400">
            {trainer.services.map((service, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaDumbbell className="text-emerald-500" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded p-10 text-center">
          <h3 className="text-2xl font-semibold text-white">
            Bu məşqçi ilə məşqə başla
          </h3>
          <p className="mt-3 text-neutral-400">
            Qeydiyyat və uyğun proqram üçün bizimlə əlaqə saxla.
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
