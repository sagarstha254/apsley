import React from "react";
import styles from "./About.module.css";



const About = () => {
  return (
    <div className={styles.main} id="about"> 
      <div className={styles.position}>
        <div className={styles.Heading}>
          <div >
            <h1 className={styles.h1}>Our Apsley Arms Hotel<br />
              Expert kitchen Chef</h1>
          </div>

          <div className={styles.content}>
            <p>
              Food, substance consisting essentially of
              protein, carbohydrate, fat, and other nutrients
              used in the body of an organism to sustain growth and vital processes and to furnish energy.
               The absorption and utilization of food
                by the body is fundamental to nutrition and is
                 facilitated by digestion.
            </p>
            <button class={styles.contactbtn}>Contact us</button>
          </div>

        </div>
        <div className={styles.photo}>
          <img src="/Images/chef.jpg" alt="chefphoto" />
        </div>
      

      
    </div>

    </div>




    
 
      
  );
};

export default About;