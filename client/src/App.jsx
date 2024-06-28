import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Svg from "./components/Svg.jsx";
import RakeForm from "./pages/RakeForm.jsx";
=======
>>>>>>> 73c0915c49fef4e3224888984f12bb0b31473e4c

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<RakeForm />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
