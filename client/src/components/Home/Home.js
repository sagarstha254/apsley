import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import Recipe from "../Recipe/Recipe";
import About from "../About/About";
import About1 from "../About/About1";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className={styles.section}>
        <Navbar />
        <div className={styles.bigSvg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="666"
            height="900"
            viewBox="0 0 666 900"
            fill="none"
          >
            <path
              d="M0 0H666V900H0C0 900 372.434 299 308.901 185C245.368 71 0 0 0 0Z"
              fill="#DAE952"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>All Delicious</h1>
            <h2 className={styles.slogan}>Enjoy luxury and comfort</h2>
            <button className={styles.button}>Find For More</button>
          </div>
          <div className={styles.border}></div>
          <div className={styles.image1}>
            <img src="./Images/food.png" alt="Image 1" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="43"
          viewBox="0 0 60 43"
          fill="none"
          className={styles.firstSvg}
        >
          <path
            d="M2.80389 41.0656L19.1675 14.7485L35.5312 32.5046L56.8039 2.06555"
            stroke="black"
            strokeWidth="6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="57"
          viewBox="0 0 98 57"
          fill="none"
          className={styles.secondSvg}
        >
          <path
            d="M2.92511 54.7561L30.9187 18.9919L58.9123 43.122L95.304 1.7561"
            stroke="#DAE952"
            strokeWidth="5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="52"
          viewBox="0 0 70 52"
          fill="none"
          className={styles.thirdSvg}
        >
          <path
            d="M3.30396 49.7561L22.6405 17.7033L41.977 39.3293L67.1145 2.2561"
            stroke="#DAE952"
            strokeWidth="6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="48"
          viewBox="0 0 86 48"
          fill="none"
          className={styles.fourthSvg}
        >
          <path
            d="M82.6078 2.50606L58.4402 31.3715L34.4064 11.7846L3 45.1616"
            stroke="black"
            strokeWidth="7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="123"
          height="33"
          viewBox="0 0 123 33"
          fill="none"
          className={styles.fifthSvg}
        >
          <path
            d="M2.15887 23.2768C15.19 -30.9438 109.525 81.1531 121.127 1.19282"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
        <Recipe />
        <About />
        <About1 />
        <Footer />

      </div>
    </>
  );
};

export default Home;
