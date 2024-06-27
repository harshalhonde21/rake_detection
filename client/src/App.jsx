import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Svg from "./components/Svg.jsx";

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
      {/* <Svg/> */}
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
