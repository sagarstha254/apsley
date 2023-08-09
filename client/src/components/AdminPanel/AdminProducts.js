import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.css";
import AdminNavBar from "./AdminNavBar";

export default function AdminProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [message, setMessage] = useState("");
  const [productList, setProductList] = useState([]);

  //Delete a product
  async function remove(id) {
    console.log(id, "delte");

    try {
      const response = await fetch(
        `http://localhost:8081/admin/product/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(data);
      // Remove the deleted product from the productList state
      setProductList((prevProductList) =>
        prevProductList.filter((product) => product._id !== id)
      );
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  //Fetch all products
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:8081/products", {
          method: "GET",
        });

        const data = await response.json();
        setProductList(data.products);
        console.log(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  //Insert a product
  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: name,
      description: description,
      price: price,
      image: image,
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8081/admin/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <AdminNavBar />

      <div className={styles.cointainer}>
        <div className={styles.adminproduct}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h3>add new products</h3>
            <h3>{message}</h3>

            <input
              type="text"
              placeholder="Enter your product name"
              name="name"
              className={styles.box}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Enter your product price"
              name="price"
              className={styles.box}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Enter your product description"
              name="description"
              className={styles.box}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <input
              type="file"
              accept="image/png,image/jpg,image/jpeg"
              name="image"
              className={styles.box}
              onChange={(e) => setimage(e.target.value)}
            ></input>
            <input
              type="submit"
              className={styles.btn}
              name="add_products"
              value="Add product"
            ></input>
          </form>
        </div>

        <div className={styles.productdisplay}>
          <table className={styles.productdisplaytable}>
            <thead>
              <tr>
                <td>Product image</td>
                <td>Product Name</td>
                <td>Product Price</td>
                <td>Description</td>
                <td colSpan="2">Action</td>
              </tr>
            </thead>
            {console.log(productList)}
            {productList &&
              productList.map((i) => {
                return (
                  <tr>
                    <td>
                      <img src={i.image} />
                    </td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.description}</td>
                    <td>
                      <a className={styles.editbtn}>
                        <i className={styles.edit}></i> Edit
                      </a>
                      <a
                        onClick={() => remove(i._id)}
                        className={styles.delbtn}
                      >
                        <i className={styles.delete}></i> Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}
