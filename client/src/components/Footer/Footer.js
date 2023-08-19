import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
      <footer className={styles.footer}>
        <div className={styles.image}>
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/363550311_305188518715952_7321489297040537218_n.png?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=510075&_nc_ohc=xhaIgYc1zH4AX9Gqq5w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSqL3IaBtfA60FqoSUpdsxgQcckX5GXk1Lr22k15tCUyg&oe=65001D25"
            alt="Logo"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.Desc}>
              <div className={styles.title}>
                <h1 className={styles.h1}>Asplay Arms Hotel</h1>
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
                  <a href="/">Menu</a>
                </li>
                <li>
                  <a href="/">Product</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Accommodation</a>
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
                  <a href="/">Kitchen</a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
            <div className={styles.footercol}>
              <h4>follow us</h4>
              <div className={styles.sociallinks}>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
