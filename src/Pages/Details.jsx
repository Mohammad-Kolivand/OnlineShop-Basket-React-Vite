import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";

import { IoMdPricetags } from "react-icons/io"; //tag
import { SiOpenproject } from "react-icons/si"; //category
import { IoArrowBackCircleSharp } from "react-icons/io5"; //arrow

import styles from "./Details.module.css";

function Details() {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);

  if (!productDetails) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price }>
            <IoMdPricetags />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <IoArrowBackCircleSharp />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
