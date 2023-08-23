import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Accommodation.module.css";
import { useNavigate } from "react-router-dom";
import api_url from "../../config";
import Footer from "../Footer/Footer";

export const Accomodation = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState("");

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
    <>
      <Navbar />
      <h1>Available Rooms</h1>
      {rooms
        ? rooms.map((room) => (
            <div className={styles.main}>
              <div className={styles.inner} key={room._id}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>{room.roomType}</h1>
                  <h2 className={styles.h2}>Price: {room.price}</h2>
                </div>
                <div className={styles.innermain}>
                  <div className={styles.desc}>
                    <p>
                      <b>Description:</b>
                      {room.description}
                    </p>
                    <div className={styles.book}>
                      <button
                        className={styles.button}
                        onClick={() =>
                          navigate(`/reservation?roomId=${room._id}`)
                        }
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                  <div className={styles.photo}>
                    <img
                      src={`${api_url}/images/rooms/${room.image}`}
                      alt={room.name}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "loading"}
        <Footer />
    </>
  );
};

export default Accomodation;
