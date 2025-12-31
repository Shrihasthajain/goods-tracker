import React, { useState } from "react";
import transporter from "../assets/transporter.png";
import shipper from "../assets/shipper.png";
import imagelogo from "../assets/imagelogo.png";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./login.css";

function Login() {
  useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto"; 
      };
    }, []);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [errorPopup, setErrorPopup] = useState("");

  const handleContinue = () => {
    if (!selectedRole) {
      setErrorPopup("Please select your role");
      return;
    }

    if (phone.length !== 10) {
      setErrorPopup("Please enter a valid 10-digit phone number");
      return;
    }
    navigate("/otp");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#6750A4] px-4">
 <div className="w-full flex justify-center -mt-10">
      <img src={imagelogo} alt="logo" className="top-logo" />
    </div>
    <div className="flex flex-1 items-center justify-center">
      <div
        className="card text-center px-8 py-10 max-w-md w-full rounded-2xl shadow-xl border border-white">

        <p className="text-xl mb-1 font-bold text-black">Welcome Back 👋</p>
        <p className="text-md mb-6 text-black">
          Let's get you logged in to continue your journey
        </p>

        <div className="border border-black rounded-lg p-6">
          <h2 className="text-black font-bold text-lg mb-4 text-center">
            Select Your Role
          </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div
          className={`flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer 
          ${
            selectedRole === "Transporter"
              ? "bg-[#6750A4] text-white border-2"
              : "border border-black bg-transparent text-black"
          }`}
          onClick={() => setSelectedRole("Transporter")}
        >
          <img
            src={transporter}
            alt="Transporter"
            className={`w-16 h-16 mb-2 ${selectedRole === "Transporter" ? "invert brightness-200" : ""}`}
          />
          <span className="font-bold">Transporter</span>
        </div>


      <div
          className={`flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer 
          ${
            selectedRole === "Shipper"
              ? "bg-[#6750A4] text-white border-2"
              : "border border-black bg-transparent text-black"
          }`}
          onClick={() => setSelectedRole("Shipper")}
        >
          <img
            src={shipper}
            alt="Shipper"
            className={`w-16 h-16 mb-2 ${selectedRole === "Shipper" ? "invert brightness-200" : ""}`}
          />
          <span className="font-bold">Shipper</span>
        </div>

          </div>

          <div className="w-full mt-6">
            <TextField
              fullWidth
              label="Enter your phone number"
              type="text"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setPhone(value);

                if (value.length !== 10) {
                  setPhoneError("Phone number must be 10 digits");
                } else {
                  setPhoneError("");
                }
              }}
              error={Boolean(phoneError)}
              helperText={phoneError}
              variant="outlined"
              className="custom-textfield"
            />
          </div>

          <div className="mt-4 w-full">
            <button
              className="w-full py-3 text-white font-semibold rounded-lg bg-[#6750A4]"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {errorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-xs w-full">
            <p className="text-black font-semibold mb-4">{errorPopup}</p>
            <button
              className="mt-2 px-20 py-2 bg-[#6750A4] text-white rounded-lg"
              onClick={() => setErrorPopup("")}
            >
              OK
            </button>
          </div>
        </div>
        
      )}
      </div>
    </div>
  );
}

export default Login;
