export interface Product {
  id: string;
  image: string;
  units: number;
  name: string;
  price: number;
  created_at: number;
}

export interface ShoppingItemType {
  id: string;
  user_id: string;
  product_id: string;
  units: number;
  total_paid: number;
  created_at: number;
}
