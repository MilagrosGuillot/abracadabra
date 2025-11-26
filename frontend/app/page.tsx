"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";

interface Frase {
  titulo: string;
  texto: string;
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [frases, setFrases] = useState<Frase[]>([]);

  //const cambiarFrase = () => {
  //  setIndex((i) => (i + 1) % frases.length);
 // };

  useEffect(() => {
    const api = async () => {
      try {
const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
        const data = await res.json();
        setFrases(data);
      } catch (error) {
        console.error("Error al traer las frases:", error);
      }
    };
    api();
  }, []);

  return (
    <div className="min-h-screen bg-[#c9e9ff]">
      {/* -------- HEADER -------- */}
      <header className="w-full bg-[#A19FF6] px-10 py-6 flex justify-between items-center">
        <span className="text-xl cursor-pointer">☰</span>

        <nav className="flex gap-10 text-sm">
          <a>pium</a>
          <a>pium</a>
          <a>pium</a>
        </nav>

        <span className="font-bold tracking-widest">ABRACADABRA</span>

      </header>

<div className="w-3/5 mx-auto"> 
<section className="w-full bg-[#A19FF6] text-center rounded-xl h-[300px] 
  flex items-center justify-center overflow-hidden mt-10">
  <Image
    src="/wizard.jpg"
    alt="mago"
    width={400}
    height={400}
    className="h-[115%] w-[50%] object-contain"
  />
</section>

  {/* -------- DINÁMICO -------- */}
<section className="bg-white text-center py-20 shadow-lg rounded-xl">
  <p className="uppercase text-gray-500 tracking-widest text-xs">Cat</p>

  <h1 className="text-4xl font-bold text-[#1d3c3e] mt-2">
    {frases.length > 0 ? frases[index].titulo : "Cargando..."}
  </h1>

  <p className="text-gray-600 mt-5 max-w-xl mx-auto px-6 leading-relaxed">
    {frases.length > 0 ? frases[index].texto : "Cargando..."}
  </p>

  <button
    onClick={() => setIndex((prev) => (prev + 1) % frases.length)}
    className="mt-10 px-6 py-2 bg-[#ff9cab] hover:bg-[#ff8b9c] transition rounded-md text-white font-semibold"
  >
    Cambiar frase
  </button>
</section>

</div>

    </div>
  );
}
