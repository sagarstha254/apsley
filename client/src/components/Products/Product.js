import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Product.module.css";
    
export const Products = () => {
   const[products, setProducts] = useState("");  

   async function fetchProducts() {
     try {
       const response = await fetch("http://localhost:8081/products");
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
      <Navbar/>
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
              <img src={`http://localhost:8081/${Product.image}`} alt={Product.name}
              ></img>
              </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};
      

export default Products

// import React, { useEffect, useState } from "react";
// import styles from "./Product.module.css";

// const Product = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   async function fetchProduct() {
//     try {
//       const response = await fetch("http://localhost:8081/products");
//       const products = await response.json();
//       setData(products);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading....</h1>
//       ) : (
//         <div className={styles.productContainer}>
//           {data.map((product) => (
//             <div className={styles.product} key={product._id}>
//               <h1>{product.name}</h1>
//               <p>{product.description}</p>
//               <p>{product.price}</p>
//               <img
//                 src={`http://localhost:8081/${product.image}`}
//                 alt={product.name}
//                 width="200px"
//               />
//               <a href={`http://localhost:8081/product/${product._id}`}>
//                 Get more info
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Product;
