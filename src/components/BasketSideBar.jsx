import { MdTag } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";

import styles from "./BasketSideBar.module.css";

function BasketSideBar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total} $ </span>
      </div>
      <div>
        <MdTag />
        <p>Quantity :</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <GiConfirmed />
        <p>Status :</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>CheckOut</button>
    </div>
  );
}

export default BasketSideBar;
