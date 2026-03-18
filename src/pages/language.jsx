import React, { useState } from "react";
import "./language.css";
import imagelogo from "../assets/imagelogo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Language() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState(null);
  const { t, i18n } = useTranslation();

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang.toUpperCase());
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleContinue = () => {
    if (!selectedLang) return;
    navigate("/userlogin");
  };

  return (
    <div className="language-container">
      <img src={imagelogo} alt="Logo" className="language-logo" />

      <div className="language-card-main">
        <h2 className="language-heading">{t("language.choose")}</h2>
        <p className="language-subtext">{t("language.personalize")}</p>

        <div className="language-options">
          <div
            className={`lang-card ${selectedLang === "EN" ? "active" : ""}`}
            // onClick={() => setSelectedLang("EN")}
            onClick={() => handleLanguageSelect("en")}
          >
            <span className="lang-code">EN</span>
            <span className="lang-text">English</span>
          </div>

          <div
            className={`lang-card ${selectedLang === "HI" ? "active" : ""}`}
            // onClick={() => setSelectedLang("HI")}
            onClick={() => handleLanguageSelect("hi")}
          >
            <span className="lang-code">HI</span>
            <span className="lang-text">हिन्दी</span>
          </div>

          <div
            className={`lang-card ${selectedLang === "KN" ? "active" : ""}`}
            // onClick={() => setSelectedLang("KN")}
             onClick={() => handleLanguageSelect("kn")}
          >
            <span className="lang-code">KN</span>
            <span className="lang-text">ಕನ್ನಡ</span>
          </div>

          <div
            className={`lang-card ${selectedLang === "TA" ? "active" : ""}`}
            onClick={() => handleLanguageSelect("ta")}
          >
            <span className="lang-code">TA</span>
            <span className="lang-text">தமிழ்</span>
          </div>

          <div
            className={`lang-card ${selectedLang === "TE" ? "active" : ""}`}
            onClick={() => handleLanguageSelect("te")}
          >
            <span className="lang-code">TE</span>
            <span className="lang-text">తెలుగు</span>
          </div>

          <div
            className={`lang-card ${selectedLang === "ML" ? "active" : ""}`}
            onClick={() => handleLanguageSelect("ml")}
          >
            <span className="lang-code">ML</span>
            <span className="lang-text">മലയാളം</span>
          </div>

        </div>

        <button className="continue-btn" onClick={handleContinue} disabled={!selectedLang}>
           {t("language.continue")}
        </button>
      </div>
    </div>
  );
}

export default Language;
