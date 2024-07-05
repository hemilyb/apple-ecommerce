import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center mt-20 text-xl">
      <h2 className="text-2xl font-semibold">404</h2>
      <p>Página não encontrada.</p>
      <Link
        href="/products"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Voltar
      </Link>
    </main>
  );
}
