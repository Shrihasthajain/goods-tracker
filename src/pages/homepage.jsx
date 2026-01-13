import React from "react";
import { FaSearch, FaTruck, FaMapMarkedAlt, FaCrown } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import "./homepage.css";
import imagelogo from "../assets/imagelogo.png";
import truck from "../assets/truck.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
      const navigate = useNavigate();
  return (
    <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${truck})` }}>
      <div className="overlay"></div>

      <nav className="navbar">
        <div className="nav-left">
          <img src={imagelogo} alt="Goods Tracker" />
        </div>

        <div className="nav-right">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact Us</span>
          <FaSearch className="search-icon" />
        </div>
      </nav>

      <section className="hero">
        <h1>Track Your Goods. Anytime. Anywhere.</h1>
        <p>
          Goods Tracker is a smart logistics platform connecting
          <strong> Drivers, Transporters & Shippers </strong>
          with real-time tracking, faster deliveries, and premium tools.
        </p>
        <button className="hero-btn" onClick={() => navigate("/language")}>Get Started</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <FaMapMarkedAlt className="icon" />
          <h3>Real-Time Tracking</h3>
          <p>
            Live GPS tracking with instant status updates for every shipment.
          </p>
        </div>

        <div className="feature-card">
          <MdSpeed className="icon" />
          <h3>Fast Logistics</h3>
          <p>
            Smart load matching and optimized routes for faster delivery.
          </p>
        </div>

        <div className="feature-card">
          <FaTruck className="icon" />
          <h3>All Roles Supported</h3>
          <p>
            Dedicated dashboards for Drivers, Transporters and Shippers.
          </p>
        </div>

        <div className="feature-card premium">
          <FaCrown className="icon" />
          <h3>Premium Plans</h3>
          <p>
            Priority loads, advanced analytics and premium customer support.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Why Choose Goods Tracker?</h2>
        <p>
          We bring transparency, speed and trust to logistics. Manage your
          shipments confidently with real-time visibility and powerful tools.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
