import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Product.module.css";
import api_url from "../../config";

export const Products = () => {
  const [products, setProducts] = useState("");

  async function fetchProducts() {
    try {
      const response = await fetch(`${api_url}/products`);
      const responseData = await response.json();
      console.log(responseData);
      setProducts(responseData.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Available Products</h1>
      {products
        ? products.map((Product) => (
            <div className={styles.reservation} key={Product._id}>
              <div className={styles.reserve}>
                <div className={styles.text}>
                  <h1>{Product.name}</h1>
                  <p>{Product.description}</p>
                  <h2>{Product.price}</h2>
                </div>
                <div className={styles.image}>
                  <img
                    src={`${api_url}/images/products/${Product.image}`}
                    alt={Product.name}
                    height={90}
                    width={90}
                  ></img>
                </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default Products;
