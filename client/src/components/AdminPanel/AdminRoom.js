import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.css";
import AdminNavBar from "./AdminNavBar";

export default function AdminProducts() {
  const [number, setnumber] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [roomType, setroomType] = useState("");
  const [message, setMessage] = useState("");
  const [roomList, setRoomList] = useState([]);

  //Insert a room data
  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      number: number,
      roomType: roomType,
      description: description,
      price: price,
      image: image,
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8081/admin/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setMessage(data.message);
      // Update the productList state with the newly added product
      setRoomList((prevroomList) => [...prevroomList, userData]);
    } catch (error) {
      console.error(error);
    }
  }

  //Update a product
  async function update(id) {
    const userData = {
      roomId : `${id}`,
      number: number,
      description: description,
      price: price,
      roomType: roomType,
      image: image,
    };

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8081/admin/room/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setMessage(data.message);

      // Update the roomlist state with the updated room
      setRoomList((prevroomList) =>
        prevroomList.map((room) =>
          room._id === id ? { ...room, ...userData } : room
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
  //   Delete a product
  async function remove(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8081/admin/room/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();

      // Remove the deleted product from the productList state
      setRoomList((prevroomList) =>
        prevroomList.filter((room) => room._id !== id)
      );
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch all room data
  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await fetch("http://localhost:8081/rooms", {
          method: "GET",
        });

        const data = await response.json();
        setRoomList(data.rooms);
      } catch (error) {
        console.error(error);
      }
    };
    getRooms();
  }, []);

  return (
    <>
      <AdminNavBar />

      <div className={styles.cointainer}>
        <div className={styles.adminproduct}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h3>add new rooms</h3>
            <h3>{message}</h3>

            <input
              type="number"
              placeholder="Enter your room number"
              name="number"
              className={styles.box}
              onChange={(e) => setnumber(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Enter your room price"
              name="price"
              className={styles.box}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Enter your room type"
              name="type"
              className={styles.box}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Enter your room description"
              name="description"
              className={styles.box}
              onChange={(e) => setroomType(e.target.value)}
            ></input>
            <input
              type="file"
              accept="image/png,image/jpg,image/jpeg"
              name="image"
              className={styles.box}
              onChange={(e) => setimage(e.target.value)}
            ></input>
            <input
              type="submit"
              className={styles.btn}
              name="add_room"
              value="Add Rooms"
            ></input>
          </form>
        </div>

        <div className={styles.productdisplay}>
          <table className={styles.productdisplaytable}>
            <thead>
              <tr>
                <td>Room image</td>
                <td>Room Number</td>
                <td>Room Price</td>
                <td>Room Type</td>
                <td>Description</td>
                <td colSpan="2">Action</td>
              </tr>
            </thead>
            {roomList &&
              roomList.map((i) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <img src={i.image} />
                      </td>
                      <td>{i.number}</td>
                      <td>{i.price}</td>
                      <td>{i.roomType}</td>
                      <td>{i.description}</td>
                      <td>
                        <a
                          onClick={() => update(i._id)}
                          className={styles.editbtn}
                        >
                          <i className={styles.edit}></i> Edit
                        </a>
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
    </>
  );
}
