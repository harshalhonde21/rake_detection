import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Svg from "./components/Svg.jsx";
import RakeForm from "./pages/RakeForm.jsx";
import Table from "./pages/Table.jsx";
import UpdateTable from "./pages/UpdateTable.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<RakeForm />} />
          <Route path="/table" element={<Table />} />
          <Route index element={<UpdateTable />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
