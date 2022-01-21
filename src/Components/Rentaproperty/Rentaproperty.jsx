import React from 'react'
import Swal from 'sweetalert2';

export default function Rentaproperty() {
  const handlesubmit = async(event) =>{
    event.preventDefault();
    const name = event.target["name"].value;
    const ph_number = event.target["no"].value;
    const email = event.target["email"].value;
    const budget = event.target["budget"].value;
    const college = event.target["college"].value;
    const requirements = event.target["requirements"].value;
    let x = {
        name,
        email,
        ph_number,
        budget,
        college,
        requirements
    }
    const res = await fetch ('https://www.monkhood.in/api/tenantform/product/create',{
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
    document.getElementById("no").value="";
    document.getElementById("budget").value="";
    document.getElementById("college").value="";
    document.getElementById("requirements").value="";

}
    return (
        <div className="log-body" style={{margin :"-20px 0px" ,marginBottom:"0px"}}>
        <div className="login-container">
          <h1>Welcome</h1><br/><br/>
          <h3>welcome back, kindly enter your details to proceed</h3>
          <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="Full name" id="name" name="name" required />
            <input type="email" placeholder="Email" id="email" name="email" required />
            <input type="number" placeholder="Phone Number" id="no" name="no" required />
            <input type="text" placeholder="College" id="college" name="college"/>
            <input type="text" placeholder="Budget (in range)" id="budget" name="budget"/>
            <input name="requirements" placeholder="Requirements" id="requirements" />
            <br/><button className=" btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      
      
    )
}
