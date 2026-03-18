import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import imagelogo from "../assets/imagelogo.png";
import { useEffect } from "react";
import "./otp.css";
import { useTranslation } from "react-i18next";

function OTP() {
  useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto"; 
      };
    }, []);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const inputsRef = useRef([]);

      const handleChange = (e, index) => {
            const value = e.target.value;

            if (!/^[0-9]$/.test(value) && value !== "") return;

            if (value !== "" && index < 5) {
            inputsRef.current[index + 1].focus(); 
            }
        };

      const handleKeyDown = (e, index) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
            }
        };

return (
    <div className="otp-forms otp-form">
        <div className="otplogo">
             <img src={imagelogo} alt="logo" className="otp-logo" />
           </div>
           <div className="otp-container">
      <div
        className="card1 otp-card">
        <h2 className="otp-title">{t("otp.title")}</h2>
        <p className="otp-subtitle">
          {t("otp.subtitle")}
        </p>

          <div className="otp-input-wrapper">
             {[...Array(6)].map((_, index) => (
             <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"

              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
            </div>
<div className="flex-col">
        <p className="otp-info-text">
          {t("otp.resendText")}{" "}
          <button className="underline font-semibold text-[#5A3A1E]">{t("otp.resend")}</button>
        </p>
        <p className="otp-info-text">
          {t("otp.newUser")}{" "}
          <button className="underline font-semibold text-[#5A3A1E]"
          onClick={() => navigate("/transportreg")}> {t("otp.register")} </button>
        </p>
        </div>

        <button
          className="otp-button"
       onClick={() => navigate("/dashboard")} >
          {t("otp.verify")}
        </button>
      </div>
      </div>
    </div>
  );
}
export default OTP;