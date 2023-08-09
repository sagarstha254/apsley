import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminNavBar.module.css";

const AdminNavBar = () => {
  return (
    <nav className={styles.adminNav}>
      <div>
        <img src="./Images/1.png" alt="Apsley Arms Hotel" />
      </div>
      <div className={styles.navTitle}>
        <ul>
          <li>
            <Link to="/adminProduct">Product</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/adminReservation">Reservation</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/adminCustomers">Customers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavBar;
