import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iCommerce",
  description: "Os melhores produtos apple!",
};

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
    <div className="text-center p-10 text-2xl text-gray-400 mt-10">
      <p className="font-light">New</p>
      <h1 className="font-bold text-4xl sm:text-6xl mb-4 text-[#b3aa98]">iPhone 15 Pro</h1>
      <span className="text-[#b3aa98] text-5xl">Big and bigger</span>
      <p className="mt-4 font-light">Explore os detalhes.</p>
      <div className="flex mt-8 text-xl gap-6 justify-center">
        <button className="transition-colors duration-300 bg-[#b3aa98] text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#b3aa98]">
          <Link href={"/products/19"}>Comprar</Link>
        </button>
        <button className="transition-colors duration-300 bg-[#b3aa98] text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#b3aa98]">
        <Link href={"/products"}>Mais produtos</Link>   
        </button>
      </div>
    </div>
  
    <div className="relative w-full flex justify-center mt-12">
      <Image
        src={"/15-pro.png"}
        width={800}
        height={600}
        alt="iPhone 15 Pro"
        className="rounded-lg shadow-lg"
      />
    </div>
  </main>
  
  );
}
