"use client";

import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
      <main className="mt-14 m-4 sm:m-10 sm:mt-20">
        <div className="px-8 py-10 bg-white w-full 2xl:w-1/2 justify-center m-auto mb-20 rounded-lg">
          {cart.length !== 0 ? (
            <>
              <h1 className="font-bold text-3xl mb-2">Revise seu carrinho.</h1>
              <p>Entregas e devoluções gratuitas.</p>
              <CartItems />
              <CartTotal />
            </>
          ) : (
            <>
              <span className="font-bold text-3xl mb-2">Carrinho vazio.</span>
              <p>Adicione alguns produtos!</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
