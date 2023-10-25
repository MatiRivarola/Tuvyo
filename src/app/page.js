'use client'
import { Image } from "@nextui-org/react"
import ProductCard from "./components/ProductsCard"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap md:flex-colum">
        <div className="w-screen h-screen bg-cover bg-center bg-site z-10 relative" >
          {/* Aca iria una pequeña animacion  */}
            {/* <motion.div> */}
              <Image className="z-20 absolute  md:top-[6.5rem] md:left-[3.5rem]"width={100} height={100}  alt='Vinos catalogos catalogos de vinos distruibuidora de vinos premium'src="Tuvyo.png" />
            {/* </motion.div> */}
        </div>
        <motion.div 
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{duration:1 , ease:'easeInOut'}}
        className="">
          <motion.h1 className=""><span className="text-black text-xl font-normal font-['Inter'] leading-[80px] tracking-[4px]">Vino</span><span className="text-black text-xl font-normal font-['Inter'] leading-[80px]">s</span></motion.h1>
          <ProductCard/>
        </motion.div>
      </div>
    </div>
  )
}
