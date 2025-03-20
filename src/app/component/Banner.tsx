import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from "next/image";
import logo from "../../../public/images/logo.svg"

const Banner = () => {
  useEffect(() => {
    gsap.fromTo(
      '.banner-title',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        onStart: () => {
          const text = 'CRIATIVIDADE QUE IMPULSIONA SEU NEGÓCIO';
          let i = 0;
          const titleElement = document.querySelector('.banner-title');
        
          if (!titleElement) return;
        
          const interval = setInterval(() => {
            titleElement.innerHTML += text[i];
            i++;
            if (i >= text.length) {
              clearInterval(interval);
            }
          }, 60);
        },
        
               
      }
    );

    gsap.fromTo(
      '.banner-description',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        delay: 2.3,
      }
    );

    gsap.fromTo(
      '.cta-button',
      {
        height: 0,          
        opacity: 1,          
        overflow: 'hidden',
        ease: 'power1.out',  
      },
      {
        height: 'auto',     
        opacity: 1,        
        duration: 0.7,
        delay: 2.5,            
        ease: 'power1.out',
      }
    );

  
    gsap.fromTo(
      '.bg-animation',
      { opacity: 0.7 },
      { opacity: 1, duration: 2, ease: 'power4.out' }
    );

   
    gsap.to('.bg-animation', {
      scale: 1.5,
      opacity: 1,
      duration: 10, 
      repeat: -1,   
      yoyo: true,  
      ease: 'linear',
    });

    
    gsap.to('.scroll-indicator', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden w-full flex bg-black flex-col items-center justify-center text-center text-white px-5 shadow-i lexend-regular">
      <div className="bg-animation absolute w-full h-full bg-black opacity-[0.7]"></div>

      <div className="container mx-auto px-4 flex items-center justify-center z-10 pb-28 ">
          <Image
            src={logo}
            alt="logo"
            layout="intrinsic"
            width={400} 
            height={202}
          />
        </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-4 z-10 banner-title lexend-regular"></h1>

      <div className="scroll-indicator absolute bottom-10 z-10">
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full mr-2 animate-bounce"></div>
          <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full animate-bounce"></div>
          <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full ml-2 animate-bounce"></div>
        </div>
      </div>

      <a
        href="#contato"
        className="cta-button border-2 border-white text-white font-bold  text-lg hover:bg-gray-200 hover:text-black transition z-10 h-0 mt-5 opacity-0 lexend-regular"
      >
        <p className='py-3 px-6 '>ENTRE EM CONTATO</p>
      </a>
    </div>
  );
};

export default Banner;
