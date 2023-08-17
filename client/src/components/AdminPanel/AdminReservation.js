import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import styles from "./AdminProducts.module.css";
import api_url from "../../config";

const AdminReservation = () => {
  const [message, setMessage] = useState("");
  const [reservationList, setReservationList] = useState("");

  //Fetch all reservation list
  useEffect(() => {
    const getreservation = async () => {
      try {
        const response = await fetch(
          `${api_url}/admin/reservations`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setReservationList(data.reservations);
      } catch (error) {
        console.log(error);
      }
    };
    getreservation();
  }, []);

  //delete reservation details
  async function remove(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${api_url}/admin/reservation/${id}`,
        {
          method: "DELETE",
          headers: {"Content-Type":"applicaton/json", "Authorization": `Bearer ${token}`},
        }
      );

      const data = await response.json();
      // Remove the deleted reservation from the reservation list
      setReservationList((prevReservationList) =>
      prevReservationList.filter((reservation) => reservation._id !== id)
      );
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
              <td>Check In Date</td>
              <td>Check Out Date</td>
              <td>Number of Guests</td>
              <td colSpan="2">Action</td>
            </tr>
          </thead>
          {console.log(reservationList)}
          {reservationList &&
            reservationList.map((i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i.checkInDate}</td>
                    <td>{i.checkOutDate}</td>
                    <td>{i.guests}</td>
                    <td>
                      {
                        <a
                          onClick={() => remove(i._id)}
                          className={styles.delbtn}
                        >
                          <i className={styles.delete}></i> Delete
                        </a>
                      }
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

export default AdminReservation;
