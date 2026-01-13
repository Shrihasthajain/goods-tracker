import React, { useState,useEffect } from "react";
import imagelogo from "../assets/imagelogo.png";
import viewloads from "../assets/viewloads.png";
import trackgoods from "../assets/trackgoods.png";
import adddriver from "../assets/adddriver.png";
import diesel from "../assets/diesel.png";
import "./dashboard.css";
import { Home, History, Help, Settings, Logout, Person, WorkspacePremium} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { NotificationsNone, NotificationsActive } from "@mui/icons-material";

function Dashboard() {

  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto"; 
      };
    }, []);

    const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate();
  const cards = [
    { title: "View Loads", icon: viewloads, path:"/findloads" },
    { title: "Track Goods", icon: trackgoods },
    { title: "Add Driver", icon: adddriver, path:"/adddriver" },
    { title: "Diesel", icon: diesel },
  ];

  return (
    <div className="dashboard-wrapper">

       <aside className="sidebar">
        <div className="sidebar-profile">
          <Person className="profile-icon"/>
          <p className="profile-name">My Profile</p>
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-item">
            <Settings /> 
            <span>Settings</span>
          </div>

          <div className="sidebar-item logout">
            <Logout /> 
            <span>Logout</span>
          </div>
        </div>
      </aside> 

      <div className="main-content">
        <header className="top-navbar">
          <div className="nav-home">
            <Home />
            <span>Home</span>
          </div>

          <div className="nav-home">
            <History />
            <span>History</span>
          </div>

         <div
            className="nav-home"
            onClick={() => setIsSubscribed(!isSubscribed)}
            style={{ cursor: "pointer" }}>
            {isSubscribed ? <NotificationsActive /> : <NotificationsNone />}
            <span>{isSubscribed ? "Subscribed" : "Subscribe"}</span>
          </div>


           <div className="nav-home">
            <Help />
            <span>Help</span>
          </div>

          <div className="nav-premium">
            <WorkspacePremium className="crown-icon" />
            <span>Premium</span>
          </div>
        </header>

        <div className="logo-wrapper">
          <img src={imagelogo} alt="logo" className="toplogo" />
        </div>

        <div className="cards-wrapper">

          <div className="grid grid-cols-2 gap-12 max-w-4xl w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`dashboard-card ${
                  activeCard === index ? "active-card" : ""
                }`}
                onClick={() => {
                  setActiveCard(index);
                  if (card.path) navigate(card.path);
                }}
              >
            <img
              src={card.icon}
              alt={card.title}
              className={`w-16 h-16 mb-5 object-contain ${
                activeCard === index ? "icon-white" : ""
              }`}
            />

            <p
              className={`font-bold text-xl text-center ${
                activeCard === index ? "text-white" : "text-[#5A3A1E]"
              }`}
            >
              {card.title}
            </p>
          </div>

            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
