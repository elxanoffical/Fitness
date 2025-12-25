import Link from "next/link";

export default function Services() {
  const plans = [
    {
      name: "Basic",
      price: "60 AZN",
      period: "aylıq",
      features: [
        "Fitness zalına giriş",
        "Qrup məşqləri",
        "Locker və duş",
      ],
    },
    {
      name: "Standard",
      price: "90 AZN",
      period: "aylıq",
      highlight: true,
      features: [
        "Fitness + Cardio",
        "Qrup məşqləri",
        "1 fərdi məşq",
        "Locker və duş",
      ],
    },
    {
      name: "Premium",
      price: "140 AZN",
      period: "aylıq",
      features: [
        "Limitsiz giriş",
        "Fərdi məşqçi",
        "Qidalanma məsləhəti",
        "Spa / Sauna",
      ],
    },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">
            Xidmətlər və Qiymətlər
          </h2>
          <p className="mt-4 text-neutral-400">
            Öz məqsədinə uyğun paketi seç və sağlam həyatına bu gün başla.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded border p-8 flex flex-col
                ${
                  plan.highlight
                    ? "border-emerald-500 bg-neutral-900"
                    : "border-neutral-800 bg-neutral-900"
                }`}
            >
              <h3 className="text-xl font-medium text-white">
                {plan.name}
              </h3>

              <div className="mt-4">
                <span className="text-3xl font-semibold text-white">
                  {plan.price}
                </span>
                <span className="text-neutral-400"> / {plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-neutral-400 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 text-center py-3 rounded transition
                  ${
                    plan.highlight
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "border border-neutral-700 hover:border-emerald-500 text-neutral-200"
                  }`}
              >
                Seç
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
