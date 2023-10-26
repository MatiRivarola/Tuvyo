'use client'
import { Image, Divider, } from "@nextui-org/react"
import ProductCard from "./components/ProductsCard"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeIn } from "./utils/variants"
import { nav } from "./components/navegacion";


export default function Home() {
  const controls = useAnimation()
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si la sección es visible, activa la animación
        if (entry.isIntersecting) {
          controls.start('show');
        } else {
          controls.start('hidden');
        }
      },
      {
        // Considera visible cuando el 30% del elemento es visible
        threshold: 0.5,
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);


  return (
    <>
    <div className="w-full bg-gradient-to-b from-yellow-900 to-rose-950">
      <div className="flex flex-wrap">
        <div className="w-screen h-screen bg-cover  bg-center bg-mobile sm:bg-site z-10 relative" >
          {/* Aca iria una pequeña animacion  */}
            {/* <motion.div> */}
              <Image className="z-0 absolute top-[106px] left-[152px] sm:top-[6.5rem] sm:left-[3.5rem]"width={100} height={100}  alt='Vinos catalogos catalogos de vinos distruibuidora de vinos premium'src="Tuvyo.png" />
              <h1 className="h1 z-10 absolute mix-blend-color-dodge "><span className="font-['Inter'] leading-[80px] tracking-[4px]">Catalogo de Tuvyo</span></h1>

            {/* </motion.div> */}
        </div>
        <Divider className="my-5 text-accent w-[75%]"/>
      </div>
    <section className="w-full" id={'vinos'}>
        <motion.div 
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate={controls}
        ref={setRef}
        exit='hidden'
        transition={{duration:1 , ease:'easeInOut'}}
        className="text-center flex flex-col al">
          <Image className="w-550 h-550"  src='Tuvyo.png'/>
          <h1 className="h1"><span className="font-['Inter'] leading-[80px] tracking-[4px]">Vinos</span></h1>
        </motion.div>
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate={controls}
        exit="hidden"
        transition={{duration:1 , ease:'easeInOut'}}
        >
          <ProductCard/>
        </motion.div>
    </section>
    </div>
    </>
  )
}
