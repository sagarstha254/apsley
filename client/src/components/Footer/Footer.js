import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className='footercointainer'>
        <img src={''} alt={'logo'} />
        <p> Hello everyone in this beautiful hotel where you can find all the things over here.</p>
        
      </div>
      
      <div className={styles.footercontents}>
        <h4>Navigation</h4>
        <ul>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Accommodation</a></li>
          <li><a href='#'>Bars</a></li>
        </ul>
      </div>

      <div className='footercontents'>
        <h4>Genres</h4>
        <ul>
          <li><a href='#'>Salad</a></li>
          <li><a href='#'>Spicy</a></li>
          <li><a href='#'>Bowl</a></li>
          <li><a href='#'>Kitchen</a></li>
          <li><a href='#'>Home</a></li>
        </ul>
      </div>

      <div className='footercontents'>
        <h4>Follow us</h4>
        
        <ul>
          
        </ul>
      </div>
    </section>
  );
};

export default Footer;
