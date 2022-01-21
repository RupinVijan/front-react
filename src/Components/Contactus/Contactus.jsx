import React from 'react'
import {useState} from 'react'
import Swal from 'sweetalert2';
import LogoImg from '../../files/images/Artboard 18@4x.png'
import OrImg from '../../files/images/or img.png'

export default function Contactus() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [No, setNo] = useState('');
  const [Mssg, setMssg] = useState('');
const handlesubmit=async(event)=>{event.preventDefault();
  

  let x = {
      name :Name,
      to:Email,
      no:No,
      message:Mssg
  }
  const res = await fetch ('https://www.monkhood.in/api/contactform/product/sendmail',{
      method:"POST",headers : { 
          'Content-Type': 'application/json',
         },
      body:JSON.stringify(x)
  })
  Swal.fire({
    title: 'Success',
    text: 'Query submitted successfully. We will be replying soon',
    icon: 'success'
});
  // window.alert("We'll Contact you shortly!")
  // location.reload();
 setName('')
setEmail('')
setNo('')
setMssg('')}
  return (
     

        <div id="contact-us">
  <div id="contact-write" className="">
    <h1 className="comfortaa">CONTACT US</h1>
    <h4 className="comfortaa">Fill Out this Form</h4>
    <img src={OrImg} alt=""/>
    <h3 className="comfortaa">Drop a mail at <a href="mailto:support@monkhood.in">support@monkhood.in</a>  or call us : <a href="tel:+919560346254"> +919560346254</a></h3>
  </div>
  <div id="contact-form">
    <div id="contact-heading">
      <img src={LogoImg} alt="" />
      <h1 className="text-center" >Monkhood Living</h1>
    </div>
    <form action="" onSubmit={handlesubmit} >
      <input type ="text" value={Name} placeholder=" Your Name" id="name" className="cont-inp" onChange={
        (e)=>{
         setName(e.currentTarget.value)
        }
      } required/>
      <input type="text" value={Email} placeholder=" Your Email" id="email" className="cont-inp" onChange={
        (e)=>{
         setEmail(e.currentTarget.value)
        }
      } required/>
      <input type="text" value={No} placeholder="Contact Number" id="no" className="cont-inp" onChange={
        (e)=>{
         setNo(e.currentTarget.value)
        }
      } required/>
      <textarea name="message" value={Mssg} id="message" cols="30" rows="5" className="cont-inp" onChange={
        (e)=>{
         setMssg(e.currentTarget.value)
        }
      } placeholder="Message/Requirements" required></textarea>
      <button className="btn-submit">Submit</button>
    </form>
  
</div>
</div>
    )
    
}
