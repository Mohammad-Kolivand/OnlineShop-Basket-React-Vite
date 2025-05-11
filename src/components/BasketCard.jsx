import { shortenText } from "../helpers/helper";

import styles from "./BasketCard.module.css";

import { BsTrash2Fill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa6";


function BasketCard({ data, clickHandler }) {
  const { image, quantity, title, price } = data;
  return (
    <div className={styles.card}>
        
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>-<p>{price} $</p>
      <div className={styles.action}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <BsTrash2Fill />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
        
      </div>
    </div>
  );
}

export default BasketCard;
