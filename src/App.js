import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import OTP from "./pages/otp";
import TransportReg from "./pages/transportreg";
import Dashboard from "./pages/dashboard";
import Findloads from "./pages/findloads";
import UserLogin from "./pages/userlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/otp" element={<OTP />} /> 
        <Route path="/transportreg" element={<TransportReg/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/findloads" element={<Findloads/>} />
      </Routes>
    </Router>
  );
}

export default App;
