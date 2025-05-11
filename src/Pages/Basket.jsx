import { FaPoo } from "react-icons/fa6";

import styles from "./Basket.module.css";

import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
import BasketSideBar from "../components/BasketSideBar";

function Basket() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <p>
          <FaPoo />
        </p>
        <p>It's Empty</p>
      </div>
    );
  }

  console.log(state);
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Basket;
