import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Accommodation.module.css";
import {useNavigate } from "react-router-dom";
    
export const Accomodation = () => {
   const navigate = useNavigate();
   const[rooms, setRooms] = useState("");

   async function fetchProduct() {
     try {
       const response = await fetch("http://localhost:8081/rooms");
       const responseData = await response.json();
       console.log(responseData);
       setRooms(responseData.rooms);
     } catch (error) {
       console.error(error);
     }
   }

   useEffect(() => {
     fetchProduct();
   }, []);

  return (
    
    <div>
      <Navbar/>
      <h1>Available rooms</h1>
      {rooms
        ? rooms.map((room) => (
            <div className={styles.reservation} key={room._id}>
              <div className={styles.reserve}> 
                <div className={styles.text}>
              <h1>{room.name}</h1>
              <p>{room.description}</p>
              <h2>{room.price}</h2>
              <strong>{room.roomType}</strong>
              </div>
              <div className={styles.image}>
              <img src={`http://localhost:8081/${room.image}`} alt={room.name}
              ></img>
              </div>
              </div>
              <button className={styles.button} onClick={()=>navigate('/reservation')}>Book now</button>
            </div>
          ))
        : "loading"}
    </div>
  );
};
      

export default Accomodation;
