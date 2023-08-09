import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data.token);

      if (response.ok) localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.slogan}>
        <h1>Apsley Arms Hotel</h1>
        <br />
        <h1>Connecting your needs......</h1>
      </div>
      <div className={styles.signupform}>
        <form onSubmit={handleSubmit}>
          <h2>Log Into Your Account</h2>
          <div className={styles.formgroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitbutton}>
            Log In
          </button>
          <p> or </p>

          <div>
            Do you have an account? <a href="/registration">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
