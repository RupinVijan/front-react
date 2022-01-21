import React from 'react'
import Swal from 'sweetalert2';
import HeroIMG from "../../files/images/Services.png"

export default function Service() {
  const handlesubmit = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const ph_number = event.target["number"].value;
    const email = event.target["email"].value;
    const membership = event.target["membership"].value;
    const services = event.target["service"].value;

    let x = {
        name,
        email,
        ph_number,
        membership,
        services
    }
    const res = await fetch ('https://www.monkhood.in/api/serviceform/product/create',{
        method:"POST",headers : { 
            'Content-Type': 'application/json',
           },
        body:JSON.stringify(x)
    })
    
    Swal.fire({
        title: "Thank You!",
        text: "Your response has been recorded successfully! Our team will be contacting you soon.",
        icon: "success",
      });
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("membership").value="";
    document.getElementById("service").value="";

}
    return (
        <div className="log-bodyy">
  <img src={HeroIMG} alt="" id="big-img-login"/>
  <div className="login-containerr" >
    <h1>All housing needs at the ease of a click</h1>
   
    <form action="" onSubmit={handlesubmit} className="container">
  
      <input type="text" className="ser-form-inp" placeholder="Full Name" id="name" name="name" required />
      <input type="text" className="ser-form-inp" placeholder="Mobile Number" id="number" name="number" required />
      <input type="text" className="ser-form-inp" placeholder="Membership ID" id="membership" name="membership"/>
      <input type="text" className="ser-form-inp" placeholder="E-mail ID" id="email" name="email" required />
      <input type="text" className="ser-form-inp" placeholder="Services Required" id="service" name="service" />
      <button className="btn-submit" >Submit</button>
      
    </form>
  </div>
</div>

    )
}
