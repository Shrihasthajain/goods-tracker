import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import OTP from "./pages/otp";
import TransportReg from "./pages/transportreg";
import Dashboard from "./pages/dashboard";
import Findloads from "./pages/findloads";
import UserLogin from "./pages/userlogin";
import ViewDetails from "./pages/viewdetails";
import AssignDriver from "./pages/assigndriver";
import Language from "./pages/language";
import AddDriver from "./pages/adddriver";
import Homepage from "./pages/homepage";
import Tprofile from "./pages/tprofile";
import Privacy from "./pages/privacy";
import TermsConditions from "./pages/termsconditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/language" element={<Language />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/otp" element={<OTP />} /> 
        <Route path="/transportreg" element={<TransportReg/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/findloads" element={<Findloads/>} />
        <Route path="/viewdetails" element={<ViewDetails/>} />
        <Route path="/assigndriver" element={<AssignDriver/>} />
        <Route path="/adddriver" element={<AddDriver/>} />
        <Route path="/tprofile" element={<Tprofile/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/termsconditions" element={<TermsConditions/>} />
      </Routes>
    </Router>
  );
}

export default App;
