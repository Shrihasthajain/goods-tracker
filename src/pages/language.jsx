import React from "react";
import "./language.css";
import imagelogo from "../assets/imagelogo.png";
import { useNavigate } from "react-router-dom";

function Language () {
   const navigate = useNavigate();
  return (
    <div className="language-container">
      <img src={imagelogo} alt="Logo" className="language-logo" />

      <div className="language-card-main">
        <h2 className="language-heading">Choose Language</h2>
        <p className="language-subtext">Personalize your experience</p>

        <div className="language-options">
          <div className="lang-card">
            <span className="lang-code">EN</span>
            <span className="lang-text">English</span>
          </div>

          <div className="lang-card">
            <span className="lang-code">HI</span>
            <span className="lang-text">हिन्दी</span>
          </div>

          <div className="lang-card">
            <span className="lang-code">KN</span>
            <span className="lang-text">ಕನ್ನಡ</span>
          </div>
        </div>

        <button className="continue-btn" onClick={() => navigate("/userlogin")}>Continue</button>
      </div>
    </div>
  );
};

export default Language;
