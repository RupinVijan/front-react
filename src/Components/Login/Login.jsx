import React from 'react'
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Login() {
  const [authError, setauthError] = useState();
  const handlesubmit = async(event) =>{
    event.preventDefault();
    const email = event.target["email"].value;
    const password = event.target["password"].value;
    let x = {
        email,
        password
    }
    const res = await fetch ('https://monkhood-api.herokuapp.com/api/loginForm/product',{
        method:"POST",headers : { 
            'Content-Type': 'application/json',
           },
        body:JSON.stringify(x)
    })
    const resdata = await res.json();
    if(!resdata.error){
      localStorage.setItem("name",resdata.loginType);
      // redirect('/DashBoardHome')
      Swal.fire({
          title: "Thank You!",
          text: "Your response has been recorded successfully! Our team will be contacting you soon.",
          icon: "success",
        });
      Router.push('/DashBoardHome')
    }

    else{
      setauthError(resdata.error)
    }
    document.getElementById("emailll").value="";
    document.getElementById("password").value="";

}
    return (
        <div className="log-body" >
  <img src="./images/login pagee.png" alt="" id="big-img-login" />
  <div className="login-container" >
    <h1>Welcome Back!</h1>
    <h3 >Welcome back, kindly enter your details to proceed</h3>
    <form  className="container" onSubmit={handlesubmit}>
      <input type="email" placeholder="Email" id="emailll" name="email" />
      <input type="password" placeholder="Password" id="password" name="password" />
     {authError}
      <button className="btn" >Submit</button>
    </form >
  </div>
</div>
    )
}
