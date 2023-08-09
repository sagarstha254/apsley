import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <img src="./Images/logo.png" alt="Apsley Arms Hotel" />
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
              <Link to="/recipe">Recipe</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/accommodation">Accommodation</Link>
            </li>
          </ul>
        </div>

        <div>
          <button className={styles["special-offer-button"]}>
            Special Offer
          </button>
        </div>
        <div className={styles["contact-info"]}>
          <FaPhone />
          98104903834
        </div>

        <div className={styles["corner-menu"]}>
          <Link to="/registration">
            <FaUser />
          </Link>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
