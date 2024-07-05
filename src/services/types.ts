export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export type ProductsData = {
  macs: ProductType[];
  iphones: ProductType[];
  ipads: ProductType[];
  watches: ProductType[];
}