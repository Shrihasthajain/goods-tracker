import React, { useState } from "react";
import transporter from "../assets/transporter.png";
import shipper from "../assets/shipper.png";
import imagelogo from "../assets/imagelogo.png";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./login.css";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const handleContinue = () => {
    if (!selectedRole) {
      setErrorPopup(t("login.selectRoleError"));
      return;
    }

    if (phone.length !== 10) {
      setErrorPopup(t("login.phoneError"));
      return;
    }
    navigate("/otp");
  };

  return (
    <div className="login-container">
 <div className="w-full flex justify-center -mt-10">
      <img src={imagelogo} alt="logo" className="login-logo" />
    </div>
    <div className="center-flex">
      <div
        className="logincard">

        <p className="p1">{t("login.welcomeBack")}</p>
        <p className="p2">
         {t("login.subText")}
        </p>

        <div className="role-box">
          <h2 className="role-title">
           {t("login.selectRole")}
          </h2>

      <div className="role-grid">
          <div
          className={`role-card 
          ${
            selectedRole === "Transporter"
              ? "bg-[#7A4A2E] text-white border-2"
              : "border border-[#D7C4B2] bg-transparent text-[#5A3A1E]"
          }`}
          onClick={() => setSelectedRole("Transporter")}
        >
          <img
            src={transporter}
            alt="Transporter"
            className={`w-16 h-16 mb-2 ${selectedRole === "Transporter" ? "invert brightness-200" : ""}`}
          />
          <span className="font-bold">{t("login.transporter")}</span>
        </div>


      <div
          className={`role-card
          ${
            selectedRole === "Shipper"
              ? "bg-[#7A4A2E] text-white border-2"
              : "border border-[#D7C4B2] bg-transparent text-[#5A3A1E]"
          }`}
          onClick={() => setSelectedRole("Shipper")}
        >
          <img
            src={shipper}
            alt="Shipper"
            className={`w-16 h-16 mb-2 ${selectedRole === "Shipper" ? "invert brightness-200" : ""}`}
          />
          <span className="font-bold">{t("login.shipper")}</span>
        </div>

          </div>

          <div className="w-full mt-6">
            <TextField
              fullWidth
              label={t("login.enterPhone")}
              type="text"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setPhone(value);

                if (value.length !== 10) {
                  setPhoneError(t("login.phoneHelper"));
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
              className="continue-button"
              onClick={handleContinue}
            >
              {t("login.continue")}
            </button>
          </div>
        </div>
      </div>

      {errorPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p className="popup-text">{errorPopup}</p>
            <button
              className="popup-button"
              onClick={() => setErrorPopup("")}
            >
              {t("login.ok")}
            </button>
          </div>
        </div>
        
      )}
      </div>
    </div>
  );
}

export default Login;
