import React from "react";
// import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css";
import api_url from "../../config";


import PopUp from "../../popup/popup";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const logout = async() => {
    try {
      const response = await fetch(`${api_url}/logout`, {
        method: "delete",
        headers: { 
          "Content-Type": "application/json",
         },
      });
      const data = await response.json();
    if (response.ok) localStorage.removeItem("token");
    if (response.ok) alert("logged Out");

  }
  catch (error) {
    console.error(error);
  }
}
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css
"
      />
      <nav className={styles.navbar}>
        <div className={styles.image}>
          <img src="Images/logo.png" alt="Apsley Arms Hotel" />
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>

            <li>
              <Link to="/#recipe">Recipe</Link>
            </li>

            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/accommodation">Accommodation</Link>
            </li>
          </ul>
        </div>

        <div className={styles["contact-info"]}>
          <FaPhone />
          98104903834
        </div>

        <div className={styles["corner-menu"]}>
          <Link to="/registration">
            <FaUser />
          </Link>
          <div className={styles["button"]}>
            <button onClickCapture={logout}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </nav>
      <PopUp />
    </>
  );
};

export default Navbar;
