import React, { useState } from "react";
import imagelogo from "../assets/imagelogo.png";
import viewloads from "../assets/viewloads.png";
import trackgoods from "../assets/trackgoods.png";
import adddriver from "../assets/adddriver.png";
import diesel from "../assets/diesel.png";
import "./dashboard.css";
import { Home, History, Help, Settings, Logout, Person, WorkspacePremium} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { NotificationsNone, NotificationsActive } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function Dashboard() {

  const [isSubscribed, setIsSubscribed] = useState(false);

  // useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = "auto"; 
  //     };
  //   }, []);

  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cards = [
    { title: t("dashboard.cards.viewLoads"), icon: viewloads, path:"/findloads" },
    { title: t("dashboard.cards.trackGoods"), icon: trackgoods },
    { title: t("dashboard.cards.addDriver"), icon: adddriver, path:"/adddriver" },
    { title: t("dashboard.cards.diesel"), icon: diesel },
  ];

  return (
    <div className="dashboard-wrapper">

       <aside className="sidebar">
        <div className="sidebar-profile">
          <Person className="profile-icon"/>
          <p>{t("dashboard.profile")}</p>
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-item">
            <Settings /> 
            <span>{t("dashboard.settings")}</span>
          </div>

          <div className="sidebar-item logout">
            <Logout /> 
            <span>{t("dashboard.logout")}</span>
          </div>
        </div>
      </aside> 

      <div className="main-content">
        <header className="top-navbar">
          <div className="nav-home">
            <Home />
            <span>{t("dashboard.home")}</span>
          </div>

          <div className="nav-home">
            <History />
            <span>{t("dashboard.history")}</span>
          </div>

         <div
            className="nav-home"
            onClick={() => setIsSubscribed(!isSubscribed)}
            style={{ cursor: "pointer" }}>
            {isSubscribed ? <NotificationsActive /> : <NotificationsNone />}
            <span>{isSubscribed ? t("dashboard.subscribed") : t("dashboard.subscribe")}</span>
          </div>


           <div className="nav-home">
            <Help />
            <span>{t("dashboard.help")}</span>
          </div>

          <div className="nav-premium">
            <WorkspacePremium className="crown-icon" />
            <span>{t("dashboard.premium")}</span>
          </div>
        </header>

        <div className="logo-wrapper">
          <img src={imagelogo} alt="logo" className="dashtoplogo" />
        </div>

          <div className="lines"> 
            <h1 className="h1">{t("dashboard.headline")}</h1>
             <p className="p">{t("dashboard.subHeadline")}</p>
           </div>

        <div className="cards-wrapper">

          <div className="grid-layout">
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