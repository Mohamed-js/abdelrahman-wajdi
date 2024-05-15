import "./App.css";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Services from "./screens/Services";
import { useState } from "react";
import AboutUs from "./screens/AboutUs";

function App() {
  const [handleSidebar, setHandleSidebar] = useState(false);
  return (
    <>
      {handleSidebar && <Sidebar handleSidebar={handleSidebar} setHandleSidebar={setHandleSidebar}/>}
      <Navbar setHandleSidebar={setHandleSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

    </>
  );
}

export default App;
