import React from "react";

export default function Footer(){
  return(
    <div className="footer-container">

      <div className="footer-content">
        <div className="footer-item">
          <div>
            <img src="./img/phone.png" alt="phn" className="phn"/>
          </div>
          <div className="box-text">
            <p>Phone Number</p>
            <h4>+974 3118 1843</h4>
          </div>
        </div>

        <div className="footer-item">
          <div>
            <img src="./img/mail.png" alt="mail" className="mail"/>
          </div>
          <div className="box-text">
            <p>Email Address</p>
            <h4>Elbrithcqhr@gmail.com</h4>
          </div>
        </div>

        <div className="footer-item">
          <div>
            <img src="./img/loc.png" alt="loc" className="adress"/>
          </div>
          <div className="box-text">
            <p>Office Location</p>
            <h4>Ambassador Street, Zone 61</h4>
          </div>
        </div>
      </div>

      <div className="footer-logo">
        <img src="./img/logo.png" alt="Elbrit Life Sciences Logo" className="logo"/>
        <div className="logo-text">
          <p>Your health, physical and emotional well-being is important to us. We</p>
          <p>are always by your side and have made it even easier for you to find</p>
          <p>the necessary vitamins.</p>
        </div>
      </div>

      <div className="footer-address">
        <img src="./img/location.png" alt="location" className="loc"/>
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </div>
  )
}