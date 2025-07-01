import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fredoka",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laure & Co",
  description: "Médiation animale, bien-être et accompagnement par l’animal.",
  openGraph: {
    title: "Laure & Co",
    description: "Médiation animale, bien-être et accompagnement par l’animal.",
    url: "https://laureandco.fr",
    siteName: "Laure & Co",
    images: [
      {
        url: "https://laureandco.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laure & Co - Médiation animale",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laure & Co",
    description: "Médiation animale, bien-être et accompagnement par l’animal.",
    images: ["https://laureandco.fr/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased bg-[#fafafa]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
