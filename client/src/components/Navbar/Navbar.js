import React from "react";
// import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css";

import PopUp from "../../popup/popup";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };
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
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/363550311_305188518715952_7321489297040537218_n.png?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=510075&_nc_ohc=xhaIgYc1zH4AX9Gqq5w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSqL3IaBtfA60FqoSUpdsxgQcckX5GXk1Lr22k15tCUyg&oe=65001D25"
            alt="Apsley Arms Hotel"
          />
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
