import { Product } from "./product.model";

export interface  Cart{
  product: Product;
  itemCount: number;
}