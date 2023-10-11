import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Product.module.css";
import api_url from "../../config";
import Footer from "../Footer/Footer";

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
      <h1 className={styles.head}>Available Products</h1>
      {products
        ? products.map((Product) => (
            <div className={styles.main} key={Product._id}>
              <div className={styles.inner}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>{Product.name}</h1>
                  <h2 className={styles.h2}>{Product.price}</h2>
                </div>
                <div className={styles.innermain}>
                  <div className={styles.desc}>
                    <p>
                      <b>Description: </b>
                      {Product.description}
                    </p>

                    <div className={styles.book}>
                      <button className={styles.button}>
                        Call to Order
                      </button>
                    </div>
                  </div>
                  <div className={styles.photo}>
                    <img
                      src={`${api_url}/images/products/${Product.image}`}
                      alt={Product.name}
                      height={90}
                      width={90}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "loading"}
      <Footer />
    </div>
  );
};

export default Products;
