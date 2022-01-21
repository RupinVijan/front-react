import React from 'react'
import '../../files/old/navfoot/navfoot.css'
import LogoImg from "../../files/images/monkhood-logo-icon.png"
import '../../files/old/navfoot/navfoot.css';

export default function Footer() {
    return (
        <footer className="section bg-footer">
        <div className="">
            <div className="row">
              <img src={LogoImg} alt="" id="footer-img"/>
              <div className="vl"></div>
                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Monkhood</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href='a'>Services</a></li>
                            <li><a href='a'>About Us</a></li>
                            <li><a href='a'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
      
                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">More Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="tandc.html">Privacy and Policy </a></li>
                            <li><a href="tandc.html">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
      
                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Social Handles</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="https://instagram.com/monkhoodliving?utm_medium=copy_link">Instagram </a></li>
                            <li><a href="https://www.facebook.com/monkhoodliving/">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/company/monkhoodliving">Linkedin</a></li>
                         </ul>
                    </div>
                </div>
      
            </div>
        </div>
      
        <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">2019 © Monkhood Living Pvt. Ltd.</p>
        </div>
      </footer>
      
    )
}
