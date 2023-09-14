import { useState } from "react";
import styles from "./Reservation.module.css";
import FormInput from "./FormInput";
import api_url from "../../config";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Navbar";

const Registration = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const roomId = searchParams.get("roomId");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    phone: "",
    guests: "",
    checkInDate: "",
    checkOutDate: "",
    specialRequest: "",
    roomId,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      placeholder: "Phone",
      errorMessage: "It should be a valid Phone number!",
      label: "Phone",
      required: true,
    },

    {
      id: 3,
      name: "guests",
      type: "number",
      placeholder: "Total number of guest",
      errorMessage: "It should be a valid number!",
      label: "Number of Guest",
      pattern: "[0-9]*",
      required: true,
    },
    {
      id: 4,
      name: "checkInDate",
      type: "date",
      placeholder: "Arrival Data",
      label: "ArrivalData",
    },
    {
      id: 5,
      name: "checkOutDate",
      type: "date",
      placeholder: "Departure Data",
      label: "DepartureData",
    },
    {
      id: 6,
      name: "specialRequest",
      type: "box",
      placeholder: "Any Special request",
      errorMessage: "It should be a valid character!",
      label: "Special request",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${api_url}/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if(response.status === 401){
        return navigate("/login")
      }
      const data = await response.json();
      setMessage(data.message);

      setTimeout(() => {
        navigate("/accommodation"); // Navigate to "/accomodation" after 3 seconds
      }, 2000);


    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Header />
      <div className={styles.Registration}>
      <form onSubmit={handleSubmit}>
        <h1>Booking Room</h1>
        <h1>{message}</h1>
        {inputs.map((input)  => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            className="input1"

          />
        ))}
        <button className={styles.Submit}>Submit</button>
      </form>
    </div>
    <Footer noLogo />
    </>
  );
};

export default Registration;
