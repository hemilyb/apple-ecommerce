"use client";

import SuccessToast from "@/app/components/SuccessToast";
import { ProductType } from "@/services/types";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details({ params }: any) {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/${params.id}`, {
        method: "GET",
      });
  
      if (response.ok) {
        const { product } = await response.json(); //converte a response
        if (product) {
          setProduct(product);
        }
      }
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // Define loading como false após a tentativa de fetch
    }
  };
  
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="h-screen bg-white gap-10">
    {loading ? (
        <div className="text-center py-4">Carregando...</div>
      ) : product ? (
      <div className="lg:flex sm:justify-center items-center bg-white">
        <div className="p-6 sm:text-xl bg-white">
          <h1 className="text-3xl">{product.name}</h1>
          <p className="mt-2 text-blue-600">R$ {product.price}</p>
          <p className="my-3 sm:w-[700px] lg:w-[600px]">{product.description}</p>
          <hr />
          <p className="mt-4">Em estoque: {product.inStock}</p>
         <SuccessToast product={product}/>
        </div>
        <img src={product.imageUrl} alt={product.name} className="justify-center m-auto lg:m-0  w-[600px] sm:h-[500px]" />
        </div>
    ) :
   notFound()
  }
  </div>
  );
}
