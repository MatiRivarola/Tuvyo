'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { FaWhatsapp }from 'react-icons/fa'
import { Link } from "@nextui-org/react";
import { list } from "./List-of-products";
import { getProducts } from "../server/firebase/function";

export default function ProductCard(){
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products , setProducts] = React.useState([])
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const productList = await getProducts();
      setProducts(productList);
    }
    try {
      fetchProducts();
    } catch (error) {
      console.log(error);
    };
  }, []);
  
  
  const openModal = (product) => {
    setSelectedProduct(product)
  }
  const closeModal = () => {
    setSelectedProduct(null)
  }
  return(
    <>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 px-1">
      {products?.map((item) => (
        <>
          <Card shadow="sm" key={item.id} isPressable onPress={()=>openModal(item)}>
            <CardBody className="overflow-visible">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height={210}
                alt={item.description}
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
                  <h1>{item.description}</h1>
                
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  
                    <Button href={`https://wa.me/+5491127996521?text=Hola,%20estoy%20interesado%20en%20${item.title}`}
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                    anchorIcon={<FaWhatsapp className='text-2xl cursor-pointer hover:text-[#4ade80]'/>}
                    >
                      Contactanos                    
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