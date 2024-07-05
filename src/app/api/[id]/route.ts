import { NextResponse } from "next/server";
import products from "@/../database.json"
import { ProductType } from "@/services/types"

export async function GET(request: Request, context: any) {
  const { params } = context;
  const allProducts = [
    ...products.macs,
    ...products.iphones,
    ...products.ipads,
    ...products.watches
  ];

  const product = allProducts.find((product: ProductType) => product.id.toString() === params.id);
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json({ product });
}