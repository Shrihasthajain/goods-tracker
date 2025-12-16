import React from "react";
import imagelogo from "../assets/imagelogo.png";
import viewloads from "../assets/viewloads.png";     
import trackgoods from "../assets/trackgoods.png";   
import adddriver from "../assets/adddriver.png";    
import diesel from "../assets/diesel.png";
import "./dashboard.css";           

function Dashboard() {
  const cards = [
    { title: "View Loads", icon: viewloads},
    { title: "Track Goods", icon: trackgoods},
    { title: "Add Driver", icon: adddriver},
    { title: "Diesel", icon: diesel},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6750A4] via-[#6750A4] to-[#6750A4] px-4">
      
      <div className="w-full flex justify-center mb-14">
        <img src={imagelogo} alt="logo" className="top-logo" />
      </div>

      <div className="flex justify-center">
         <div className="grid grid-cols-2 gap-12 max-w-4xl w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dashboard-card">
              <img
                src={card.icon}
                alt={card.title}
                className="w-16 h-16 mb-5 object-contain"
              />

              <p className="text-black font-bold text-center text-xl">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
