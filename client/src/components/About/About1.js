import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.hotel}>
      <div className={styles.title}>
        <h1 className={styles.h2}>
          Apsley Arms Bar
          <br />
        </h1>
        <h1 className={styles.h3}>
          Elevate Your Nightlife
          <br />
          Join Us at the Bar
        </h1>

        <div className="recipe">
          <div className="rec1">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/drink.png" alt="Image 1" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Signature</h1>

              <p>
                You can enjoy the taste of sweet oaks, fruit, and fading caramel
                hints in the Signature Liquor brand.
              </p>
            </div>
          </div>

          <div className="rec2">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/drink1.png" alt="Image 2" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Blue Label</h1>

              <p>
                Blue Label is an unrivalled masterpiece. An exquisite blend made
                from some of Scotland's rarest and most exceptional whiskies.{" "}
              </p>
            </div>
          </div>
          <div className="rec3">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/drink2.png" alt="Image 3" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Red Label</h1>

              <p>
                Red Label is the quintessential Scotch. Enjoy neat, over ice or
                with your favourite mixer. A must for every bar.{" "}
              </p>
            </div>
          </div>

          <div className="rec4">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/drink3.png" alt="Image 4" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Jack Daniels</h1>

              <p>
                Jack Daniels whiskey is created in the “sour mash manner”
                popular in Tennessee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
