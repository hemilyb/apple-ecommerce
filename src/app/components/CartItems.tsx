"use client";

import { ProductType } from "@/services/types";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

type CartItemRowProps = {
  entry: CartEntry;
};

const CartItemRow = ({ entry }: CartItemRowProps) => {
  const { addProduct, removeProduct } = useCart();
  const price = Number(entry.product.price);

  return (
    <div className="sm:flex p-4 mt-10">
      <img
        src={entry.product.imageUrl}
        alt={entry.product.name}
        className="h-40 w-40 rounded justify-center m-auto sm:m-0"
      />
      <p className="sm:mt-14 sm:w-1/2 text-center font-medium text-xl mb-2">
        {entry.product.name}
      </p>
      <hr />
      <div className="mt-4 text-xl font-semibold w-ful">
        <div className="flex justify-end ">
          <p className="mb-2">R$ {price * entry.quantity},00</p>
        </div>
        <div className="flex justify-end">
          <button onClick={() => addProduct(entry.product)} className="px-2">
            +
          </button>
          <span className=" items-center m-2">{entry.quantity}</span>
          <button
            onClick={() => removeProduct(entry.product.id)}
            className="px-2"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CartItems() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );
      //para cada produto, verifica se já existe uma entrada na lista com o mesmo id

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ]; //cria uma nova entrada caso -1
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entriesList.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entriesList);
  }, [cart]);

  return (
    <div>
      {cartEntries.map((entry) => (
        <CartItemRow key={entry.product.id} entry={entry} />
      ))}
    </div>
  );
}
