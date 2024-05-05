import api from "@/config/api";
import { Product, ShoppingItemType } from "./types";

export const getAllProducts = async (userId: string) => {
  const responses = await Promise.all([
    api.get<Product[]>("/products"),
    api.get<ShoppingItemType[]>("/shopping"),
  ]);
  const products = responses[0].data;
  const shoppingItems = responses[1].data;

  return products.map((product) => {
    const hasInCart = shoppingItems.find(
      (item) => item.product_id == product.id && item.user_id == userId
    )
      ? true
      : false;

    return {
      ...product,
      in_cart: hasInCart,
    };
  });
};
