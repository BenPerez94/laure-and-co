import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white p-4 pt-24 pb-24 bg-[url('/pic-two.jpg')] bg-cover bg-center flex justify-center items-center relative">
      <div className="relative w-[250px] h-[250px] bg-[#fafafa] rounded-full overflow-hidden p-10 flex items-center justify-center -mb-32 z-10 shadow-lg">
        <div className="relative w-full h-full">
          <Image src={"/logo.png"} alt="Logo" fill className="object-contain" />
        </div>
      </div>
    </header>
  );
}
