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

  <section className="py-24 px-4 bg-neutral-950">
  <div className="max-w-6xl mx-auto">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-white">
        Nə təklif edirik və necə fərqlənirik?
      </h2>
      <p className="mt-4 text-neutral-400 text-lg">
        Sadəcə idman zalı yox, nəticə verən sistemli yanaşma: məqsədli məşqlər, düzgün yönləndirmə və motivasiya.
      </p>
    </div>

    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <InfoCard
        title="Fərdi və Qrup Məşqləri"
        text="Sertifikatlı məşqçilərlə istəyə uyğun fərdi planlar və enerjili qrup dərsləri."
      />
      <InfoCard
        title="Cardio & Güc Zonaları"
        text="Texnoloji avadanlıqlarla təchiz edilmiş sahələrdə performansını yüksəlt."
      />
      <InfoCard
        title="Rahat və Təmiz Mühit"
        text="Havalandırılan, təmiz və komfortlu şəraitdə rahat məşq et."
      />
      <InfoCard
        title="Peşəkar Rəhbərlik"
        text="İntizamlı məşq planları ilə məqsədə çatmaq üçün dayanmadan dəstək."
      />
      <InfoCard
        title="Bütöv Fitness Təcrübəsi"
        text="Yalnız fiziki deyil, zehni sağlamlığı da gücləndirən mühit."
      />
      <InfoCard
        title="Davamlı Nəticə"
        text="Motivasiyaedici metodlarla uzunmüddətli və davamlı irəliləyiş."
      />
    </div>
  </div>
</section>

<section className="py-24 px-4 border-t border-neutral-800">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-3xl font-semibold text-white">
        Niyə Karabakh Fitness?
      </h2>
      <p className="mt-6 text-lg text-neutral-400">
        Bizimlə fərqli fitness təcrübəsi yaşayın — yalnız bədən deyil, həyat tərzi dəyişir.
      </p>

      <ul className="mt-8 space-y-6 text-neutral-400">
        <li>
          <span className="text-white font-medium">Peşəkar komanda —</span> təcrübəli və daim inkişaf edən məşqçi heyəti
        </li>
        <li>
          <span className="text-white font-medium">Yüksək standartlar —</span> müasir və təmiz mühit, ən son trenajorlar
        </li>
        <li>
          <span className="text-white font-medium">Üzvlərə dəyər —</span> hər üzvə fərdi yanaşma və daimi dəstək
        </li>
        <li>
          <span className="text-white font-medium">Əlçatan saatlar —</span> erkəndən gecəyə qədər rahat məşq imkanı
        </li>
      </ul>
    </div>

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
    <div className="bg-neutral-900 border border-neutral-800 rounded cursor-pointer p-8 transition hover:border-emerald-500 hover:bg-neutral-800">
      <h4 className="text-xl font-medium text-white">{title}</h4>
      <p className="mt-4 text-neutral-400">{text}</p>
    </div>
  );
}

