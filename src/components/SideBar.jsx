import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helpers/helper";
import { categories } from "../constants/list";

import styles from "./SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div>
      <div className={styles.sidebar}>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map((item) => (
            <li
              key={item.id}
              className={
                item.type.toLocaleLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {item.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
