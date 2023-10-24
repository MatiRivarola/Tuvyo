'use client'

import ProductCard from "./components/ProductsCard"

export default function Home() {
  return (
    <div className="container w-full h-full">
      <div className=" bg-white">
        <div className="w-[393px] h-[299px] left-0 top-0 ">
          <img className="w-[393px] h-[239px] left-0 top-[60px] " src="cenafamiliar.jpg" />
          <div className="w-[393px] h-[61px] left-0 top-0  bg-stone-500 shadow" />
      </div>
      <img className="w-[223px] h-56 left-[86px] top-[314px] " src="Tuvyo.png" />
      <div className="left-[162px] top-[538px] "><span className="text-black text-xl font-normal font-['Inter'] leading-[80px] tracking-[4px]">Vino</span><span className="text-black text-xl font-normal font-['Inter'] leading-[80px]">s</span></div>
      
      <ProductCard/>
        </div>
    </div>
  )
}
