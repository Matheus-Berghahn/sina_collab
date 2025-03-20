"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const projetos = {
  p1: { nome: "Projeto 1", imagens: ["/images/p1.jpg", "/images/p2.jpg"] },
  p2: { nome: "Projeto 2", imagens: ["/images/p2.jpg", "/images/p3.jpg"] },
  p3: { nome: "Projeto 3", imagens: ["/images/p3.jpg", "/images/p4.jpg"] },
  p4: { nome: "Projeto 4", imagens: ["/images/p4.jpg", "/images/p5.jpg"] },
  p5: { nome: "Projeto 5", imagens: ["/images/p5.jpg", "/images/p1.jpg"] },
  p6: { nome: "Projeto 6", imagens: ["/images/p6.jpg", "/images/p1.jpg"] },
};

export default function ProjetoPage() {
  const params = useParams();
  const projeto = projetos[params?.id as keyof typeof projetos];

  if (!projeto) {
    return <h1 className="text-center text-xl font-bold mt-10">Projeto não encontrado</h1>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">{projeto.nome}</h1>
      </header>

      {/* Imagens do Projeto */}
      <div className="grid grid-cols-2 gap-4 p-8">
        {projeto.imagens.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            width={1200} 
            height={800}
          />
        ))}
      </div>
    </div>
  );
}
