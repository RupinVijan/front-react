import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../files/old/login,signup/login.css";
import "../../files/old/login,signup/logsign.css";
import logoImage from "../../files/images/login pagee.png";

export default function Login() {
  const navigate = useNavigate();
  const [authError, setauthError] = useState();
  const handlesubmit = async (event) => {
    event.preventDefault();
    const email = event.target["email"].value;
    const password = event.target["password"].value;
    let x = {
      email,
      password,
    };
    const res = await fetch(
      "https://monkhood-api.herokuapp.com/api/loginForm/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(x),
      }
    );
    const resdata = await res.json();
    if (!resdata.error) {
      localStorage.setItem("name", resdata.loginType);
      // redirect('/DashBoardHome')
      Swal.fire({
        title: "Thank You!",
        text: "Your response has been recorded successfully! Our team will be contacting you soon.",
        icon: "success",
      });
      navigate("/DashBoardHome");
    } else {
      setauthError(resdata.error);
    }
    document.getElementById("emailll").value = "";
    document.getElementById("password").value = "";
  };
  return (
    <div className="log-bodyyy">
      <img src={logoImage} alt="" id="big-img-login" style = {{marginTop:"8rem"}} />
      <div className="login-containerrr">
        <h1>Welcome Back!</h1>
        <h3>Welcome back, kindly enter your details to proceed</h3>
        <form className="container" onSubmit={handlesubmit}>
          <input type="email" placeholder="Email" id="emailll" name="email" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          {authError}
          <button className="btn">Submit</button>
          <h3 className="mt-4 text-decoration-underline cursor-pointer" onClick = {()=>navigate("/signup")} style = {{cursor:"pointer"}}>Create a New Account</h3>
        </form>
      </div>
    </div>
  );
}
