import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Accommodation.module.css";
import {useNavigate } from "react-router-dom";
import api_url from "../../config";

    
export const Accomodation = () => {
   const navigate = useNavigate();
   const[rooms, setRooms] = useState("");

   async function fetchProduct() {
     try {
       const response = await fetch(`${api_url}/rooms`);
       const responseData = await response.json();
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
              <img src={`${api_url}/${room.image}`} alt={room.name}
              ></img>
              </div>
              </div>
              <button className={styles.button} onClick={()=>navigate(`/reservation?roomId=${room._id}`)}>Book now</button>
            </div>
          ))
        : "loading"}
    </div>
  );
};
      

export default Accomodation;
