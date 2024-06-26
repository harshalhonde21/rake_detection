import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import "../Styles/Login.css";
export default function Login() {
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>
        <form
          action="
        "
        >
          <div className="inputs">
            <div className="input-icon">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="input-icon">
              <FaLock className="icon"  />

              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="btns">
                <input type="submit" value="Submit" />
                <input type="reset" value="Clear Form" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
