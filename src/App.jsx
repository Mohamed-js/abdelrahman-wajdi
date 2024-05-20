import "./App.css";
import React from "react";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AboutUs from "./screens/AboutUs";
import OurWorks from "./screens/OurWokrs";

function App() {
  const [handleSidebar, setHandleSidebar] = useState(false);
  return (
    <div className="overflow-hidden">
      {handleSidebar && <Sidebar handleSidebar={handleSidebar} setHandleSidebar={setHandleSidebar}/>}
      <Navbar setHandleSidebar={setHandleSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
