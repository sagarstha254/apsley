import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Footer.module.css";
import RevueWidget from "../RevueWidget";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.Desc}>
              <div className={styles.title}>
                <div className={styles.image}>
                  <img src="images/logo.png" alt="Logo" />  
                </div>

                <></>

                <br />
                <p>
                  Managing restaurant menus and
                  <br />
                  other information including location
                  <br />
                  and opening hours. Managing the
                  <br />
                  preparation of orders at a restaurant
                  <br />
                  kitchen.
                </p>
              </div>
            </div>
            <div className={styles.footercol}>
              <h4>Navigation</h4>
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
            <div className={styles.footercol}>
              <h4>Genres</h4>
              <ul>
                <li>
                  <a href="/">Salad</a>
                </li>
                <li>
                  <a href="/">Spicy</a>
                </li>
                <li>
                  <a href="/">Bowl</a>
                </li>
                <li>
                  <a href="/">Buffet</a>
                </li>
              </ul>
            </div>
            <div className={styles.footercol}>
              <h4>follow us</h4>
              <div className={styles.sociallinks}>
                <a
                  href="https://www.facebook.com/profile.php?id=100075803032318"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href="https://www.instagram.com/apsley_arms_hotel/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <div className={styles.review}></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <RevueWidget />
      </footer>
    </>
  );
};

export default Footer;
