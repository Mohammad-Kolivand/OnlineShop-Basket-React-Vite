import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css";

import { BsCartFill } from "react-icons/bs";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Mamal's Shop</Link>
        <Link to="/basket">
          <div>
            <BsCartFill />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p> Developed by Mohammadreza with 🖤</p>
      </footer>
    </>
  );
}

export default Layout;
