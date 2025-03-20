'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TextoAnimado() {
  const textos = ["ID VISUAL", "LANDING PAGE", "ROTEIROS", "NOVO TEXTO"];

  return (
    <div className="flex flex-col items-center space-y-16  w-full px-8 pt-32 overflow-x-hidden cursor-crosshair bg-black">
      {textos.map((texto, index) => {
        const isRight = index % 2 === 0;
        const isReverse = index % 2 !== 0; // Linhas pares (2 e 4) começam da direita
        const textControls = useAnimation();
        const lineControls = useAnimation();
        const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

        useEffect(() => {
          if (inView) {
            textControls.start({
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: 'easeInOut' },
            });
            lineControls.start({
              scaleX: 1,
              transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 },
            });
          }
        }, [inView, textControls, lineControls]);

        return (
          <div ref={ref} key={index} className="relative w-full tracking-[8px]">
            <motion.h2
              initial={{ x: isRight ? 100 : -100, opacity: 0 }}
              animate={textControls}
              className={`md:text-8xl text-4xl lexend-regular text-white ${isRight ? 'text-left' : 'text-right'}    cursor-default`}
            >
              {texto}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineControls}
              className="w-full h-1 bg-white mt-2"
              style={{ transformOrigin: isReverse ? 'right' : 'left' }}
            />
          </div>
        );
      })}
    </div>
  );
}
