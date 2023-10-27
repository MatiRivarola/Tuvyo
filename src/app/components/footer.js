'use client'
import React from 'react'
import { FaWhatsapp , FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6"


export default function FooterPage(){

  return (
    <>
    <footer className='bg-gradient-to-b from-[#440a0a] to-neutral-950 h-1/2 w-full md:flex-row flex flex-col justify-around items-start p-20'>
      <div className='pb-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>
            Contacto <span className='text-accent'></span>
          </p>
          <div className='flex gap-6 pb-5'>
            <FaWhatsapp className='text-2xl cursor-pointer hover:text-[#4ade80]'/>
            <FaInstagram className='text-2xl cursor-pointer hover:text-[#df4223]'/>
            <FaMeta className='text-2xl cursor-pointer hover:text-[#2563eb]'/>

          </div>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Productos</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Categorias</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Mas solicitados</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Opciones de pago</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Stock</li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>
            Empresa
          </p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Acerca de nosotros</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Productos</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Precios</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Contactanos</li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>
            Soporte
          </p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Contacto</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-accent cursor-pointer'>Privacidad</li>
        </ul>

      </div>
    </footer>
    <div className='flex flex-col justify-center items-center text-center pb-5 bg-neutral-950'>
      <h1 className='text-primary font-semibold'>2023-2024 All rights reserved | Powered by <span className='hover:text-accent cursor-pointer font-semibold  '>Desarrollo Pampa</span></h1>
    </div>
    </>
  )
}

