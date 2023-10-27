'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { FaWhatsapp }from 'react-icons/fa'

const list = [
  {
    title:'Ricardo Santos Malbec',
    price:'$3500',
    img:'/vino-ricardosantos.PNG',
    descripcion:"El tono violáceo de este vino se combina con aromas terrosos y de pimienta negra, y sus suaves influencias de roble. Los sabores a frutas rojas de bosque, integrados con taninos suaves resultan en un vino de gran cuerpo, para disfrutarlo ahora y con grandes perspectivas de añejamiento.",
  },
  {
    title:'Ricardo Santos El gran Malbec',
    price:'$10000',
    img:'/ricardosantos-elgranmalbec.PNG',
    descripcion:"Tono violáceo profundo, con aromas intensos combinando las frutas rojas con el roble. En boca resalta su gran cuerpo con una untuosidad que combinado con la frescura provoca una larga permanencia. Todos estos atributos logran que este vino tenga un gran potencial de añejamiento",
  },
  {
    title:'Ricardo Santos Cabernet Sauvignon',
    price:'$3500',
    img:'/ricardosantos-cabernetsauvignon.PNG',
    descripcion:"Es un vino de color rojo rubí con gran intensidad aromática. Con aromas complejos a pimienta, casis y frutos rojos.De gran concentración en boca con taninos suaves y redondos y gran persistencia. Es un vino para disfrutar desde ahora y que por su estructura tiene asegurado un excelente añejamiento.",

  },
]

export default function ProductCard(){
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const openModal = (product) => {
    setSelectedProduct(product)
  }
  const closeModal = () => {
    setSelectedProduct(null)
  }
  return(
    <>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 px-1">
      {list.map((item, index) => (
        <>
          <Card shadow="sm" key={index} isPressable onPress={()=>openModal(item)}>
            <CardBody className="overflow-visible">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height={210}
                alt={item.title}
                className="w-full object-cover h-[210px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
          <Modal 
          backdrop="opaque" 
          isOpen={selectedProduct === item} 
          onOpenChange={closeModal}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            }
          }}
          >
          <ModalContent className="items-center">
            {(onClose) => (
              <>
                <ModalHeader  className="flex flex-col gap-1">{item.title}</ModalHeader>
                <ModalBody >
                  <Image
                  src={item.img}
                  alt={item.title}
                  />
                  <h1>{item.descripcion}</h1>
                
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Contactanos
                    <FaWhatsapp className='text-2xl cursor-pointer hover:text-[#4ade80]'/>
                  </Button>
                </ModalFooter>
              </>
            )}
            </ModalContent>
          </Modal>
        </>
      ))}
      
    </div>
    </>
  )
}