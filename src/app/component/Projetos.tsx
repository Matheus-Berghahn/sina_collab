'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projetos = [
  { id: 'p1', nome: 'Projeto 1', imagem: '/images/p1.jpg' },
  { id: 'p2', nome: 'Projeto 2', imagem: '/images/p2.jpg' },
  { id: 'p3', nome: 'Projeto 3', imagem: '/images/p3.jpg' },
  { id: 'p4', nome: 'Projeto 4', imagem: '/images/p4.jpg' },
  { id: 'p5', nome: 'Projeto 5', imagem: '/images/p5.jpg' },
  { id: 'p6', nome: 'Projeto 6', imagem: '/images/p6.jpg' }
];

export default function Projetos() {
  const controlsWhite = useAnimation();
  const controlsAmber = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controlsWhite.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
      }).then(() => {
        controlsAmber.start({
          opacity: 1,
          top: '3.4rem',
          left: '2.6rem',
          transition: { duration: 0.5, ease: 'easeOut' }
        });
      });
    }
  }, [inView, controlsWhite, controlsAmber]);

  return (
    <div className="min-h-screen bg-black relative xl:pt-40 pt-28 lexend-regular">
      <header className="p-4 border-b h-full w-full" ref={ref}>
      <motion.h1
          initial={{ opacity: 0, top: '3rem', left: '3rem' }}
          animate={controlsAmber}
          className="text-5xl xl:text-8xl font-bold absolute lexend-bold bg-gradient-to-r from-purple-800 to-black/10 bg-clip-text text-transparent"
        >
          PROJETOS
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={controlsWhite}
          className="text-5xl xl:text-8xl text-white font-bold absolute top-[3rem] left-[3rem] lexend-bold"
        >
          PROJETOS 
        </motion.h1>
        
      </header>

      <div className="grid xl:grid-cols-2 pt-4">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </div>
  );
}

function ProjetoCard({ projeto }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.7, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ height: '100%', transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-[400px] group">
      <motion.div
        initial={{ height: '0%' }}
        animate={controls}
        className="absolute inset-0"
      >
        <Image
          src={projeto.imagem}
          alt={projeto.nome}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 group-hover:brightness-20"
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-5xl font-bold">{projeto.nome}</span>
      </div>
    </div>
  );
}
