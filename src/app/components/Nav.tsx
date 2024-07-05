"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Produtos", href: "/products" },
  { id: 3, name: "Carrinho", href: "/cart" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative">
      <div className="flex p-6 bg-white text-lg">
        <div className="flex m-auto">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={clsx("text-gray-400", {
                    "text-gray-950": pathname === link.href,
                  })}
                >
                  <p className="">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
