"use client";

import { useCart } from "../hooks/useCart";

export default function CartTotal() {
  const { cart } = useCart();

  return (
    <div className="text-xl items-center mt-20">
      <strong>Total: </strong>
      <span className="float-right  font-semibold">
        R$ {cart.reduce((total, product) => total + product.price, 0)},00
      </span>
    </div>
  );
}
