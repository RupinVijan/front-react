import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../files/old/navfoot/navfoot.css';

const Navbar = () => {
  const [colors, setColors] = useState("rgb(252,206,47,0)");
  const [open, setOpen] = useState(false);
  const sc= () => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setColors("rgb(252,206,47)");
      } else {
        setColors("rgb(252,206,47,0)");
      }
    };
  };

  useEffect(() => {
    sc()
  }, []);

  return (
    <div className="">
      <div
        className="outer-nav fixed-top"
        style={{ backgroundColor: `${colors}` }}
      >
        <div className="nav-logo">
          <img
            src="./images/monkhoodLogo.png"
            alt="logo"
            className="nav-logo-img"
          />
        </div>
        <div className="nav-links">
          <h1 className="nav-tag">Services</h1>
          <div>
            <h1
              type="h1"
              className="dropdown-toggle nav-tag"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Properties
            </h1>
            <ul className="dropdown-menu drops">
              <li>
                <a className="dropdown-item nav-tag" href="#">
                  Rent A Property
                </a>
              </li>
              <li>
                <a className="dropdown-item nav-tag" href="#">
                  List A Property
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-tag">About Us</a>
          
          <a className="nav-tag">Login</a>
          <a className="avatar-div">
            <img src="./images/avatar.png" style={{ width: "70%" }}></img>
          </a>
          {/* <button> */}
            <i
              className="fas fa-bars menu-button"
              onClick={() => {
                setOpen(!open);
                console.log(open);
              }}
              style = {{fontSize:"1.5rem"}}
            ></i>
          {/* </button> */}
        </div>
      </div>
      {open && (
        <div className="responsive-nav">
          <h1 className="nav-tag1">Services</h1>
          <div className="nav-tag1">
            <h1
              className="dropdown-toggle nav-tag1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ paddingLeft: "0rem" }}
            >
              Properties
            </h1>
            <ul className="dropdown-menu drops">
              <li>
                <a className="dropdown-item nav-tag1" href="#">
                  Rent A Property
                </a>
              </li>
              <li>
                <a className="dropdown-item nav-tag1" href="#">
                  List A Property
                </a>
              </li>
            </ul>
          </div>
          <Link to="/about"><a className="nav-tag1">About Us</a></Link>
          
          <h1 className="nav-tag1">Login</h1>
          <div className="avatar-div">
            <img src="./images/avatar.png" style={{ width: "70%" }}></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
