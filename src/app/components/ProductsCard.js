'use client'

export default function ProductCard(){

  return(
    <>
    <div className="flex  w-1/2 min-h-[263px]">
      <div className="w-1/2 h-[280px] justify-center flex flex-wrap  bg-stone-400 rounded-[10px]">
        <img className="w-full max-h-[148px] m-auto" src="Tuvyos.png" />
        <div className="min-h-[115px]">
            <h1 className="text-black text-[13px] font-normal font-['Inter'] leading-[17px] tracking-[2.60px]">Ricardo Santos</h1>
            <h2 className="w-[134px] h-[41px]  text-black text-[10px] font-normal font-['Inter'] leading-3">Malbec, Con un gran aroma y calidad en cada sorbo</h2>
            <div className="w-[68px] h-[17px] ">
                <div className="w-[68px] h-[17px]   bg-rose-950 rounded-[30px]">
                  <button className="w-[39.71px] h-2 text-stone-400 text-[10px] font-normal font-['Inter'] leading-3">Ver mas</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}