'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const list = [
  {
    title:'Ricardo Santos Malbec',
    price:'$3500',
    img:'/vino-ricardosantos.PNG',
  },
  {
    title:'Ricardo Santos El gran Malbec',
    price:'$10000',
    img:'/vino-ricardosantos.PNG',
  },
  {
    title:'Ricardo Santos Cabernet Sauvignon',
    price:'$3500',
    img:'/ricardosantos-cabernetsauvignon.PNG',
  },
]

export default function ProductCard(){

  return(
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 px-1">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              height="210"
              alt={item.title}
              className="w-full object-cover max-h-[210px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}