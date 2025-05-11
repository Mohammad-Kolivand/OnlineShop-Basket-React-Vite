import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setQuery, setSearch }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
