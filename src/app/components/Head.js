'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { nav } from "./navegacion";

export default function HeaderPage() {
  return (
    <Navbar className="bg-accent bg-opacity-50 absolute" shouldHideOnScroll>
      <NavbarContent className="sm:flex gap-4 " justify="start">
          {
            nav.map((link , index)=>{
              return(
                  <NavbarItem className="gap-y-4">
                    <Link color="foreground" key={index} href={`#${link.id}`} className="text-secondary">
                      {link.name}
                    </Link>
                  </NavbarItem>
              )
            })
          }
        </NavbarContent>
      <NavbarBrand justify='center' className='sm:flex gap-x-2 flex-end'>
        <Image
        src='/Tuvyo.png'
        alt='Vinos vinos catalogo tuvyo'
        width={48}
        height={48}
        className='px-2'
        />
        <p className="font-bold text-inherit text-secondary">Tuvyo</p>
      </NavbarBrand>
      
    </Navbar>
  );
}