import React from "react";
import { FaTruck, FaPhone } from "react-icons/fa";
import "./assigndriver.css";
import staring from "../assets/staring.png"; 

function AssignDriver() {
  return (
    <div className="assign-wrapper">
      <h1 className="assign-heading">
        Assign Driver for Pratapgarh → Mumbai
      </h1>

      <div className="assign-cards">

        {[1, 2, 3].map((_, index) => (
          <div className="assign-card" key={index}>

            <div className="assign-top">
              <img src={staring} alt="Starting Vehicle" className="assign-img"/>

              <div className="assign-info">
                <h3>Sushil</h3>
                <p className="truck">
                  <FaTruck /> MH12 AB 4567
                </p>
                <p className="status active">Active Now</p>
              </div>
            </div>

            <hr/>

            <p className="phone">
              <FaPhone /> 9875367730
            </p>

            <button className="assign-btn">
              Assign Driver
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default AssignDriver;
