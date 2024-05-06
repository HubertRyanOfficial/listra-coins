import api from "@/config/api";
import { Product } from "../products/types";

export const addToCart = async (product: Product, userId: string) => {
  const date = new Date();
  const response = await api.post("/shopping", {
    product_id: product.id,
    user_id: userId,
    quantity: 1,
    total_paid: product.price,
    created_at: date.valueOf(),
  });

  return response.data;
};
