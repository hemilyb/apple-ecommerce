import products from "../../../database.json"
import { ProductsData } from "@/services/types"

const typedProducts: ProductsData = products as ProductsData;
//Converte os dados importados para o tipo ProductsData.

export async function GET() {
  return new Response(JSON.stringify(typedProducts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}