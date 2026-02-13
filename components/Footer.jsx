import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-4">
        {/* Logo & About */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-white">
            Fit<span className="text-emerald-500">Zone</span>
          </h3>
          <p className="mt-4 text-neutral-400 max-w-md">
            Sağlam həyat tərzi, peşəkar məşqçilər və müasir avadanlıqlarla
            məqsədlərinə çatmağın ən doğru ünvanı.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-medium text-white mb-4">Keçidlər</h4>
          <ul className="space-y-3 text-neutral-400">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition">
                Ana səhifə
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-emerald-400 transition"
              >
                Xidmətlər
              </Link>
            </li>
            <li>
              <Link
                href="/trainers"
                className="hover:text-emerald-400 transition"
              >
                Məşqçilər
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-emerald-400 transition"
              >
                Qalereya
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-emerald-400 transition"
              >
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-medium text-white mb-4">Əlaqə</h4>
          <ul className="space-y-3 text-neutral-400">
            <li>Bakı, 65-123 Xaqani Küçəsi</li>
            <li>+994 XX XXX XX XX</li>
            <li>06:30 – 24:00</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} FitZone. Bütün hüquqlar qorunur.
          </p>

          <p className="text-sm text-neutral-500">
            Developed by <span className="text-emerald-500">Your Name</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
