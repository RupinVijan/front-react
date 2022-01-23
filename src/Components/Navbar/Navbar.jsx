import React, { useState, useEffect } from "react";
import "../../files/old/navbar/navbar.css";
import logo from "../../files/images/monkhoodLogo.png";
import avatar from "../../files/images/avatar.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [colors, setColors] = useState("rgb(252,206,47,0)");
  const [open, setOpen] = useState(false);
  const sc = () => {
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
    sc();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="mb-8">
      <div
        className="outer-nav fixed-top"
        style={{ backgroundColor: `${colors}` }}
      >
        <div className="nav-logo" onClick = {()=>navigate('/')}>
          <img src={logo} alt="logo" className="nav-logo-img" />
        </div>
        <div className="nav-links">
          <h1 className="nav-tag" onClick = {()=>navigate('/service')}>Services</h1>
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
                <a className="dropdown-item nav-tag">Rent A Property</a>
              </li>
              <li>
                <a className="dropdown-item nav-tag">List A Property</a>
              </li>
            </ul>
          </div>
          <a className="nav-tag" onClick={() => navigate("/about")}>
            About Us
          </a>

          <a className="nav-tag" onClick={() => navigate("/login")}>Login</a>
          <a className="avatar-div">
            <img src={avatar} style={{ width: "70%" }}></img>
          </a>
          {/* <button> */}
          <i
            className="fas fa-bars menu-button"
            onClick={() => {
              setOpen(!open);
              console.log(open);
            }}
            style={{ fontSize: "1.5rem" }}
          ></i>
          {/* </button> */}
        </div>
      </div>
      {open && (
        <div className="responsive-nav">
          <h1 className="nav-tag1" onClick = {()=>navigate('/service')}>Services</h1>
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
                <a className="dropdown-item nav-tag1">Rent A Property</a>
              </li>
              <li>
                <a className="dropdown-item nav-tag1">List A Property</a>
              </li>
            </ul>
          </div>
          <a className="nav-tag1" onClick={() => navigate("/about")}>
            About Us
          </a>

          <h1 className="nav-tag1" onClick={() => navigate("/login")}>Login</h1>
          <div className="avatar-div">
            <img src={avatar} style={{ width: "70%" }} alt="avatr"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
