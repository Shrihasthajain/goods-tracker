import React, { useState, useEffect } from "react";
import imagelogo from "../assets/imagelogo.png";
import { TextField } from "@mui/material";
import "./adddriver.css";

function AddDriver() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showAddDriverPopup, setShowAddDriverPopup] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);

    if (value.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="driver-container">
      <div className="w-full flex justify-center mt-10">
        <img src={imagelogo} alt="logo" className="driver-logo" />
      </div>
       <div className="driver-flex">
      <div className="driver-card">
        <h2 className="driver-title">Add Driver</h2>
      <div className="w-full mt-6">
        <TextField
          fullWidth
          label="Driver Mobile Number"
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          error={Boolean(phoneError)}
          helperText={phoneError}
          variant="outlined"
          className="driver-textfield"
        />
      </div>
      <div className="mt-4 w-full">
            <button
              className="driver-button" onClick={() => setShowAddDriverPopup(true)}>
             Add Driver
            </button>
          </div>
      </div>
      
            {showAddDriverPopup && (
              <div className="driver-overlay">
                <div className="adddriver-card">
                  <img src={imagelogo} alt="Logo" className="adddriver-logo" />
                  <h2>Driver Not Found</h2>
                  <p>
                    No registered driver found with this mobile number. Please ask the driver to register on the Goods Tracker App first.
                  </p>
                  <div className="driver-btn">
                <button className="adddriver-button" onClick={() => setShowAddDriverPopup(false)}>OK</button>
              </div>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default AddDriver;
