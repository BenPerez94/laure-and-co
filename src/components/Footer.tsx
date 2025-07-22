import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-4 text-center text-white bg-gray-900">
      <div className="container flex flex-col items-center gap-3 mx-auto">
        {/* Bloc contact */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <Link
              href="tel:0642125425"
              className="flex items-center w-auto h-auto p-0 m-0 text-base font-light text-center border-none font-fredoka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Phone size={16} strokeWidth={2.25} className="mr-1" />
              <span>06 42 12 54 25</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="mailto:laureandcoo@gmail.com"
              className="flex items-center w-auto h-auto p-0 m-0 text-base font-light text-center border-none font-fredoka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Mail size={16} strokeWidth={2.25} className="mr-1" />
              <span>Laureandcoo@gmail.com</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61557375502913&locale=fr_FR"
              className="w-auto border-none"
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
              className="w-auto border-none"
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
        <Link
          href="/mentions"
          className="p-0 m-0 text-xs font-light border-none"
          rel="noopener noreferrer"
        >
          Mentions légales
        </Link>
        {/* Copyright et crédit */}
        <p className="m-0 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Laure & Co. Tous droits réservés. Conçu
          par{" "}
          <Link
            href="https://neblink.fr"
            className="text-xs border-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neblink
          </Link>
        </p>
      </div>
    </footer>
  );
}
