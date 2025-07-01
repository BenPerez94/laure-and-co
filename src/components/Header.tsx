/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="relative text-white p-4 pt-24 bg-[url('/pic-two.jpg')] bg-cover bg-center flex justify-center items-center">
        {/* Bandeau superposé */}
        <div className="absolute top-0 left-0 z-10 w-full shadow-lg bg-white/30 backdrop-blur-md">
          <div className="container flex flex-row items-center justify-between px-6 py-2 mx-auto">
            <div className="flex flex-col md:gap-6 md:flex-row">
              <Link
                href="tel:0642125425"
                className="flex items-center w-auto h-auto p-0 m-0 mr-12 text-base font-light text-center border-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Phone size={16} strokeWidth={2.25} className="mr-4" /> 06 42 12
                54 25
              </Link>
              <Link
                href="mailto:laureandcoo@gmail.com"
                className="flex items-center w-auto h-auto p-0 m-0 mr-12 text-base font-light text-center border-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Mail size={16} strokeWidth={2.25} className="mr-4" />
                Laureandcoo@gmail.com
              </Link>
            </div>
            <div className="items-center hidden gap-6 md:flex">
              <Link
                href="https://www.facebook.com/profile.php?id=61557375502913&locale=fr_FR"
                className="w-auto h-auto p-0 m-0 border-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com/laure_and.co?fbclid=IwY2xjawKuTdRleHRuA2FlbQIxMABicmlkETFvREMwSkIxemxFTUluOVRLAR72HHfFrk8gxWrkUg_x5j5h7S0gQVpmKDCtTRY3qrFmjGpqr1uTFx1zhaQJzg_aem_6sDIEj0-TtC1mlj8Gkpahw"
                className="w-auto h-auto p-0 m-0 border-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="instagram icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Logo centré */}
        <div className="relative w-[250px] h-[250px] md:-mb-24 -mb-12 bg-[#fafafa] rounded-full overflow-hidden p-10 flex items-center justify-center z-0 shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={"/logo.png"}
              alt="Logo"
              fill
              sizes="(max-width: 768px) 180px, 250px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bouton burger mobile */}
      <button
        className="absolute z-30 flex flex-col items-center justify-center top-4 right-4 md:hidden"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          // Croix
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 18L18 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Burger
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Menu de navigation */}
      <nav
        className={`
          flex-col items-center justify-center bg-white shadow-lg md:flex md:flex-row mt-1
          ${
            menuOpen
              ? "flex fixed top-0 left-0 w-full h-full z-20 bg-white/95 pt-32 gap-8"
              : "hidden"
          }
          md:static md:w-auto md:h-auto md:bg-white md:pt-0 md:gap-0
        `}
        onClick={() => setMenuOpen(false)}
      >
        <Link
          href="#about"
          className="px-4 py-2 text-lg font-light md:text-base"
        >
          Qui sommes-nous ?
        </Link>
        <Link
          href="#seance"
          className="px-4 py-2 text-lg font-light md:text-base"
        >
          Acceuillir une séance
        </Link>
        <div className="hidden w-64 md:block"></div>
        <Link
          href="#aaa"
          className="px-4 py-2 text-lg font-light md:w-52 md:text-base"
        >
          Médiation animale
        </Link>
        <Link
          href="#tarifs"
          className="px-4 py-2 text-lg font-light md:w-24 md:text-base"
        >
          Tarif
        </Link>
        <Link
          href="#info-sup"
          className="px-4 py-2 text-lg font-light md:w-32 md:text-base"
        >
          Plus d'infos
        </Link>
      </nav>
    </header>
  );
}
