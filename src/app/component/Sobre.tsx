"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img_sobre from "../../../public/images/img_sobre.png";
import img_matheus from "../../../public/images/matheus.jpg";
import img_ana from "../../../public/images/ana.jpg";

export default function Sobre() {
  const textControls = useAnimation();
  const lineControls = useAnimation();
  const imageControls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      textControls.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } });
      lineControls.start({ scaleX: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } });
      imageControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } });
    }
  }, [inView, textControls, lineControls, imageControls]);

  return (
    <div ref={ref} className="w-full flex flex-col md:flex-row items-start py-20 md:py-60 px-4 md:px-8">
      {/* Lado Esquerdo - Imagem */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={img_sobre}
          alt="Sobre a empresa"
          width={700}
          height={700}
          className="rounded-lg shadow-lg object-cover w-full md:w-auto"
        />
      </div>

      {/* Lado Direito - Texto */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start text-white px-4 md:px-6 mt-10 md:mt-0 pt-10">
        <motion.h2 initial={{ x: -100, opacity: 0 }} animate={textControls} className="text-lg md:text-xl tracking-wide lexend-regular">
          SOBRE
        </motion.h2>
        <motion.div initial={{ scaleX: 0 }} animate={lineControls} className="w-20 h-1 bg-white mt-2" style={{ transformOrigin: "left" }} />

        {/* Texto abaixo */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={textControls} className="flex flex-col md:flex-row gap-6 mt-6">
          <p className="text-base md:text-lg leading-relaxed md:w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nec magna eu tincidunt. Integer sagittis libero eget justo consequat.
          </p>
          <p className="text-base md:text-lg leading-relaxed md:w-2/5">
            Suspendisse potenti. Phasellus at ex a massa auctor fringilla nec sit amet libero. Vestibulum ante ipsum primis in faucibus.
          </p>
        </motion.div>

        {/* Fotos abaixo do texto */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={imageControls} className="flex flex-col gap-8 mt-10 pt-10 md:pt-20 justify-center w-full">
          {/* Matheus */}
          <div className="flex flex-col  md:flex-row gap-6 md:gap-10 items-center ">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image src={img_matheus} alt="Matheus Berghahn" width={100} height={100} className="rounded-full shadow-lg shadow-purple-950/75 border-2 border-white w-24 md:w-28" />
            </motion.div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg text-gray-300">Matheus Berghahn</span>
              <span className="text-sm text-gray-600">Desenvolvedor • Designer</span>
            </div>
          </div>

          {/* Ana */}
          <div className="flex flex-col md:flex-row  gap-6 md:gap-10 items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image src={img_ana} alt="Ana Kayser" width={100} height={100} className="rounded-full shadow-lg shadow-purple-950/75 border-2 border-white w-24 md:w-28" />
            </motion.div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg text-gray-300">Ana Kayser</span>
              <span className="text-sm text-gray-600">Designer • Copywriter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
