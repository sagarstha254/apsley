import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import api_url from "../../config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${api_url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setMessage(data.message);

      if (response.ok) localStorage.setItem("token", data.token);
      if (response.ok) navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <div className={styles.signupcontainer}>
      <div className={styles.slogan}>
        <h1 className={styles.title}>
          Apsley Arms Hotel
          <br />
          Connecting your needs......
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>Login</h1>
          <h1>{message}</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.incontainer}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
            </div>
            <div className={styles.incontainer}>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
            </div>
            <div className={styles.forgot}>
              <br />
              <div className={styles.button}>
                <button type="submit" className={styles.button}>
                  Lets Go =>
                </button>
                <br />
                <br />
              </div>
              <div className={styles.link}>
                <p>
                  Don't have an account
                  <a href="/registration"> Register</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
