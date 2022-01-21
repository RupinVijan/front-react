import React from "react";
import WhatLogo from '../../files/images/what@4x.png'
import WhyLogo from '../../files/images/why@4x (1).png'
import WhereLogo from '../../files/images/where-2@4x.png'
import WhoLogo from '../../files/images/who copy 2@4x.png'


export default function Aboutus() {
  const ax = () => {
    const w_what1 = document.getElementById("w-what");
    const w_why1 = document.getElementById("w-why");
    const w_who1 = document.getElementById("w-who");
    const w_where1 = document.getElementById("w-where");
    const w_what = document.querySelector("#w-what h3");
    const w_why = document.querySelector("#w-why h3");
    const w_who = document.querySelector("#w-who h3");
    const w_where = document.querySelector("#w-where h3");

    w_what1.addEventListener("click", () => {
      w_what.classList.add("active");
      w_who.classList.remove("active");
      w_where.classList.remove("active");
      w_why.classList.remove("active");
      document.getElementById("what").classList.remove("hide");
      document.getElementById("why").classList.add("hide");
      document.getElementById("where").classList.add("hide");
      document.getElementById("who").classList.add("hide");
    });
    w_why1.addEventListener("click", () => {
      w_why.classList.add("active");
      w_who.classList.remove("active");
      w_where.classList.remove("active");
      w_what.classList.remove("active");
      document.getElementById("why").classList.remove("hide");
      document.getElementById("what").classList.add("hide");
      document.getElementById("where").classList.add("hide");
      document.getElementById("who").classList.add("hide");
    });
    w_where1.addEventListener("click", () => {
      w_where.classList.add("active");
      w_who.classList.remove("active");
      w_why.classList.remove("active");
      w_what.classList.remove("active");
      document.getElementById("where").classList.remove("hide");
      document.getElementById("why").classList.add("hide");
      document.getElementById("what").classList.add("hide");
      document.getElementById("who").classList.add("hide");
    });
    w_who1.addEventListener("click", () => {
      w_who.classList.add("active");
      w_where.classList.remove("active");
      w_why.classList.remove("active");
      w_what.classList.remove("active");
      document.getElementById("who").classList.remove("hide");
      document.getElementById("why").classList.add("hide");
      document.getElementById("what").classList.add("hide");
      document.getElementById("where").classList.add("hide");
    });
  };
  return (
    <>
      <div id="static-row">
        <div className="w-fam" id="w-what" onClick={ax}>
          <div className="icon-dis">
            {" "}
            <img src={WhatLogo} alt="" />
          </div>
          <h3 className="active">WHAT? </h3>
        </div>
        <div className="w-fam" id="w-why" onClick={ax}>
          <div className="icon-dis">
            {" "}
            <img src={WhyLogo} alt="" />
          </div>
          <h3>WHY?</h3>
        </div>
        <div className="w-fam" id="w-who" onClick={ax}>
          <div className="icon-dis">
            {" "}
            <img src={WhoLogo} alt="" />
          </div>
          <h3>WHO?</h3>
        </div>
        <div className="w-fam" id="w-where" onClick={ax}>
          <div className="icon-dis">
            {" "}
            <img src={WhereLogo} alt="" />
          </div>
          <h3>WHERE?</h3>
        </div>
      </div>
      <div className="row">
        <div
          className="content col-md-offset-6 col-lg-offset-6 "
          id="what"
        >
          <center>
            <h1 className="contentHead">Get To Know Us</h1>
          </center>
          <br />

          <h2 className="comfortaa container">
            For many people, moving away from home for a career is painful.
            Above all, finding a place to live. It is already hard enough to
            manage your career and attend to your housing needs. <br />{" "}
            Therefore, we at MONKHOOD strive to make your rental feel like home
            and help you find the right rental. The tenant has a lot of
            responsibilities when renting. We'll take care of all your stress
            and responsibilities. "Whatever your budget, Whatever you call home,
            we have something for you." The one-stop solution for all your
            housing needs. Whether it's finding a flat, buying basic
            furnishings, or getting kitchen appliances. We have something to
            suit every budget and every home.
          </h2>
        </div>

        <div
          className="content col-md-offset-6 col-lg-offset-6 hide "
          id="why"
        >
          <div className="why-container">
            <div className="why-box">
              <center>
                <h1 className="contentHead">For Students</h1>
              </center>
              <div className="roww">
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/zero-brokerage@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>ZERO-BROKERAGE</h3>

                        <ul>
                          <li>Minimal Paperwork</li>
                          <li>Listing and Leasing Made Easy</li>
                          <li>Budget-Friendly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/essential-home-furnishing@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>ESSENTIAL HOME FURNISHINGS</h3>
                        <ul>
                          <li>Ready to Move-in</li>
                          <li>Kitchen Amenities</li>
                          <li>Newly Plastered & Painted</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roww">
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/domestic-assistance@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>DOMESTIC ASSISTANCE</h3>
                        <ul>
                          <li>Cooks & Maids</li>
                          <li>
                            Emergency Services (i.e. Electricians,Plumbers,etc.)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/no-middlemen@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>NO MIDDLEMAN</h3>
                        <ul>
                          <li>Owner-Direct Dealings</li>
                          <li>Guided House Visits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/privacy-assured@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>INDEPENDENCE & PRIVACY ASSURED</h3>
                        <ul>
                          <li>Independant Flats</li>
                          <li>Secured Locations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <center>
                <h1 className="contentHead">For Owners</h1>
              </center>
              <div className="roww">
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/verified-tenants@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>VERIFIED TENANTS</h3>
                        <ul>
                          <li>Police and College Verification</li>
                          <li>Necessary Documentation Done</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/guided-house-visit@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>GUIDED HOUSE VISIT</h3>
                        <ul>
                          <li>Direct Contact with Tenants</li>
                          <li>Visits Supervised Personally</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roww">
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/monetary-independance@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>MONETARY INDEPENDENCE</h3>
                        <ul>
                          <li>Free-Rent Collection</li>
                          <li>Nominal Service Charges</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/nopaper-work@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>NO PAPERWORK</h3>
                        <ul>
                          <li>Online Listings</li>
                          <li>Only Signatory Required</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="containerr">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="./images/least-vacancy@4x.png"
                            alt=""
                            id="icon-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>LEAST VACANCY PERIOD</h3>
                        <p>Fast reoccupancy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="content col-md-offset-6 col-lg-offset-6 hide "
          id="who"
        >
          <div className="who-box">
            <div className="roww">
              <a
                href="https://www.linkedin.com/in/rahulchandra0/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/rahul chandra.jpg" />
                    </div>
                  </div>
                  <div className="title">
                    <span>Rahul Chandra</span>
                    <h6>Co-Founder</h6>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-chawla-3009/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/rahul chawla.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Rahul Chawla</span>
                    <h6>Co-Founder</h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="roww">
              <a
                href="https://www.linkedin.com/in/adit-saxena-925b5a1b0/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/adit.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Adit Saxena</span>
                    <h6>UX Designer</h6>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/arif-khan-898378187/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/arif.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Arif Khan</span>
                    <h6>Graphic Designer</h6>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/divyangi-j-4559311b2/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/divyangi.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Divyangi Jain</span>
                    <h6>Content Writer</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="roww">
              <a
                href="https://www.linkedin.com/in/rupin-v-980b63118/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/00e15a68-5b98-460c-9b63-48fb2d6e1708.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Rupin Vijan</span>
                    <h6>Software Developer</h6>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/vanshika-sharma-298942205/"
                target="_blank"
              >
                <div className="card">
                  <div className="image">
                    <div className="sub-image">
                      <img src="./images/vanshika.jpg" />
                    </div>
                  </div>

                  <div className="title">
                    <span>Vanshika Sharma</span>
                    <h6>Software Developer</h6>
                  </div>
                </div>
              </a>

              {/* </div> */}
            </div>
          </div>
        </div>

        <div
          className="content col-md-offset-6 col-lg-offset-6 hide "
          id="where"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.960396025892!2d77.11434431508529!3d28.750599382371362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9b0c8a68d6f%3A0xb0ae16cfde1b0dc4!2sDTU%20INNOVATION%20AND%20INCUBATION%20FOUNDATION!5e0!3m2!1sen!2sin!4v1639460310633!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
