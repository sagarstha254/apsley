import React, { useState } from "react";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
import api_url from "../../config";


function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await fetch(`${api_url}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();

   
      setMessage(data.message);
      if (response.ok) navigate("/login");

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.slogan}>
        <h1 className={styles.title}>Apsley Arms Hotel
        <br />
        Connecting your needs......</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>Create Account</h1>
          <h2>{message}</h2>
          <form className={styles.form1} onSubmit={handleSubmit}>
            <div className={styles.incontainer}>
            
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Name:</label>
            </div>
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
            <div className={styles.incontainer}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              /> 
              <label htmlFor="confirmPassword">Confirm Password:</label>
            </div>

                <div className={styles.button}>
                  <button type="submit" className={styles.button}>
                    Create Account
                  </button><br /><br />
                </div> 
                <div className={styles.link}>
                <a className={styles.a} href="https://www.google.com">Sign up with Google</a> <br /><br/>
                <a className={styles.a} href="https://www.facebook.com">Sign up with facebook</a><br/>
                
                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;