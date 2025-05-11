import { Spinner } from "@heroui/react";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner  label="loading" color="danger" />
    </div>
  );
}

export default Loader;
