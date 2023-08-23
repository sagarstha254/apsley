import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import About from "./components/About/About";
import Accommodation from "./components/Accommodation/Accommodation";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Product from "./components/Products/Product";
import Registration from "./components/Registration/Registration";
import Reservation from "./components/Reservation/Reservation";
import Recipe from "./components/Recipe/Recipe";
import AdminProducts from "./components/AdminPanel/AdminProducts";
import AdminCustomerList from "./components/AdminPanel/AdminCustomerList";
import AdminReservation from "./components/AdminPanel/AdminReservation";
import AdminRoom from "./components/AdminPanel/AdminRoom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/adminProduct" element={<AdminProducts />} />
        <Route path="/adminReservation" element={<AdminReservation />} />
        <Route path="/adminCustomers" element={<AdminCustomerList />} />
        <Route path="/adminRoom" element={<AdminRoom />} />

      </Routes>
    </Router>
  );
};

export default App;
