import { Product } from "@/services/products/types";

export type ProductItem = Product & {
  in_cart: boolean;
};

export interface ShopContextValues {
  products: ProductItem[];
  loading: boolean;
}

export type ShopContextType = ShopContextValues;
