import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import usePersist from "@/hooks/usePersist";

import { ProductItem, ShopContextType } from "./types";
import { getAllProducts } from "@/services/products";
import { useUser } from "../UserContext";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const ShopContext = createContext({} as ShopContextType);

function ShopProvider({ children }: Props) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [products, setProducts, clear, loadingProducts] = usePersist<
    ProductItem[]
  >("ShopContext", []);

  useLayoutEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    const allProducts = await getAllProducts(user.id);

    console.log(allProducts.filter((item) => item.in_cart));

    setProducts(allProducts);
    setLoading(false);
  }, []);

  const isLoading = loadingProducts || loading;

  return (
    <ShopContext.Provider value={{ products, loading: isLoading }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);

export default ShopProvider;
