import { useState } from "react";
import styles from "./Reservation.module.css";
import FormInput from "./FormInput";

const Registration = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    NumberOfGuest: "",
    ArrivalData: "",
    DepartureDate: "",
    SpecialRequest: "",
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
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Number of Guest",
      type: "number",
      placeholder: "Total number of guest",
      errorMessage: "It should be a valid email address!",
      label: "Number of Guest",
      pattern: "[0-9]*",
      required: true,
    },
    {
      id: 4,
      name: "Arrival Data",
      type: "date",
      placeholder: "Arrival Data",
      label: "ArrivalData",
    },
    {
      id: 5,
      name: "Departure Data",
      type: "date",
      placeholder: "Departure Data",
      label: "DepartureData",
    },
    {
      id: 6,
      name: "Special Request",
      type: "box",
      placeholder: "Any Special request",
      errorMessage: "It should be a valid email address!",
      label: "Special request",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.Registration}>
      <form onSubmit={handleSubmit}>
        <h1>Booking Room</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className={styles.Submit}>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
