'use client'
import { Image, Divider, } from "@nextui-org/react"
import ProductCard from "./components/ProductsCard"
import { motion, useInView } from 'framer-motion';
import {  useRef } from 'react';
import { fadeIn } from "./utils/variants"


export default function Home() {
  const ref = useRef(null);
  const controls = useInView(ref,{once:true})

  


  return (
    <>
    <div className="w-full bg-gradient-to-b from-neutral-950 from-30% to-red-950 to-90%">
      <div className="flex flex-wrap">
        <div className="w-screen h-screen bg-cover  bg-center bg-mobile sm:bg-site z-10 relative" >
          {/* Aca iria una pequeña animacion  */}
            {/* <motion.div> */}
              <Image className="z-0 absolute top-[130px] left-[150px] sm:top-[6.5rem] sm:left-[3.5rem]"width={100} height={100}  alt='Vinos catalogos catalogos de vinos distruibuidora de vinos premium'src="Tuvyo.png" />
              <h1 className="h1 z-10 absolute mix-blend-color-dodge text-[#cf8275]  top-[40px] left-[26%] sm:left-[26%] xl:left-[38%]">Catal<span className="leading-[80px] tracking-[4px]">ogo</span></h1>

            {/* </motion.div> */}
        </div>
        <Divider className="mb-5 mix-blend-hue bg-gradient-to-b from-neutral-950  to-red-950  relative -top-2 h-12 w-full"/>
      </div>
    <section className="w-full" id={'vinos'} ref={ref}>
        <motion.div 
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate={controls ? 'show' : "hidden"}
        exit='hidden'
        transition={{duration:1 , ease:'easeInOut'}}
        className="text-center flex flex-col items-center">
          <Image className="w-[200px] sm:w-550 sm:h-550"  src='Tuvyo.png'/>
          <h1 className="h1"><span className="leading-[80px] tracking-[4px]">Vinos</span></h1>
        </motion.div>
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate={controls ? 'show' : "hidden"}
        exit="hidden"
        transition={{duration:1 , ease:'easeInOut'}}
        >
          <ProductCard />
        </motion.div>
    </section>
    </div>
    </>
  )
}
