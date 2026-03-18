import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTruck,
  FaBox,
  FaWeightHanging,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import imagelogo from "../assets/imagelogo.png"; 
import "./viewdetails.css";
import { useNavigate } from "react-router-dom";

function ViewDetails() {
  const [showAssignPopup, setShowAssignPopup] = useState(false);
  const [showNoPopup, setShowNoPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="view-wrapper">
      <h1 className="view-main-heading">Load Details</h1>

      <div className="view-cards-wrapper">
        <div className="view-card">
          <h2 className="view-card-title">Route Details</h2>
          <p><FaMapMarkerAlt className="view-icon-green" /> Loading: Pratapgarh</p>
          <p><FaMapMarkerAlt className="view-icon-yellow" /> Unloading: Mumbai</p>
        </div>

        <div className="view-card">
          <h2 className="view-card-title">Load Information</h2>
          <p><FaBox className="view-icon-blue" /> Material: Cement Bags</p>
          <p><FaTruck className="view-icon-brown" /> Vehicle: Open Full Body</p>
          <p><FaWeightHanging className="view-icon-purple" /> Capacity: 20 Ton</p>
          <p><GiCarWheel className="view-icon-orange" /> Tyres: 10 Tyres</p>
          <p><FaClock className="view-icon-teal" /> Truck Time: Today 3 PM</p>
          <p>💰 Price: ₹37,523</p>
        </div>

        <div className="view-card">
          <h2 className="view-card-title">Assignment Info</h2>
          <p>Assign</p>
          <p><FaUserCheck className="view-icon-red" /> Status: Unassigned</p>
        </div>
      </div>

      <div className="view-card-buttons">
        <button className="view-btn-call">Call Shipper</button>
        <button className="view-btn-assign" onClick={() => setShowAssignPopup(true)}>Assign Driver</button>
      </div>

      {showAssignPopup && (
        <div className="viewpopup-overlay">
          <div className="viewpopup-card">
            <img src={imagelogo} alt="Logo" className="viewpopup-logo" />
            <h2>Have you contacted the Shipper?</h2>
            <p>
              Before assigning this load, please make sure the shipper knows about it. Did you get their approval?
            </p>
            <div className="viewpopup-buttons">
           <button className="viewbtn-popup"onClick={() => {setShowAssignPopup(false); setShowNoPopup(true);}}>No</button>
           <button className="viewbtn-popup" onClick={() => {setShowAssignPopup(false); navigate("/assigndriver");}}>Yes</button>
        </div>
          </div>
        </div>
      )}

      {showNoPopup && (
        <div className="viewpopup-overlay">
          <div className="viewpopup-card">
            <img src={imagelogo} alt="Logo" className="viewpopup-logo" />

            <h2>Reach out to the Shipper</h2>

            <p>
              Please give the shipper a quick call to get clarity.
              Staying proactive keeps the supply chain smooth!
            </p>

            <div className="viewpopup-buttons">
              <button
                className="viewbtn-popup"
                onClick={() => setShowNoPopup(false)}>OK</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ViewDetails;
