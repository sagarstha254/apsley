import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.css";
import AdminNavBar from "./AdminNavBar";
import api_url from "../../config";

export default function AdminProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setfile] = useState();
  const [message, setMessage] = useState("");
  const [productList, setProductList] = useState([]);
  const [imageName, setImageName] = useState("");

  //Insert a product
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("productImage", file);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${api_url}/admin/product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);
      // Update the productList state with the newly added product
      setProductList((prevProductList) => [...prevProductList, formData]);
    } catch (error) {
      console.error(error);
    }
  }

  //Update a product
  async function update(id) {
    const formData = new FormData();
    formData.append("productId", { id });
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("productImage", file);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${api_url}/admin/product/${id}`, {
        method: "PUT",
        headers: {
          AuthorizatIon: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
      // Update the productList state with the updated product
      setProductList((prevProductList) =>
        prevProductList.map((product) =>
          product._id === id ? { ...product, ...formData } : product
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
  //Delete a product
  async function remove(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${api_url}/admin/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "applicaton/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
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
        const response = await fetch(`${api_url}/products`, {
          method: "GET",
        });
        const data = await response.json();
        setProductList(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

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
              filename={file}
              className={styles.box}
              onChange={(e) => setfile(e.target.files[0])}
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
            {productList &&
              productList.map((i) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={`${api_url}/images/products/${i.image}`}
                          alt={i.name}
                          height={90}
                          width={90}
                        />
                      </td>
                      <td>{i.name}</td>
                      <td>{i.price}</td>
                      <td>{i.description}</td>
                      <td>
                        <a
                          onClick={() => update(i._id)}
                          className={styles.editbtn}
                        >
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
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}
