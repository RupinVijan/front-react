import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../files/old/login,signup/login.css";
import "../files/old/login,signup/logsign.css";
import logoImage from "../files/images/login pagee.png";
import Navbar from "../Components/Navbar/Navbar";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="log-bodyyy">
        <img
          src={logoImage}
          alt="logo"
          id="big-img-login"
          style={{ marginTop: "8rem" }}
        />
        <div className="login-containerrr">
          <h1>Welcome</h1>
          <h3>Welcome, kindly enter your details to proceed</h3>
          <form className="container">
            <input
              type="name"
              placeholder="Name"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              id="emailll"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            <h3
              className="mt-2 text-decoration-underline cursor-pointer"
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Already Having an Account?
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
