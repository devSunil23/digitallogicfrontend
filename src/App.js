import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Product from "./Product";
import Order from "./Order";
import Customer from "./Customer";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/** This is for routing */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
