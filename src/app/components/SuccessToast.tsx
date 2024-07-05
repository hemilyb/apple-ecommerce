import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../hooks/useCart";
import { ProductType } from "@/services/types";

type ProductProp = {
  product: ProductType;
};

export default function SuccessToast({ product }: ProductProp) {
  const { id, name, imageUrl, price, inStock } = product;
  const { addProduct } = useCart();

  const notify = () => {
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <button
        className="mt-6 w-52 m-auto justify-center transition-colors duration-300 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
        onClick={() => {
          notify()
          addProduct(product);
        }}
      >
        Compre agora
      </button>
    </>
  );
}
