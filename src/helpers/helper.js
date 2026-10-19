const shortenText = (text) => {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  return words.length > 8 ? `${words.slice(0, 8).join(" ")}…` : words.join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
};

const filterProducts = (products, category) => {
  if (!category) return products;

  return products.filter((product) => product.category === category);
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const updatedQuery = { ...currentQuery };
    delete updatedQuery.category;
    return updatedQuery;
  }

  if (newQuery.search === "") {
    const updatedQuery = { ...currentQuery };
    delete updatedQuery.search;
    return updatedQuery;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );

  const total = products
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};

const productQuantity = (state, id) => {
  const item = state.selectedItems.find((product) => product.id === id);
  return item ? item.quantity : 0;
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
