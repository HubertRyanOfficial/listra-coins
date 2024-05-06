import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
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
  const [loading, setLoading] = useState(true);
  const [products, setProducts, clear, loadingProducts] = usePersist<
    ProductItem[]
  >("ShopContext", []);

  useLayoutEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = useCallback(async () => {
    if (products.length > 0) setLoading(false);

    const allProducts = await getAllProducts(user.id);
    setProducts(allProducts);
    setLoading(false);
  }, [products]);

  const isLoading = useMemo(
    () => loadingProducts && loading,
    [loadingProducts, loading]
  );

  return (
    <ShopContext.Provider value={{ products, loading: isLoading }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);

export default ShopProvider;
