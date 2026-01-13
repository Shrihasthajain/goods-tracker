import React from "react";
import "./userlogin.css";
import { useEffect } from "react";
import imagelogo from "../assets/imagelogo.png";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);
  return (
    <div className="exact-wrapper">

      <header className="top-header">
        <img src={imagelogo} alt="logo" className="logo" />
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </header>

      <div className="top-dark"></div>

      <svg className="wave-top" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path
          fill="#ffffff"
          d="M0,80 C240,120 480,40 720,60 C960,80 1200,40 1440,70 L1440,0 L0,0 Z"
        />
      </svg>

      <svg className="wave-top" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          fill="#7A4A2E"
          d="M0,120 C360,60 540,20 720,40 C900,60 1080,120 1440,120 L1440,200 L0,200 Z"
        />
      </svg>

      <div className="bottom-brown"></div>

      <svg className="wave-top" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#ffffff"
          d="M0,320 C390,320 380,20 720,80 C900,140 1100,360 1440,180 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="content-layer">

        <div className="login-card">
          <div className="card-icon">🚚</div>
          <h2>Welcome Back</h2>
          <p>Login to continue</p>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="login-btn" onClick={() => navigate("/login")} >Login</button>
        </div>

        <div className="right-text">
          <h1>Goods Tracker</h1>
          <h2>Login Page</h2>
          <span>Trending now</span>
        </div>

      </div>
    </div>
  );
}
export default UserLogin;