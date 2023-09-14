import React, { useState } from "react";
import PopUp from "../../popup/popup";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowRight, FaPhone, FaUser, FaHome, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import api_url from "../../config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${api_url}/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Send token in headers
        },
      });
      const data = await response.json();
      setMessage(data.message);
      console.log(data.message);

      if (response.ok) {
        localStorage.removeItem("token");
        alert({ message });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />

      <nav className={styles.NavbarItem}>
        <div className={styles.image}>
          <img
            src="Images/logo.png"
            alt="Logo"
          />
        </div>
        <div className={styles.MenuIcons} onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul
          className={
            isMenuOpen ? `${styles.Navmenu} ${styles.active}` : styles.Navmenu
          }
        >
          <li>
            <Link className={styles.NavLinks} smooth to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.NavLinks} smooth to="/product">
              Product
            </Link>
          </li>
          <li>
            <Link className={styles.NavLinks} smooth to="/#recipe">
              Recipe
            </Link>
          </li>
          <li>
            <Link className={styles.NavLinks} smooth to="/#about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.NavLinks} smooth to="/accommodation">
              Accommodation
            </Link>
          </li>
          <li className={styles.NavLinks}>
            <FaPhone />
            98104903834
          </li>
          <li className={styles.pop}>
            <PopUp />
          </li>
        </ul>

        <div className={styles["corner-menu"]}>
          <Link to="/registration">
            <FaUser />
          </Link>
          <div className={styles["button"]}>
            <button onClick={logout}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
