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
          <div><img src="Images/drink.jpg" alt="Image 1" /></div>
          <div classname="descripton">

            <h1 className="desh1">Signature</h1>

            <p>Lamb Cutlets’ with beetroot purée miso paste, pestoand mash by Chef Sammy.</p>
          </div>
        </div>

        <div className="rec2">
          <div className="price">
            <p>$12</p>
          </div>
          <div><img src="Images/drink.jpg" alt="Image 2" /></div>
          <div classname="descripton">

            <h1 className="desh1">Signature</h1>

            <p>Broccolini is milder and sweeter than broccoli, with firm, crunchy stems, and leafy florets </p>
          </div>


        </div>
        <div className="rec3">
          <div className="price">
            <p>$12</p>
          </div>
          <div><img src="Images/drink.jpg" alt="Image 3" /></div>
          <div classname="descripton">

            <h1 className="desh1">Signature</h1>

            <p>Food is any substance consumed by an organism for nutritional support.        </p>
          </div>


        </div>

        <div className="rec4">
          <div className="price">
              <p>$12</p>
            </div>
            <div><img src="Images/drink.jpg" alt="Image 4" /></div>
            <div classname="descripton">

              <h1 className="desh1">Signature</h1>

              <p>Food is any substance consumed by an organism for nutritional support.</p>
            </div>

        </div>
        


      </div>
      </div>
    </div>
  );
};

export default About;
