import React from "react";
import styles from "./About.module.css";



const About = () => {
  return (
    <div className={styles.position}>
      <img src="/images/chef.jpg" alt="chefphoto" />
      <div className={styles.Heading}>
        <h1>Our Apslay Arms</h1>



        <div className={styles.Hotel}>
          <h1>Hotel</h1>
        </div>

        <div className={styles.cheif}>
          <h1> Expert kitchen Chef</h1>
        </div>

        <div className={styles.content}>
          <p>
            hellow every one welcome to our hotel tou can find every
            <br />
            things over here enjor your food and the summer hellow every one
            welcome to our hotel tou can find every
            <br />
            things over here enjor your food and the summer
          </p>
        </div>
      </div>
      <button class={styles.contactbtn}>contact us</button>

    </div>
  );
};

export default About;
