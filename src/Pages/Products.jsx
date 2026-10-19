import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct, useProductStatus } from "../context/ProductsContext";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";

import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

import styles from "./Products.module.css";

function Products() {
  const products = useProduct();
  const { loading, error } = useProductStatus();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(
    () => getInitialQuery(searchParams),
    [searchParams]
  );

  const [search, setSearch] = useState(query.search || "");

  useEffect(() => {
    setSearch(query.search || "");
  }, [query.search]);

  const displayed = useMemo(() => {
    let result = searchProducts(products, query.search);
    result = filterProducts(result, query.category);
    return result;
  }, [products, query.search, query.category]);

  const updateQuery = (updater) => {
    const currentQuery = getInitialQuery(searchParams);
    const nextQuery =
      typeof updater === "function" ? updater(currentQuery) : updater;

    setSearchParams(nextQuery);
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        setQuery={updateQuery}
      />

      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}

          {!loading && error && (
            <p role="alert">Unable to load products: {error}</p>
          )}

          {!loading && !error && displayed.length === 0 && (
            <p>No products found. Try another search or category.</p>
          )}

          {!loading &&
            !error &&
            displayed.map((product) => (
              <Card key={product.id} data={product} />
            ))}
        </div>

        <SideBar query={query} setQuery={updateQuery} />
      </div>
    </>
  );
}

export default Products;
