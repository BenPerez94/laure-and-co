/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between gap-2 p-2 text-center text-white shadow-lg bg-neutral-800">
        <div className="container flex flex-row items-center justify-between mx-auto">
          <div className="flex gap-6">
            <div className="text-center">06 42 12 54 25</div>
            <div className="text-right">Laureandcoo@gmail.com</div>
          </div>
          <div className="flex gap-6">
            <div className="text-right">facebook</div>
            <div className="text-right">instagram</div>
          </div>
        </div>
      </div>
      <div className="text-white p-4 pt-24 pb-24 bg-[url('/pic-two.jpg')] bg-cover bg-center flex justify-center items-center relative">
        <div className="relative w-[250px] h-[250px] bg-[#fafafa] rounded-full overflow-hidden p-10 flex items-center justify-center -mb-46 z-10 shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={"/logo.png"}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white shadow-lg">
        <Link href="#">Qui sommes-nous ?</Link>
        <Link href="#">Acceuillir une séance</Link>
        <div className="w-68"></div>
        <Link href="#" className="w-36">
          L'AAA et la TAA
        </Link>
        <Link href="#" className="w-32">
          Tarif
        </Link>
        <Link href="#" className="w-32">
          Plus d'infos
        </Link>
      </div>
    </header>
  );
}
