import { Route, Routes, Navigate } from "react-router-dom";

import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Basket from "./Pages/Basket";
import PageNotFound from "./Pages/404";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
     <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
   //   </ProductsProvider>
    //</CartProvider>
  );
}

export default App;
