import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "../Styles/Navbar.css";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaFileUpload } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="icons-container">
          <Link to="/">
            <IoHome className="nav-icon" />
          </Link>
          <Link to="">
            <RiDatabase2Fill className="nav-icon" />
          </Link>
          <Link to="">
            <FaFileUpload className="nav-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
