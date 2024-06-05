import "./App.css";
import React from "react";
import Home from "./screens/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AboutUs from "./screens/AboutUs";
import OurWorks from "./screens/OurWokrs";
import Login from "./screens/Login";
import Form from "./screens/Form";
import WorkDetails from "./screens/WorkDetails";

function App() {
  const [handleSidebar, setHandleSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true upon successful login
    navigate("/form"); // Redirect to the form page
  };


  const isLoginPage = window.location.pathname === "/login";

  return (
    <div className="overflow-hidden">
      {/* Render Sidebar if not on login page */}
      {!isLoginPage && handleSidebar && <Sidebar handleSidebar={handleSidebar} setHandleSidebar={setHandleSidebar} />}
      {/* Render Navbar if not on login page */}
      {!isLoginPage && <Navbar setHandleSidebar={setHandleSidebar} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/our-works/:id" element={<WorkDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn ? <Route path="/form" element={<Form isLoggedIn={isLoggedIn} />} /> : <Route path="/form" element={<Login onLogin={handleLogin} />} />}
      </Routes>
      
    </div>
  );
}

export default App;
