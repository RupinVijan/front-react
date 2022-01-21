import React from 'react'
import Img1 from "../../files/images/guided-house-visit@4x.png"
import Img2 from "../../files/images/domestic-assistance@4x.png"
import Img3 from "../../files/images/essential-home-furnishing@4x.png"

export default function Service() {
    return (
        <>
        <div className="col" data-aos="" data-aos-duration="3000">
        <h1 id="ser-head">Services We Offer</h1>
        <div className="row">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img1}  alt="Avatar"/>
                <h2>Rental Properties</h2>
              </div>
              <div className="flip-card-back">
                <h4>Renting flats is made easy through Monkhood. Our student housing solutions are designed to meet your needs.<br /> <br />
                  <a href="/rentprop">Click here for more information.
                  </a></h4>
               
              </div>
            </div>
          </div> 
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Img2} alt="Avatar"/>
              <h2>Domestic Assistance</h2>
            </div>
            <div className="flip-card-back">
              <h4>Having domestic help these days is a necessity. Monkhood makes it easy and affordable.<br/><br/>
                <a href="/service"> Click here for more information.
                </a></h4>
             
            </div>
          </div>
        </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Img3} alt="Avatar" />
            <h2>Rental Home Furnishings </h2>
          </div>
          <div className="flip-card-back">
            <h4>Monkhood also provides furniture(Beds, Tables, Chairs, etc.), Kitchen Amenities(Utensils), and Appliances(Refrigerators, Geysers, AC, etc.).<br/>
              <br/> 
        <a href="/service"> Click here for more information.
        </a></h4>
          </div>
        </div>
      </div>
    </div> 
    
    
    </div></>
    )

}
