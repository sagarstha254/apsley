import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.css";

import AdminNavBar from "./AdminNavBar";

const AdminCustomerList = () => {
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState([]);

  //Fetch all customer
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:8081/user", {
          method: "GET",
        });

        const data = await response.json();
        setUserList(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  //Delete customer details
  async function remove(id) {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8081/user/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/jspn", "Authorization":`Bearer ${token}`},
      });
      const data = await response.json();

      // Update the userList state by filtering out the deleted user
      setUserList((prevUserList) => prevUserList.filter((user) => user._id !== id));
      setMessage(data.message);

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <AdminNavBar />
      AdminCustomerList
      <div className={styles.productdisplay}>
        <table className={styles.productdisplaytable}>
          <thead>
            <tr>
              <td>Customer Name</td>
              <td>Customer Email</td>
              <td>Reservation</td>
              <td colSpan="2">Action</td>
            </tr>
          </thead>
          {console.log(userList)}
          {userList &&
            userList.map((i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.reservation}</td>
                    <td>
                      <a
                        onClick={() => remove(i._id)}
                        className={styles.delbtn}
                      >
                        <i className={styles.delete}></i> Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default AdminCustomerList;
