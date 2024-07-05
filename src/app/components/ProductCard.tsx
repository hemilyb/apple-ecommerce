import { ProductType } from "@/services/types";
import Link from "next/link";
import { FiArrowRight, FiBox } from "react-icons/fi";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  
  const { id, name, imageUrl, price, inStock } = product;

  return (
    <>
    <div className="bg-white shadow-md rounded-lg mb-10 hover:scale-101 hover:shadow-lg hover:transition-all duration-300 ease-in-out h-[29rem] lg:w-72 p-4">
        <h1 className="text-lg font-bold p-4">{name}</h1>
        <img
          src={imageUrl}
          alt={name}
          className="w-60 h-52 object-cover m-auto"
        />
        <div className="p-4">
          <p className="text-gray-700 font-bold">{price}</p>
          <p className="flex justify-end items-center text-gray-400 gap-1">
            {inStock}
            <FiBox/>
          </p>
        </div>
          <Link href={`/products/${id}`}
          className="flex text-blue-600 items-center justify-center gap-2 mt-10"
          >Ver detalhes
          <FiArrowRight/>
          </Link>
      </div>
    </>
  );
}
