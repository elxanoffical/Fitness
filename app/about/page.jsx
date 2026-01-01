import Image from "next/image";

export const metadata = {
  title: "Haqqımızda – Karabakh Fitness",
  description:
    "Karabakh Fitness — sağlam həyat tərzi, peşəkar məşqçilər və modern fitness mühiti.",
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* HERO INTRO */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Sağlam bədən <br />
              <span className="text-emerald-500"> güclü xarakterdir</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-400 max-w-xl">
              Karabakh Fitness — Bakı şəhərində fəaliyyət göstərən modern
              fitness mərkəzi olaraq, sağlam həyat tərzini hər kəs üçün əlçatan
              edir.
            </p>
          </div>

          {/* Visual placeholder */}
          <div className=" aspect-[4/3] overflow-hidden rounded border border-neutral-800">
            <Image
              src="/gallery/about-1.webp"
              alt="Karabakh Fitness gym"
              className="object-cover w-full h-full"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["500+", "Aktiv üzv"],
            ["10+", "Professional məşqçi"],
            ["100+", "Müasir avadanlıq"],
            ["06:30–00:00", "İş saatları"],
          ].map(([value, label], i) => (
            <div key={i}>
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-neutral-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER + VALUES */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white">
              Nə təklif edirik və necə fərqlənirik?
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Karabakh Fitness üzvlərinə yalnız məşq zalı deyil, peşəkar yanaşma
              və davamlı nəticə təqdim edir.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <InfoCard
              title="Fərdi və Qrup Məşqləri"
              text="Peşəkar məşqçilərlə məqsədinə uyğun fərdi və qrup proqramları."
            />
            <InfoCard
              title="Cardio & Güc Zonaları"
              text="Müasir trenajorlarla təchiz olunmuş cardio və strength sahələri."
            />
            <InfoCard
              title="Rahat və Təmiz Mühit"
              text="Geniş zal, locker otaqları və komfortlu məşq atmosferi."
            />

            <InfoCard
              title="Professional Yanaşma"
              text="Hər bir üzv üçün fərdi yanaşma və düzgün məşq strategiyası."
            />
            <InfoCard
              title="Modern Mühit"
              text="Təmiz, geniş və fokuslanmış məşq üçün ideal şərait."
            />
            <InfoCard
              title="Davamlı Nəticə"
              text="Qısa müddətli deyil, uzunmüddətli sağlamlıq hədəfləri."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Niyə Karabakh Fitness?
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              Bizim üçün fitness sadəcə məşq deyil. Bu, intizam, motivasiya və
              davamlı inkişaf yoludur.
            </p>

            <ul className="mt-8 space-y-6 text-neutral-400">
              <li>
                <span className="text-white font-medium">
                  Təcrübəli komanda —
                </span>{" "}
                sertifikatlı və peşəkar məşqçilər
              </li>
              <li>
                <span className="text-white font-medium">
                  Müasir avadanlıqlar —
                </span>{" "}
                təhlükəsiz və effektiv məşq üçün
              </li>
              <li>
                <span className="text-white font-medium">Dost atmosfer —</span>{" "}
                motivasiya verən mühit və rahatlıq
              </li>
              <li>
                <span className="text-white font-medium">
                  Geniş iş saatları —
                </span>{" "}
                hər kəs üçün uyğun zaman
              </li>
            </ul>
          </div>

          {/* Visual */}
           <div className=" aspect-[4/3] overflow-hidden rounded border border-neutral-800">
            <Image
              src="/gallery/about-2.webp"
              alt="Karabakh Fitness gym"
              className="object-cover w-full h-full"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white">
            Harada yerləşirik?
          </h3>
          <p className="mt-2 text-neutral-400">
            Bakı, Füzuli Əliyev küçəsi 14D — Karabakh Fitness zalının ünvanı.
            Ətraflı bax və marşrut qur.
          </p>

          {/* MAP IFRAME */}
          <div className="mt-6 w-full h-80 border border-neutral-800 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1812134693237!2d49.8922000110726!3d40.38267617132596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0035ffeb9d%3A0xcaa0511b1ff75804!2sKarabakh%20Fitness!5e0!3m2!1saz!2saz!4v1767297026480!5m2!1saz!2saz"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-8">
      <h4 className="text-xl font-medium text-white">{title}</h4>
      <p className="mt-4 text-neutral-400">{text}</p>
    </div>
  );
}
