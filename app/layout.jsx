import "./globals.css";
import ToastProvider from "@/components/ui/ToastProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FitZone",
  description: "Modern fitness center in Baku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
          {/* GLOBAL TOASTS */}
        <ToastProvider />
      </body>
    </html>
  );
}
