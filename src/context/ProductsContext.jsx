import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext(null);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchProducts = async () => {
      try {
        const data = await api.get("/products");

        if (active) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (requestError) {
        if (active) {
          setError(requestError.message || "Failed to load products.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within ProductsProvider");
  }

  return context.products;
};

const useProductStatus = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductStatus must be used within ProductsProvider");
  }

  return {
    loading: context.loading,
    error: context.error,
  };
};

const useProductDetails = (id) => {
  const products = useProduct();
  return products.find((product) => product.id === id);
};

export default ProductsProvider;
export { useProduct, useProductDetails, useProductStatus };
