import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooted Life Foundation | Sickle Cell Awareness & Support",
  description:
    "Advancing health equity for sickle cell warriors through education, support, advocacy, and environmental action.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-body text-text antialiased">
        <Preloader />
        <Navbar />
        <main className="flex-1 bg-brand-950">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
