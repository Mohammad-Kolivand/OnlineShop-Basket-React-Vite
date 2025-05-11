import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";

import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./Products.module.css";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function Products() {
  const products = useProduct();
  // const products = [];

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default Products;
